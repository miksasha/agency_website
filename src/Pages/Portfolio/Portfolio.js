import React, { Component } from 'react'
import './Portfolio.css'
import background1 from "../../images/portfolio-line1.png"
import background2 from "../../images/portfolio-line2.png"
import Card from "./Card"
import image_project from "../../images/Project1.jpg"


let data = [
  {name: 'ASUON', days: '23', photo: image_project},
  {name: 'Light Uber', days: '50', photo: image_project},
  {name: 'Drove app', days: '135', photo: image_project},
  {name: 'NFT market', days: '130', photo: image_project},
  {name: 'Bank website', days: '53', photo: image_project},
  {name: 'Meeting website', days: '135', photo: image_project},
  {name: 'Game', days: '333', photo: image_project},
  {name: 'NTF store', days: '105', photo: image_project},
];

export default class Portfolio extends Component {
  
  constructor() {
		super();
		this.state = {cards: data.map((key) => <Card image={key.photo} projectName={key.name} days={key.days} />)};
	}

  toggleText() {
		this.setState({hello: !this.state.hello});
	}

  render() {
    return (
      <div className='portfolio-page'>

        <div className='main-portfolio-block'>
        <div className='filter-sort'>
        <div className='filter-sort-left'>
        <select name="sort-select" className="sort-select"> 
          <option value="alphabetsort">Sort by alphabet</option>
          <option value="durationsort">Sort by duration</option>
          <option value="timesort" defaultValue>Sort by time</option>
        </select>

        <select name="filter-select" className="filter-select"> 
          <option value="angular" defaultValue>Angular</option>
          <option value="design">Design</option>
          <option value="react">React</option>
        </select>

        <div className='checkbox'>
         <input type="checkbox" className="best_projects" name="best_projects"/>
         <label htmlFor="best_projects">Best projects</label>
         </div>
        </div>

        <div className='filter-sort-right'>
        <input type="text" className="search" name="search" placeholder="Search"/>
        </div>
        </div>

        <div className='cards'>
        {this.state.cards}
        </div>

        <div className='page_nav'>
            <a href='#' className='selected'>1</a>
            <a href='#'>2</a>
            <p>...</p>
            <a href='#'>5</a>
        </div>
        </div>
        
        <img src={background1} alt="" className="img-background1"></img>
        <img src={background2} alt="" className="img-background2"></img>
      </div>
    )
  }
}
