import React, { Component } from 'react'
import './OurTeam.css'
import background_ourteam_1 from "../../images/feedback-line1.png"
import background_ourteam_2 from "../../images/main-background-line3.png"
import InfoWingow from "./InfoWingow"
import CircleCard from "./CircleCard"
import {workersInfo} from './DataWorker.js'

import employee1 from "../../images/ourteam/employee1.png"
import scroll from "../../images/ourteam/scroll.svg"

export default class OurTeam extends Component {

  constructor() {
		super();
		this.state = { 
      arr: workersInfo,
      worker_cards: workersInfo.slice(1*5-5,1*5).map((card, index) => <CircleCard key={index} id={card.id} borderClass={"border_" + card.color} photo_src = {card.photo_small} class_photo = {card.choose} />),
      big_info_window: <InfoWingow class={"worker_frame_"+workersInfo[0].color}  photo_src = {workersInfo[0].photo_big} 
      fullname = {workersInfo[0].fullname} position = {workersInfo[0].position} text = {workersInfo[0].text}/> };
	}

  changeInfoWindow = (event) => {
    this.setState( {
      big_info_window: <InfoWingow class={"worker_frame_"+workersInfo[event.target.id].color}  photo_src = {workersInfo[event.target.id].photo_big} 
      fullname = {workersInfo[event.target.id].fullname} position = {workersInfo[event.target.id].position} text = {workersInfo[event.target.id].text}/>, 

 });
  }

  render() {
    return (
      <div  className='our-team-page'>
        <img src={background_ourteam_1} alt="" className="img-feed-background1"></img>
        <img src={background_ourteam_2} alt="" className="img-our-team-background2"></img>

        {this.state.big_info_window}

        <div className='all-workers'  onClick={event => this.changeInfoWindow(event)}>
          <img src={scroll} alt="" className="worker-scroll-right"></img>
          {this.state.worker_cards}
          <img src={scroll} alt="" className="worker-scroll-left"></img>
        </div>
      </div>
    )
  }
}
