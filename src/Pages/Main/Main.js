import React, { Component } from 'react'
import './Main.css';
import background_line_2 from "../../images/main-background-line1.png"
import background_line_1 from "../../images/main-background-line2.png"
import background_line_3 from "../../images/main-background-line3.png"
import main_line_1 from "../../images/main-line1.png"
import main_line_2 from "../../images/main-line2.png"
import main_line_3 from "../../images/main-line3.png"
import main_line_4 from "../../images/main-line4.png"
import bobl_1 from "../../images/bobl1.png"
import bobl_2 from "../../images/bobl2.png"
import bobl_3 from "../../images/bobl3.png"
import bobl_4 from "../../images/bobl4.png"
import main_title from "../../images/main-title.png"
import main_title_underline from "../../images/main-underline.png"
import MinCard from "./MinCard"
import icon1 from "../../images/icon1.png"
import icon2 from "../../images/icon2.png"

import main_title_underline_off from "../../images/main-underline-off.png"
import main_line_3_off from "../../images/main-line3-off.png"
import bobl_2_off from "../../images/bobl2-off.png"
import bobl_3_off from "../../images/bobl3-off.png"

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      imgJustScroll: main_line_3,
      imgBobl2: bobl_2,
      imgBobl3: bobl_3,
      imgJustScrollOn: true,

      main_title_underline: main_title_underline,
      main_title_underline_on: true,
      counter: 0,
      nameOfAgency: <h1 id='nameOfAgency'>SanArt.IT</h1>,
    };
  }

  //turn on and off lamp in right high corner
  tick() {
    if(this.state.imgJustScrollOn){
    this.setState({
      imgJustScroll: main_line_3_off,
      imgBobl2: bobl_2_off,
      imgBobl3: bobl_3_off,
      imgJustScrollOn: false,
    });
  }
  else{
    this.setState({
      imgJustScroll: main_line_3,
      imgBobl2: bobl_2,
      imgBobl3: bobl_3,
      imgJustScrollOn: true
    });
  }
  }

  onOffUnderline () {
    let intervalUnderline;
   
    intervalUnderline = setInterval(() => {
      this.setState((oldState) => {
        if (oldState.main_title_underline_on) {
          console.log(oldState.counter);
         return { 
          main_title_underline: main_title_underline_off,
          main_title_underline_on: false,
          counter: ++oldState.counter,
          nameOfAgency: <h1 id='nameOfAgency_off'>SanArt.IT</h1> 
        };
        }else{
          if (oldState.counter>=3) {
            clearInterval(intervalUnderline);
            console.log("here");
            return { 
              main_title_underline: main_title_underline,
              main_title_underline_on: true,
              nameOfAgency: <h1 id='nameOfAgency'>SanArt.IT</h1> 
           };
          }else{
              return { 
                main_title_underline: main_title_underline,
                main_title_underline_on: true,
                nameOfAgency: <h1 id='nameOfAgency'>SanArt.IT</h1> 
              };
          }
        }
      
      });
    } , 1000);
  }

  componentDidMount() {
    this.intervalJustScroll = setInterval(() => this.tick(), 6000);
    this.onOffUnderline();
  }

  componentWillUnmount(){
    clearInterval(this.intervalJustScroll);
  }

  render() {
    return (
      <div className='main-page'>
        <div className='title'>
          <div className='name'>
            {this.state.nameOfAgency}
            <img src={this.state.main_title_underline} alt="" className="main_title_underline"></img>
          </div>
          <img src={main_title} alt="" className="main_title"></img>
        </div>

        <div className='whu_us'>
            <h2>Why us?</h2>
            <div className='mincards'>
            <MinCard image_or_number={<img src={icon1} alt="" className="icon"></img>} text={"We always complete projects on time"} />
            <MinCard image_or_number={30} text={"completed projects and happy clients"} />
            <MinCard image_or_number={<img src={icon2} alt="" className="icon"></img>} text={"We work with stellar clients"} />
            <MinCard image_or_number={20} text={"professional employees"} />
            </div>
          </div>
        
        <img src={bobl_1} alt="" className="bobl_1"></img>
        <img src={this.state.imgBobl2} alt="" className="bobl_2"></img>
        <img src={this.state.imgBobl3} alt="" className="bobl_3"></img>
        <img src={bobl_4} alt="" className="bobl_4"></img>
        <img src={main_line_1} alt="" className="main_line_1"></img>
        <img src={main_line_2} alt="" className="main_line_2"></img>
        <img src={this.state.imgJustScroll} alt="" className="main_line_3"></img>
        
        <img src={main_line_4} alt="" className="main_line_4"></img>
        <img src={background_line_1} alt="" className="lines-background1"></img>
        <img src={background_line_2} alt="" className="lines-background2"></img>
        <img src={background_line_3} alt="" className="lines-background3"></img>
      </div>
    )
  }
}


