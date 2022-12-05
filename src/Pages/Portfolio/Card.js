import React from 'react'
import './Card.css'

export default function Card( props ) {
  return (
    <div className='card'>
      <img src={props.image} alt="project image" className="img-card"></img>

        <div className='description'>
            <span className='project_name'>{props.projectName}</span>
            <span>{props.days} days</span>
        </div>
    </div>
  )
}
