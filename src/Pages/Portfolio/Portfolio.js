import React, { Component, useState, useEffect } from 'react'
import './Portfolio.css'
import background1 from "../../images/portfolio-line1.png"
import background2 from "../../images/portfolio-line2.png"
import Card from "./Card"
import {projectsInfo} from './Data'

function byField(field) {
  return (a, b) => a[field] > b[field] ? 1 : -1;
}

let currentPage=1;

export default class Portfolio extends Component {
  
  constructor() {
		super();
		this.state = { 
      arr: projectsInfo,
      cards: projectsInfo.slice(currentPage*8-8,currentPage*8).map((key) => <Card image={key.photo} projectName={key.name} days={key.days} projectType={key.type} date={key.date} link={key.link} />),
      pagination: <div className='page_nav'>
      <a href='#' className='selected' onClick={event => this.pageChange(event)}>1</a>
      <a href='#' onClick={event => this.pageChange(event)}>2</a>
      <a href='#' onClick={event => this.pageChange(event)}>3</a>
      <a href='#' onClick={event => this.pageChange(event)}>4</a>
      </div>,
    };
	}

  pageChange = (event) => {
    currentPage = event.target.innerText;
    this.setState({cards: this.state.arr.slice(currentPage*8-8,currentPage*8).map((key) => <Card image={key.photo} projectName={key.name} days={key.days} projectType={key.type} date={key.date} link={key.link} />), });
    this.pagination(this.state.arr, event.target.innerText);
  }

  sortHendler = (event) => {
    console.log( event.target.value);
    if(event.target.value == 'alphabetsort'){
      this.setState( {cards: this.state.arr.sort(byField('name')).slice(currentPage*8-8,currentPage*8).map((key) => <Card image={key.photo} projectName={key.name} days={key.days}  projectType={key.type} date={key.date} link={key.link}/>)});
    }
    if(event.target.value == 'durationsort'){
      this.setState( {cards: this.state.arr.sort(byField('days')).slice(currentPage*8-8,currentPage*8).map((key) => <Card image={key.photo} projectName={key.name} days={key.days} projectType={key.type} date={key.date} link={key.link} />)});
    }

    if(event.target.value == 'timesort'){
      this.setState( {cards: this.state.arr.sort(byField('date')).slice(currentPage*8-8,currentPage*8).map((key) => <Card image={key.photo} projectName={key.name} days={key.days} projectType={key.type} date={key.date} link={key.link} />)});
    }
  }

  filterHendler = (event) => {
    
    if(event.target.value == 'all'){
      this.setState( {arr: projectsInfo, cards: projectsInfo.slice(currentPage*8-8,currentPage*8).map((key) => <Card image={key.photo} projectName={key.name} days={key.days} projectType={key.type} date={key.date} link={key.link} />)});
      this.setState( {pagination: <div className='page_nav'>
      <a href='#' className='selected' onClick={event => this.pageChange(event)}>1</a>
      <a href='#' onClick={event => this.pageChange(event)}>2</a>
      <a href='#' onClick={event => this.pageChange(event)}>3</a>
      <a href='#' onClick={event => this.pageChange(event)}>4</a>
      </div>});
    }else{
      this.setState( {arr: projectsInfo.filter(element => element.type==event.target.value), cards: projectsInfo.filter(element => element.type==event.target.value).slice(currentPage*8-8,currentPage*8).map((key) => <Card image={key.photo} projectName={key.name} days={key.days} projectType={key.type} date={key.date} link={key.link} />)});
      this.pagination(projectsInfo.filter(element => element.type==event.target.value), 1);
    }
  }

  bestProjectHendler = (event) => {
    if(event.target.checked){
      currentPage=1;
      this.setState( {cards: this.state.arr.filter(element => element.best==event.target.checked).slice(currentPage*8-8,currentPage*8).map((key) => <Card image={key.photo} projectName={key.name} days={key.days} projectType={key.type} date={key.date} link={key.link} />)});
      this. pagination(this.state.arr.filter(element => element.best==event.target.checked), 1);
    }else{
      this.setState( {cards: this.state.arr.slice(currentPage*8-8,currentPage*8).map((key) => <Card image={key.photo} projectName={key.name} days={key.days} projectType={key.type} date={key.date} link={key.link} />)});
      this.pagination(this.state.arr, 1);
    }

  }

  pagination = (arr, currentPageNum)=>{
    currentPage=currentPageNum;
    let html = [];
    console.log(html);
    for(let i=0; i<arr.length/8; i++){
      if(html == undefined){
        console.log(html);
      if(currentPage-1==i)
      html.push(<a href='#' className='selected' onClick={event => this.pageChange(event)}>{i+1}</a>);
      else
      html.push(<a href='#' onClick={event => this.pageChange(event)}>{i+1}</a>);
      console.log("1 " +html);
      }else{
        if(currentPage-1==i)
        html.push(<a href='#' className='selected' onClick={event => this.pageChange(event)}>{i+1}</a>);
        else
        html.push(<a href='#' onClick={event => this.pageChange(event)}>{i+1}</a>);
        console.log(html);
      }
    }
    if(html.length!=1){
    this.setState( {pagination: <div className='page_nav'>{html}</div>});
    }else{
      this.setState( {pagination: <div className='page_nav'></div>});
    }
  }

  SearchHendler = (event) => {
    document.getElementsByClassName("all-select")[0].removeAttribute("selected");
    document.getElementsByClassName("all-select")[0].setAttribute("selected", true);
    this.pagination(projectsInfo.filter(element => element.name.toLowerCase().includes(event.target.value.toLowerCase())), 1);
   this.setState( {cards: projectsInfo.filter(element => element.name.toLowerCase().includes(event.target.value.toLowerCase())).slice(currentPage*8-8,currentPage*8).map((key) => <Card image={key.photo} projectName={key.name} days={key.days} projectType={key.type} date={key.date}  link={key.link}/>)});
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
