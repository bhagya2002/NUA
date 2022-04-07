import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/HomePage/Home";
import About from "./components/pages/AboutUs/About";
import CouncilMember from "./components/pages/CouncilMember/CouncilMember";
import FAQ from "./components/pages/FAQ/FAQ";
import Involve from "./components/pages/GetInvolved/Involve";
import AwardS from "./components/pages/AwardS/AwardS.js";
import CNSA from "./components/pages/CNSA/CNSA.js";
import Mentorship from "./components/pages/Mentorship/Mentorship";
import Council from "./components/pages/Council/Council";
import Partnership from "./components/pages/Partnership/Partnership";
import Subgroup from "./components/pages/Subgroup/Subgroup";
import Newsletter from "./components/pages/Newletter/Newsletter.js";
import Volunteer from "./components/pages/Volunteer/Volunteer";
import Resources from "./components/pages/Resource/Resources";
import FCNS from "./components/pages/FCNS/FCNS";
import BSCN from "./components/pages/BSCN/BSCN";
import Footer from "./components/pages/Footer/Footer";

import samplePDF from "./porat.pdf";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about-us" exact element={<About />} />
        <Route path="/council-member" exact element={<CouncilMember />} />
        <Route path="/faq" exact element={<FAQ />} />
        <Route path="/get-involved" exact element={<Involve />} />
        <Route path="/awards-scholarships" exact element={<AwardS />} />
        <Route path="/cnsa" exact element={<CNSA />} />
        <Route path="/mentorship" exact element={<Mentorship />} />
        <Route path="/council" exact element={<Council />} />
        <Route path="/partnerships" exact element={<Partnership />} />
        <Route path="/subgroups" exact element={<Subgroup />} />
        <Route path="/volunteer" exact element={<Volunteer />} />
        <Route path="/resources" exact element={<Resources />} />
        <Route path="/fcns" exact element={<FCNS />} />
        <Route path="/bscn" exact element={<BSCN />} />
        <Route
          path="/newsletter"
          pdf={samplePDF}
          exact
          element={<Newsletter />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
