import React, { Component } from 'react'
import './NotFoundPage.css'
import background1 from "../../images/contact-line1.png"
import background2 from "../../images/contact-line2.png"
import number404 from "../../images/eror-number.png"

export default class NotFoundPage extends Component {
  render() {
    return (
      <div>
        <div className='contacts-page'>
            <img src={background1} alt="" className="img-cont-background1"></img>
            <img src={background2} alt="" className="img-cont-background2"></img>

            <div className='error_message'>
                <img src={number404} alt="" className="eror_number"></img>
                <p className='error_text'>Oops, page not found</p>
            </div>
        </div>
      </div>
    )
  }
}
