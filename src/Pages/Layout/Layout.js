import { Outlet, NavLink } from "react-router-dom";
import './Layout.css'
import line1 from "../../images/nav-line1.png"
import line4 from "../../images/nav-line4.png"
import line5 from "../../images/nav-line5.png"
import line6 from "../../images/nav-line6.png"

const Layout = () => {
  return (
    <>
       <nav className="nav">
        <NavLink to={'/'} id="nav-link-block" className={({ isActive }) =>(isActive ? "active-orange" : "noactive")}>
          <p>Main</p>
          <img src={line1} alt=""  id="img-nav-m"></img>
        </NavLink>

        <NavLink to={'/services'} id="nav-link-block" className={({ isActive }) =>(isActive ? "active-tur" : "noactive")}>
          <p>Services</p>
          <img src={line6} alt=""  id="img-nav-s"></img>
        </NavLink>
        
        <NavLink to={'/our-team'} id="nav-link-block" className={({ isActive }) =>(isActive ? "active-blue" : "noactive")}>
          <p>Our team</p>
          <img src={line5} alt=""  id="img-nav-o"></img>
        </NavLink>
        
        <NavLink to={'/portfolio'}  id="nav-link-block" className={({ isActive }) =>(isActive ? "active-orange" : "noactive")}>
          <p>Portfolio</p>
          <img src={line4} alt=""  id="img-nav-p"></img>
        </NavLink>

        <NavLink to={'/feedback'} id="nav-link-block" className={({ isActive }) =>(isActive ? "active-blue" : "noactive")}>
          <p>Feedback</p>
          <img src={line5} alt=""  id="img-nav-f"></img>
        </NavLink>

        <NavLink to={'/contacts'} id="nav-link-block" className={({ isActive }) =>(isActive ? "active-tur" : "noactive")}>
          <p>Contacts</p>
          <img src={line6} alt=""  id="img-nav-c"></img>
        </NavLink>

      </nav>

      <Outlet />
    </>
  )
};

/*
<div className="stlinkm">
        <NavLink to={'/'} id="navlink" className={({ isActive }) =>(isActive ? "active-orange" : "noactive")}>Main</NavLink>
        <img src={line1} alt=""  id="img-nav-m"></img>
        </div>

        <div className="stlink">
        <NavLink to={'/services'} id="navlink" className={({ isActive }) =>(isActive ? "active-tur" : "noactive")}>Services</NavLink>
        <img src={line6} alt=""  id="img-nav-s"></img>
        </div>

        <div className="stlink">
        <NavLink to={'/our-team'} id="navlink" className={({ isActive }) =>(isActive ? "active-blue" : "noactive")}>Our team</NavLink>
        <img src={line5} alt=""  id="img-nav-o"></img>
        </div>

        <div className="stlink">
        <NavLink to={'/portfolio'}  id="navlink" className={({ isActive }) =>(isActive ? "active-orange" : "noactive")}>Portfolio</NavLink>
        <img src={line4} alt=""  id="img-nav-p"></img>
        </div>

        <div className="stlink">
        <NavLink to={'/feedback'} id="navlink" className={({ isActive }) =>(isActive ? "active-blue" : "noactive")}>Feedback</NavLink>
        <img src={line5} alt=""  id="img-nav-f"></img>
        </div>

        <div className="stlink">
        <NavLink to={'/contacts'} id="navlink" className={({ isActive }) =>(isActive ? "active-tur" : "noactive")}>Contacts</NavLink>
        <img src={line6} alt=""  id="img-nav-c"></img>
        </div>
*/ 

export default Layout;