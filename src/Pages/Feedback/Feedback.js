import React, { Component } from 'react'
import './Feedback.css'
import background_feedback_1 from "../../images/feedback-line1.png"
import background_feedback_2 from "../../images/feedback-line2.png"

import client1 from "../../images/client1.jpg"
import client2 from "../../images/client2.png"
import client3 from "../../images/client3.jpg"
import client4 from "../../images/client4.png"
import Comment from "./CommentComponent"

export default class Feedback extends Component {
  render() {
    return (
      <div  className='feedback-page'>
        <img src={background_feedback_1} alt="" className="img-feed-background1"></img>
        <img src={background_feedback_2} alt="" className="img-feed-background2"></img>

        <div className='comments'>
          <div className='comment-line'>
            <Comment class = {'comment-block1'} photo_src = {client1} fullname = {'Maria Venon'} 
            text = {'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?'}/>
            <Comment class = {'comment-block2'} photo_src = {client2} fullname = {'Artur Corner'}
            text = {'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?'}/>
          </div>
          <div className='comment-line'>
            <Comment class = {'comment-block3'} photo_src = {client3} fullname = {'Ivan Mykhailenko'}
            text = {'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?'}/>
            <Comment class = {'comment-block4'} photo_src = {client4} fullname = {'Daria Bygha'}
            text = {'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?'}/>
          </div>
        </div>
      </div>
    )
  }
}
