import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Contactus from "./components/ContactUs/Contactus";
import Inovation from "./components/Inovation/Inovation";
import History from "./components/AboutUs/History/History";
import Leadership from "./components/AboutUs/Leadership/Leadership";
import Distribution from "./components/AboutUs/Distribution/Distribution"
import Corevalue from "./components/AboutUs/Corevalue/Corevalue"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="history/" element={<History />}></Route>
          <Route path="leadership/" element={<Leadership />}></Route>
          <Route path="inovation/" element={<Inovation />}></Route>
          <Route path="distribution/" element={<Distribution />}></Route>
          <Route path="corevalue/" element={<Corevalue />}></Route>
          <Route path="contactus/" element={<Contactus />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
