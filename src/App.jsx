import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Testimonials from "./components/Testimonials/Testimonials";
import { RecoilRoot } from "recoil";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <RecoilRoot>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle="OUR PROGRAM" title="What We Offer"/>
        <Programs />
        <About/>
        <Title subtitle="Gallery" title="Campus Photos"/>
        <Campus/>
        <Title subtitle="TESTIMONIALS" title="What Student Says"/>
        <Testimonials/>
        <Title subtitle="Contact Us" title="Get in Touch"/>
        <Contact/>
        <Footer/>
      </div>
      </RecoilRoot>
    </>
  );
};

export default App;
