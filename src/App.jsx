import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import { useRef } from "react";
import TestimonialsPage from "./pages/Testimonials/TestimonialsPage";
import SubjectsPage from "./pages/Subjects/SubjectsPage";

function App() {
  const demoRef = useRef(null);
  return (
    <>
      <Router>
        <Navbar demoRef={demoRef} />
        <Routes>
          <Route path="/" element={<Home demoRef={demoRef} />} />
          <Route
            path="/testimonials"
            element={<TestimonialsPage demoRef={demoRef} />}
          />
          <Route
            path="/subjects"
            element={<SubjectsPage demoRef={demoRef} />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
