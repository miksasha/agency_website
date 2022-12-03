import React, { Component } from 'react'
import './Contacts.css'
import linked from "../../images/logo-linkedin.png"
import instagram from "../../images/logo-insta.png"
import facebook from "../../images/logo-facebook.png"
import background1 from "../../images/contact-line1.png"
import background2 from "../../images/contact-line2.png"


export default class Contacts extends Component {
  render() {
    return (
      <div className='contacts'>
        <img src={background1} alt="" className="img-background1"></img>
        <img src={background2} alt="" className="img-background2"></img>

        <div className='for-center'>
        <div className='for-row'>
        <div className='email-phone'>
        <a href="mailto:miksasha2003@gmail.com" className='email'>miksasha2003@gmail.com</a>
        <a href="tel:+380671253611" className="phone">+38 (067) 125-36-11</a>
        </div>

        <div className='s-networks'>
        <a href="https://www.linkedin.com/in/%D0%BE%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%B0-%D0%BC%D0%B8%D1%85%D0%B0%D0%B9%D0%BB%D0%B5%D0%BD%D0%BA%D0%BE-188756217"
         className='linkedin'><img src={linked} alt="" className="img-s-network"></img></a>
        <a href="https://www.instagram.com/mik_sasha_/" className="instagram"><img src={instagram} alt="" className="img-s-network"></img></a>
        <a href="https://www.facebook.com/profile.php?id=100007405273716" className="facebook"><img src={facebook} alt="" className="img-s-network"></img></a>
        </div>

        <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2539.773174577747!2d30.515224814964704!3d50.46394839427439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce40356e3cf3%3A0xf08f80e07caa6b92!2z0JrQvtC90YLRgNCw0LrRgtC-0LLQsNGPINC_0LsuLCDQmtC40LXQsiwgMDIwMDA!5e0!3m2!1sru!2sua!4v1670102277005!5m2!1sru!2sua" width="540" height="350" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </div>
        </div>
      </div>
    )
  }
}
