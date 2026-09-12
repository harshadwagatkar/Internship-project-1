import React, { useRef } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Vision from "../components/Vision";
import Objective from "../components/Objective";
import CoursesPage from "../components/CoursesPage";
import NextBatch from "../components/NextBatch";
import Form from "../components/Form";
import Footer from "../components/Footer";

const HomePage = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const visionRef = useRef(null);
  const programObjRef = useRef(null);
  const coursesRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = {
    home: homeRef,
    about: aboutRef,
    vision: visionRef,
    programObj: programObjRef,
    courses: coursesRef,
    contact: contactRef,
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      
      <Navbar sectionRefs={sectionRefs} />

      <Hero ref={homeRef} />

      <About ref={aboutRef} />

      <Vision ref={visionRef} />

      <Objective ref={programObjRef} />

      <CoursesPage ref={coursesRef} />

      <NextBatch ref={coursesRef} />

      <Form ref={contactRef} />

      <Footer />

    </div>
  );
};

export default HomePage;