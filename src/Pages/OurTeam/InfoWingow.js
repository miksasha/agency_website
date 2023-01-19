import React from 'react'
import './InfoWingow.css'
import { ReactComponent as WorkerFrame} from "../../images/ourteam/worker-frame.svg"

export default function InfoWingow(props) {
  return (
    <div className='worker-info'>
        <WorkerFrame className={props.class}/>
        <img src={props.photo_src} alt="" className="photo-of-worker"></img>
        <div className='worker-text-info'>
            <span className='project_name'>{props.fullname}</span>
            <p className='position'>{props.position}</p>
            <p className='simple_text'>{props.text}</p>
        </div>
    </div>
  )
}
