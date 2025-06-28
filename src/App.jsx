import React from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import "./index.css";
import About from "./components/About";
import People from "./components/People";

const App = () => {
  return (
    <div className="font-vietnam max-w-screen">
      <section className="py-[30px] sm:py-[38px] bg px-[32px] sm:px-[132px]">
        <Navigation />
        <Hero />
        {/* <About /> */}
      </section>
      {/* <People/> */}
    </div>
  );
};

export default App;
