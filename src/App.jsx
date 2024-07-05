import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle="OUR PROGRAM" title="What We Offer"/>
        <Programs />
        <About/>
        <Title subtitle="Gallery" title="Campus Photos"/>
        <Campus/>
        <Title subtitle="Gallery" title="Campus Photos"/>

      </div>
    </>
  );
};

export default App;
