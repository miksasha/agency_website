import React, { Component } from 'react'
import './OurTeam.css'
import background_ourteam_1 from "../../images/feedback-line1.png"
import background_ourteam_2 from "../../images/main-background-line3.png"
import InfoWingow from "./InfoWingow"
import CircleCard from "./CircleCard"

import scroll from "../../images/ourteam/scroll.svg"

export default class OurTeam extends Component {

  constructor() {
		super();
		this.state = { 
      arr: [],
      worker_cards: [],
      big_info_window: {}, };
  }

  componentDidMount() {
    fetch('http://localhost:3000/workersInfo')
    .then(response => response.json())
    .then(data => {
      this.setState({
        arr: data,
        worker_cards: this.choosen_card(data, 0),
        big_info_window: data[0],
      })
      
      console.log(data)
      console.log('state => ', this.state.arr)
    })
    .catch(error => console.error(error))
  }

  choosen_card = (arr, id)=>{
    arr.map(element => element.choose="circle-photo-of-worker");
    arr[id].choose="circle-photo-of-worker-choose";
    let result_array = new Array;
    for(let i = 0; i < arr.length; i++){
      if(i==id){
        result_array.push(<CircleCard key={i} id={arr[i].id} borderClass={"border_" + arr[i].color + "_choose"} photo_src = {arr[i].photo_small} class_photo = {arr[i].choose} position = {arr[i].position} />);
        continue;
      }
        result_array.push(<CircleCard key={i} id={arr[i].id} borderClass={"border_" + arr[i].color} photo_src = {arr[i].photo_small} class_photo = {arr[i].choose} position = {arr[i].position} />);
    }
    return result_array;
  }

  changeInfoWindow = (event) => {
    this.setState( state => ({
      big_info_window: [...state.arr][event.target.id], 
      worker_cards: this.choosen_card([...state.arr], event.target.id),
    }));
  }

  scrollWorkers = (event) => {
    let current_coordinates = document.getElementById("all-workers-scroll").scrollLeft;
    if(event.target.className == 'worker-scroll-left'){
      document.getElementById("all-workers-scroll").scrollLeft = current_coordinates - 80;
    }
    if(event.target.className == 'worker-scroll-right'){
      document.getElementById("all-workers-scroll").scrollLeft = current_coordinates + 80;
    }
  }


  render() {
    return (
      <div  className='our-team-page'>
        <img src={background_ourteam_1} alt="" className="img-feed-background1"></img>
        <img src={background_ourteam_2} alt="" className="img-our-team-background2"></img>

        <InfoWingow 
        class={"worker_frame_"+this.state.big_info_window.color}  
        photo_src = {this.state.big_info_window.photo_big} 
        fullname = {this.state.big_info_window.fullname} 
        position = {this.state.big_info_window.position} 
        text = {this.state.big_info_window.text}/>
        
          <div className='all-workers-with-scroll' onClick={event => this.scrollWorkers(event)}>
            <img src={scroll} alt="" className="worker-scroll-left"></img>
              <div id='all-workers-scroll' className='all-workers' onClick={event => this.changeInfoWindow(event)}>
                {this.state.worker_cards}
              </div>
            <img src={scroll} alt="" className="worker-scroll-right"></img>
          </div>

        </div>
    )
  }
}