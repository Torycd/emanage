import React from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="font-vietnam">
      <section className="py-[38px] px-[132px]">
        <Navigation />
        <Hero />
      </section>
    </div>
  );
};

export default App;
