import React, { Component } from 'react'
import './OurTeam.css'
import background_ourteam_1 from "../../images/feedback-line1.png"
import background_ourteam_2 from "../../images/main-background-line3.png"
import InfoWingow from "./InfoWingow"
import CircleCard from "./CircleCard"
import {workersInfo} from './DataWorker.js'

import scroll from "../../images/ourteam/scroll.svg"

export default class OurTeam extends Component {

  constructor() {
		super();
		this.state = { 
      arr: workersInfo,
      worker_cards: this.choosen_card(workersInfo, 0),
      big_info_window: <InfoWingow class={"worker_frame_"+workersInfo[0].color}  photo_src = {workersInfo[0].photo_big} 
      fullname = {workersInfo[0].fullname} position = {workersInfo[0].position} text = {workersInfo[0].text}/> };
    }

    choosen_card = (arr, id)=>{
      arr.map(element => element.choose="circle-photo-of-worker");
      arr[id].choose="circle-photo-of-worker-choose";
      let result_array = new Array;
      for(let i = 0; i < workersInfo.length; i++){
        if(i==id){
          console.log(arr[i].color);
          result_array.push(<CircleCard key={i} id={arr[i].id} borderClass={"border_" + arr[i].color + "_choose"} photo_src = {arr[i].photo_small} class_photo = {arr[i].choose} />);
          continue;
        }
        result_array.push(<CircleCard key={i} id={arr[i].id} borderClass={"border_" + arr[i].color} photo_src = {arr[i].photo_small} class_photo = {arr[i].choose} />);
      }
      return result_array;
    }

  changeInfoWindow = (event) => {
    this.setState( {
      big_info_window: <InfoWingow class={"worker_frame_"+workersInfo[event.target.id].color}  photo_src = {workersInfo[event.target.id].photo_big} 
      fullname = {workersInfo[event.target.id].fullname} position = {workersInfo[event.target.id].position} text = {workersInfo[event.target.id].text}/>, 
      worker_cards: this.choosen_card(workersInfo, event.target.id),
    });
  }

  render() {
    return (
      <div  className='our-team-page'>
        <img src={background_ourteam_1} alt="" className="img-feed-background1"></img>
        <img src={background_ourteam_2} alt="" className="img-our-team-background2"></img>

        {this.state.big_info_window}

        <div className='all-workers'  onClick={event => this.changeInfoWindow(event)}>
        {this.state.worker_cards}
        </div>
      </div>
    )
  }
}
/*
<img src={scroll} alt="" className="worker-scroll-right"></img>
          {this.state.worker_cards}
          <img src={scroll} alt="" className="worker-scroll-left"></img>
          */ 