import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import { useRef } from "react";
import TestimonialsPage from "./pages/Testimonials/TestimonialsPage";
import SubjectsPage from "./pages/Subjects/SubjectsPage";
import About from "./pages/About/About";
import SubjectDetails from "./pages/SubjectDetails/SubjectDetails";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import TakingDemoPage from "./pages/TakingDemoPage/TakingDemoPage";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService/TermsOfService";
import JoinTutor from "./pages/JoinTutor/JoinTutor";
import Blogs from "./pages/Blogs/Blogs";
import ContactPage from "./pages/ContactPage/ContactPage";
import WhatsappIcon from "./components/WhatsappIcon/WhatsappIcon";

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
          <Route
            path="/subjects/:slug"
            element={<SubjectDetails demoRef={demoRef} />}
          />
          <Route path="/about" element={<About demoRef={demoRef} />} />
          <Route path="/contact" element={<ContactPage demoRef={demoRef} />} />
          <Route path="/blogs" element={<Blogs demoRef={demoRef} />} />
          <Route
            path="/takingdemo"
            element={<TakingDemoPage demoRef={demoRef} />}
          />
          <Route
            path="/joinastutor"
            element={<JoinTutor demoRef={demoRef} />}
          />
          <Route
            path="/privacypolicy"
            element={<PrivacyPolicy demoRef={demoRef} />}
          />
          <Route
            path="/termsofservice"
            element={<TermsOfService demoRef={demoRef} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <WhatsappIcon />
        <Footer />
      </Router>
    </>
  );
}

export default App;
