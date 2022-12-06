import React from 'react'
import './Card.css'

export default function Card( props ) {
  return (
    <div className='card'>
      <a href="https://www.figma.com/proto/siQsEyfhKgnb4bl8VTMPq2/DN?page-id=0%3A1&node-id=18%3A122&scaling=scale-down-width"  target="_blank" >
        <img src={props.image} alt="project image" className="img-card"></img>
        </a>

        <div className='description'>
            <span className='project_name'>{props.projectName}</span>
            <span>{props.days} days</span>
        </div>
        <div className='description-min'>
            <span className='project_type'>{props.projectType}</span>
            <span>{props.date}</span>
        </div>
    </div>
  )
}
