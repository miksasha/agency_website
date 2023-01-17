import React from 'react'
import './CommentComponent.css'

export default function CommentComponent( props ) {
  return (
    <div className={props.class}>
       <div className='comment-content'>
            <img src={props.photo_src} alt="" className="photo-of-client"></img>
            <span className='project_name'>{props.fullname}</span>
            <p>{props.text}</p>
       </div>
    </div>
  )
}
