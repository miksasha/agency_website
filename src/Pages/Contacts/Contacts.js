import React, { Component } from 'react'
import './Contacts.css'
import background1 from "../../images/contact-line1.png"
import background2 from "../../images/contact-line2.png"

export default class Contacts extends Component {
  render() {
    return (
      <div className='contacts'>
        <img src={background1} alt="" className="img-background1"></img>
        <img src={background2} alt="" className="img-background2"></img>

        <div className='for-grid'>
        <div className='email-phone'>
        <a href="mailto:miksasha2003@gmail.com" className='email'>miksasha2003@gmail.com</a>
        <a href="tel:+380671253611" className="phone">+38 (067) 125-36-11</a>
        </div>
        </div>
      </div>
    )
  }
}
