import { useState } from "react";
import Navbar from "./Navbar.js"
import Main from "./Main.js"
import { Routes, Route} from "react-router-dom";
import './App.css';
import Panel from "./Panel";
import Follow from "./Follow";

import IndiaLogo from "./Images/India.jpeg";
import WorldLogo from "./Images/World.jpg";
import LocalLogo from "./Images/Local.png";
import BusinessLogo from "./Images/Business.jpg";
import TechnologyLogo from "./Images/Technology.webp";
import EntertainMentLogo from "./Images/Entertainment.png";
import SportsLogo from "./Images/Sports.jpg";
import ScienceLogo from "./Images/Science.jpg";
import HealthLogo from "./Images/Health.jpg";
import avatar from "./Images/background.jpeg";

function App() {
  return (
<div>
<Navbar />
<div style={{ margin: "150px 0px 0px 0px" }}>
      <Routes>
        <Route exact path="/"             element={<div key = "general"><Panel  name= "Trending" image= {avatar }/> <Main country ='in' category = 'general' pageSize={100}/> </div>} />
        <Route exact path="/following"    element={<Follow/>}/>
        <Route exact path="/india"        element={<div key = "india"><Panel  name= "India" image= { IndiaLogo }/> <Main country ='in' category = 'general' pageSize={100}/> </div>}/>
        <Route exact path="/world"        element={<div key = "world"><Panel  name= "World" image= { WorldLogo }/> <Main country ='us' category="general" pageSize={100}/> </div>}/>
        <Route exact path="/local"        element={<div key = "local"><Panel  name= "Local" image= { LocalLogo}/> <Main country ='in' category="general" pageSize={100}/> </div>}/>
        <Route exact path="/business"     element={<div key = "business"><Panel  name= "Business" image= { BusinessLogo }/> <Main country ='in' category="business" pageSize={100}/> </div>}/>
        <Route exact path="/technology"   element={<div key = "tech"><Panel  name= "Technology" image= { TechnologyLogo }/> <Main country ='in' category="technology" pageSize={100}/> </div>}/>
        <Route exact path="/entertainment" element={<div key = "ent"><Panel  name= "EntertainMent" image= { EntertainMentLogo }/> <Main country ='in' category="entertainment" pageSize={100}/> </div>}/>
        <Route exact path="/sports"       element={<div key = "sports"><Panel  name= "Sports" image= { SportsLogo }/> <Main country ='in' category="sports" pageSize={100}/> </div>}/>
        <Route exact path="/science"      element={<div key = "science"><Panel  name= "Science" image= { ScienceLogo }/> <Main country ='in' category="science" pageSize={100}/> </div>}/>
        <Route exact path="/health"       element={<div key = "health"><Panel  name= "Health" image= { HealthLogo }/> <Main country ='in' category="health" pageSize={100}/> </div>}/>
      </Routes>
    </div>
<Main />
</div>
  );
  }
export default App;