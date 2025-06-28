import Logo from "../assets/Guide/images/logo.svg";
import Button from "./UI/Button";
import hamburger from "../assets/Guide/images/icon-hamburger.svg";
import close from "../assets/Guide/images/icon-close.svg";

const Navigation = ({ menu, handleMenu }) => {
  return (
    <div className="w-[100%]">
      <div className="flex flex-row justify-between font-semibold mb-[28px] sm:mb-[64px] my-[30px] sm:my-[38px] mx-[32px] sm:mx-[132px]">
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
        <span className=" sm:hidden transition-all delay-500">
          {!menu ? (
            <img src={hamburger} alt="open button" onClick={handleMenu} />
          ) : (
            <img src={close} alt="close button" onClick={handleMenu} />
          )}
        </span>
      </div>

      <div className="sm:mb-[64px] my-[30px] sm:my-[38px] mx-[32px] sm:mx-[132px]">
        <div
          className={
            menu
              ? "sm:hidden fixed right-0 px-[32px] w-full"
              : "fixed right-[-100%]"
          }
        >
          <ul className="bg-white flex flex-col space-y-[20px] p-[40px] text-center rounded-sm">
            <li>Pricing</li>
            <li>Product</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Community</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
