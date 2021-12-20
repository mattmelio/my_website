//import routes
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

//import pages
import Home from "./Home";
import AboutMe from "./About";
import ContactMe from "./Contact";
import Music from "./Music";

function AllRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/music" element={<Music />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default AllRoutes;
