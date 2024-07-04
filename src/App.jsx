import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle="OUR PROGRAM" title="What We Offer"/>
        <Programs />
      </div>
    </>
  );
};

export default App;
