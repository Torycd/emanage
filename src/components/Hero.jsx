import Button from "./UI/Button";
import ILL from "../assets/Guide/images/illustration-intro.svg";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 grid-re sm:grid-cols-2 gap-4 sm:gap-10 mb-20">
      <div className="order-2 sm:order-1 m-auto flex flex-col items-center sm:items-start">
        <h2 className="font-extrabold text-3xl sm:text-6xl text-center sm:text-left tracking-wide sm:tracking-widest mb-4 sm:mb-8">
          Bring everyone together to build better products.
        </h2>
        <p className="text-[#9095a7]  font-semibold text-[14px] sm:text-xl text-center sm:text-left mb-4 sm:mb-8">
          Manage makes it simple for software teams
          <br /> to plan day-to-day tasks while keeping the
          <br /> larger team goals in view.
        </p>
        <Button>Get Started</Button>
      </div>
      <div className="order-1 sm:order-2">
        <img src={ILL} alt="illustration" />
      </div>
    </div>
  );
};

export default Hero;
