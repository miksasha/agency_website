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

export default class Main extends Component {
  render() {
    return (
      <div className='main-page'>
        <div className='title'>
          <div className='name'>
            <h1>SanArt.IT</h1>
            <img src={main_title_underline} alt="" className="main_title_underline"></img>
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
        <img src={bobl_2} alt="" className="bobl_2"></img>
        <img src={bobl_3} alt="" className="bobl_3"></img>
        <img src={bobl_4} alt="" className="bobl_4"></img>
        <img src={main_line_1} alt="" className="main_line_1"></img>
        <img src={main_line_2} alt="" className="main_line_2"></img>
        <img src={main_line_3} alt="" className="main_line_3"></img>
        <img src={main_line_4} alt="" className="main_line_4"></img>
        <img src={background_line_1} alt="" className="lines-background1"></img>
        <img src={background_line_2} alt="" className="lines-background2"></img>
        <img src={background_line_3} alt="" className="lines-background3"></img>
      </div>
    )
  }
}


