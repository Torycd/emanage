import { useState } from "react";
import Logo from "../assets/Guide/images/logo.svg";
import Button from "./UI/Button";
import hamburger from "../assets/Guide/images/icon-hamburger.svg";
import close from "../assets/Guide/images/icon-close.svg";

const Navigation = () => {
  const [menu, setMenu] = useState(false);
  function handleMenu() {
    setMenu(!menu);
  }
  return (
    <div className="flex flex-row justify-between font-semibold mb-[28px] sm:mb-[64px]">
      <div className="">
        <img src={Logo} alt="E-manage" />
      </div>
      {/* short circuitng */}
      <ul className="hidden sm:flex gap-5">
        <li>Pricing</li>
        <li>Product</li>
        <li>About Us</li>
        <li>Careers</li>
        <li>Community</li>
      </ul>
      <Button classAdd="hidden sm:block">Get Started</Button>
      <span className=" sm:hidden">
        {!menu ? (
          <img src={hamburger} alt="open button" onClick={handleMenu} />
        ) : (
          <img src={close} alt="close button" onClick={handleMenu} />
        )}
      </span>
    </div>
  );
};

export default Navigation;
