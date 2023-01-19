import React from 'react'
import './CircleCard.css'
import { ReactComponent as CircleBorder} from "../../images/ourteam/circle-border.svg"

export default function CircleCard(props) {
  return (
    <div className='circle-card'>
      <CircleBorder className={props.borderClass} id={props.id}/>
      <img src={props.photo_src} alt="" className={props.class_photo}></img>
    </div>
  )
}
