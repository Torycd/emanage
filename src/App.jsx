import React from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import "./index.css";

const App = () => {
  return (
    <div className="font-vietnam max-w-screen">
      <section className="py-[30px] sm:py-[38px] bg px-[32px] sm:px-[132px]">
        <Navigation />
        <Hero />
        <Hero />
        <Hero />
      </section>
    </div>
  );
};

export default App;
