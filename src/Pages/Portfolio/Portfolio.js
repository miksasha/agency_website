import React, { Component, useState, useEffect } from 'react'
import './Portfolio.css'
import background1 from "../../images/portfolio-line1.png"
import background2 from "../../images/portfolio-line2.png"
import Card from "./Card"
import {projectsInfo} from './Data'

function byField(field) {
  return (a, b) => a[field] > b[field] ? 1 : -1;
}

export default class Portfolio extends Component {
  
  constructor() {
		super();
		this.state = { 
      arr: projectsInfo,
      cards: projectsInfo.slice(1*8-8,1*8).map((card, index) => <Card key={index} image={card.photo} projectName={card.name} days={card.days} projectType={card.type} date={card.date} link={card.link} />),
      pagination: <div className='page_nav'>
      <a href='#' className='selected' onClick={event => this.pageChange(event)}>1</a>
      <a href='#' onClick={event => this.pageChange(event)}>2</a>
      <a href='#' onClick={event => this.pageChange(event)}>3</a>
      <a href='#' onClick={event => this.pageChange(event)}>4</a>
      </div>,
      currentPage: 1,
    };
	}

  pageChange = (event) => {
    this.setState(state => ({ cards: [...state.arr].slice(event.target.innerText*8-8,event.target.innerText*8).map((card, index) => <Card key={index} image={card.photo} projectName={card.name} days={card.days} projectType={card.type} date={card.date} link={card.link} />),
    currentPage: event.target.innerText, }));
    this.pagination(this.state.arr, event.target.innerText);
  }

  sortHendler = (event) => {
    if(event.target.value == 'alphabetsort'){
      this.setState(state => ({ cards: [...state.arr].sort(byField('name')).slice(this.state.currentPage*8-8, this.state.currentPage*8).map((card, index) => <Card key={index} image={card.photo} projectName={card.name} days={card.days}  projectType={card.type} date={card.date} link={card.link}/>)}));
    }
    if(event.target.value == 'durationsort'){
      this.setState(state => ({ cards: [...state.arr].sort(byField('days')).slice( this.state.currentPage*8-8, this.state.currentPage*8).map((card, index) => <Card key={index} image={card.photo} projectName={card.name} days={card.days} projectType={card.type} date={card.date} link={card.link} />)}));
    }

    if(event.target.value == 'timesort'){
      this.setState(state => ({ cards: [...state.arr].sort(byField('date')).slice(this.state.currentPage*8-8, this.state.currentPage*8).map((card, index) => <Card key={index} image={card.photo} projectName={card.name} days={card.days} projectType={card.type} date={card.date} link={card.link} />)}));
    }
  }

  filterHendler = (event) => {
    
    if(event.target.value == 'all'){
      this.setState( {arr: projectsInfo, cards: projectsInfo.slice(this.state.currentPage*8-8, this.state.currentPage*8).map((card, index) => <Card key={index} image={card.photo} projectName={card.name} days={card.days} projectType={card.type} date={card.date} link={card.link} />)});
      this.setState( {pagination: <div className='page_nav'>
      <a href='#' className='selected' onClick={event => this.pageChange(event)}>1</a>
      <a href='#' onClick={event => this.pageChange(event)}>2</a>
      <a href='#' onClick={event => this.pageChange(event)}>3</a>
      <a href='#' onClick={event => this.pageChange(event)}>4</a>
      </div>});
    }else{
      this.setState( {arr: projectsInfo.filter(element => element.type==event.target.value), cards: projectsInfo.filter(element => element.type==event.target.value).slice(this.state.currentPage*8-8, this.state.currentPage*8).map((card, index) => <Card key={index} image={card.photo} projectName={card.name} days={card.days} projectType={card.type} date={card.date} link={card.link} />)});
      this.pagination(projectsInfo.filter(element => element.type==event.target.value), 1);
    }
  }

  bestProjectHendler = (event) => {
    if(event.target.checked){
      this.setState(state => ({ ...state, currentPage: 1 }));
      this.setState(state => ({ cards: [...state.arr].filter(element => element.best==event.target.checked).slice(0, 8).map((card, index) => <Card key={index} image={card.photo} projectName={card.name} days={card.days} projectType={card.type} date={card.date} link={card.link} />)}));
      this. pagination(this.state.arr.filter(element => element.best==event.target.checked), 1);
    }else{
      this.setState(state => ({ cards: [...state.arr].slice(this.state.currentPage*8-8, this.state.currentPage*8).map((card, index) => <Card key={index} image={card.photo} projectName={card.name} days={card.days} projectType={card.type} date={card.date} link={card.link} />)}));
      this.pagination(this.state.arr, 1);
    }

  }

  pagination = (arr, currentPageNum)=>{
    this.setState(state => ({ ...state, currentPage: currentPageNum }));
    let html = [];
    for(let i=0; i<arr.length/8; i++){
      if(html == undefined){
      if(currentPageNum-1==i)
      html.push(<a href='#' className='selected' onClick={event => this.pageChange(event)}>{i+1}</a>);
      else
      html.push(<a href='#' onClick={event => this.pageChange(event)}>{i+1}</a>);
      }else{
        if(currentPageNum-1==i)
        html.push(<a href='#' className='selected' onClick={event => this.pageChange(event)}>{i+1}</a>);
        else
        html.push(<a href='#' onClick={event => this.pageChange(event)}>{i+1}</a>);
      }
    }
    if(html.length !== 1){
    this.setState( {pagination: <div className='page_nav'>{html}</div>});
    }else{
      this.setState( {pagination: <div className='page_nav'></div>});
    }
  }

  SearchHendler = (event) => {
    document.getElementsByClassName("all-select")[0].removeAttribute("selected");
    document.getElementsByClassName("all-select")[0].setAttribute("selected", true);
    this.pagination(projectsInfo.filter(element => element.name.toLowerCase().includes(event.target.value.toLowerCase())), 1);
   this.setState( {cards: projectsInfo.filter(element => element.name.toLowerCase().includes(event.target.value.toLowerCase())).slice(this.state.currentPage*8-8, this.state.currentPage*8).map((card, index) => <Card key={index} image={card.photo} projectName={card.name} days={card.days} projectType={card.type} date={card.date}  link={card.link}/>)});
   }

  render() {
    return (
      <div className='portfolio-page'>

        <div className='main-portfolio-block'>
        <div className='filter-sort'>
        <div className='filter-sort-left'>
        <select name="sort-select" className="sort-select" onChange={event => this.sortHendler(event)}> 
          <option value="alphabetsort">Sort by alphabet</option>
          <option value="durationsort">Sort by duration</option>
          <option value="timesort" defaultValue>Sort by time</option>
        </select>

        <select name="filter-select" className="filter-select" onChange={event => this.filterHendler(event)}> 
          <option value="all"  className="all-select" defaultValue>All</option>
          <option value="Angular" >Angular</option>
          <option value="Design">Design</option>
          <option value="React">React</option>
        </select>

        <div className='checkbox'>
         <input type="checkbox" className="best_projects" name="best_projects"  onChange={event => this.bestProjectHendler(event)}/>
         <label htmlFor="best_projects">Best projects</label>
         </div>
        </div>

        <div className='filter-sort-right'>
        <input type="text" className="search" name="search" placeholder="Search" onChange={event => this.SearchHendler(event)}/>
        </div>
        </div>

        <div className='cards'>
        {this.state.cards}
        </div>

        {this.state.pagination}
        </div>
        
        <img src={background1} alt="" className="img-background1"></img>
        <img src={background2} alt="" className="img-background2"></img>
      </div>
    )
  }
}
