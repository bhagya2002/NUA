import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/HomePage/Home";
import About from "./components/pages/AboutUs/About";
import Involve from "./components/pages/GetInvolved/Involve";
import AwardS from "./components/pages/AwardS/AwardS.js";
import CNSA from "./components/pages/CNSA/CNSA.js";
import Footer from "./components/pages/Footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about-us" exact element={<About />} />
        <Route path="/get-involved" exact element={<Involve />} />
        <Route path="/awards-scholarships" exact element={<AwardS />} />
        <Route path="/cnsa" exact element={<CNSA />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
