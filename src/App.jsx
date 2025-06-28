import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import "./index.css";
import About from "./components/About";
import People from "./components/People";

const App = () => {
  const [menu, setMenu] = useState(false);
  function handleMenu() {
    setMenu(!menu);
  }
  return (
    <div
      className={`font-vietnam max-w-screen ${
        menu
          ? "bg-gradient-to-b sm:bg-gradient-none sm:bg-none from-white to-gray-300 transition-all duration-[3000]"
          : ""
      }`}
    >
      <section className="py-[30px] sm:py-[38px] bg px-[32px] sm:px-[132px]">
        <Navigation menu={menu} handleMenu={handleMenu} setMenu={setMenu} />
        <Hero />
        <About />
      </section>
      {/* <People/> */}
    </div>
  );
};

export default App;
