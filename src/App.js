import './App.css';
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Layout from "../src/Pages/Layout/Layout"
import Main from "../src/Pages/Main/Main"
import Services from "../src/Pages/Services/Services"
import OurTeam from "../src/Pages/OurTeam/OurTeam"
import Portfolio from "../src/Pages/Portfolio/Portfolio"
import Feedback from "../src/Pages/Feedback/Feedback"
import Contacts from "../src/Pages/Contacts/Contacts"


function App() {
  return (
    <BrowserRouter className="Navigation">
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />}/>
          <Route path='services' element={<Services />}/>
          <Route path='our-team' element={<OurTeam />}/>
          <Route path='portfolio' element={<Portfolio />}/>
          <Route path='feedback' element={<Feedback />}/>
          <Route path='contacts' element={<Contacts />}/>
        </Route>
        </Routes>
    </BrowserRouter>
  );
}
//<Route path='*' element={<NotFoundPage />}/>

export default App;
