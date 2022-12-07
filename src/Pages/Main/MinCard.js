import React from 'react'
import './MinCard.css';

export default function MinCard( props ) {
  return (
    <div className='all_card'>

    <div className='cards_blur'>
        <div className='card_content'>
        <div className='image_number'>{props.image_or_number} </div>
            <p id='text'>{props.text}</p>
      </div>
      </div>

    <div className='cards_about_us'>
        <div className='card_content'>
        <div className='image_number'>{props.image_or_number} </div>
            <p id='text'>{props.text}</p>
      </div>
    </div>
    
    </div>
  )
}
