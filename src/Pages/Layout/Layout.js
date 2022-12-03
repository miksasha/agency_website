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
        <div className="stlink">
        <NavLink to={'/main'} id="navlink" className={({ isActive }) =>(isActive ? "active-orange" : "noactive")}>Main</NavLink>
        <img src={line1} alt=""  id="img-nav"></img>
        </div>

        <div className="stlink">
        <NavLink to={'/services'} id="navlink" className={({ isActive }) =>(isActive ? "active-tur" : "noactive")}>Services</NavLink>
        <img src={line6} alt=""  id="img-nav"></img>
        </div>

        <div className="stlink">
        <NavLink to={'/our-team'} id="navlink" className={({ isActive }) =>(isActive ? "active-blue" : "noactive")}>Our team</NavLink>
        <img src={line5} alt=""  id="img-nav"></img>
        </div>

        <div className="stlink">
        <NavLink to={'/portfolio'}  id="navlink" className={({ isActive }) =>(isActive ? "active-orange" : "noactive")}>Portfolio</NavLink>
        <img src={line4} alt=""  id="img-nav"></img>
        </div>

        <div className="stlink">
        <NavLink to={'/feedback'} id="navlink" className={({ isActive }) =>(isActive ? "active-blue" : "noactive")}>Feedback</NavLink>
        <img src={line5} alt=""  id="img-nav"></img>
        </div>

        <div className="stlink">
        <NavLink to={'/contacts'} id="navlink" className={({ isActive }) =>(isActive ? "active-tur" : "noactive")}>Contacts</NavLink>
        <img src={line6} alt=""  id="img-nav"></img>
        </div>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;