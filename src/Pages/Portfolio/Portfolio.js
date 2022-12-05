import React, { Component } from 'react'
import './Portfolio.css'
import background1 from "../../images/portfolio-line1.png"
import background2 from "../../images/portfolio-line2.png"
import Card from "./Card"
import image_project from "../../images/Project1.jpg"

export default class Portfolio extends Component {
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
          <Card image={image_project} projectName="Name" days="26" />
          <Card image={image_project} projectName="Name" days="26" />
          <Card image={image_project} projectName="Name" days="26" />
          <Card image={image_project} projectName="Name" days="26" />
        </div>

        <div className='cards'>
          <Card image={image_project} projectName="Name" days="26" />
          <Card image={image_project} projectName="Name" days="26" />
          <Card image={image_project} projectName="Name" days="26" />
          <Card image={image_project} projectName="Name" days="26" />
        </div>

        <div className='page_nav'>
            <a href='#'>1</a>
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
