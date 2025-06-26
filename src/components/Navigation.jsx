import Logo from "../assets/Guide/images/logo.svg";

const Navigation = () => {
  return (
    <div className="flex justify-between font-semibold">
      <div className="">
        <img src={Logo} alt="E-manage" />
      </div>
      <ul className="flex gap-5">
        <li>Pricing</li>
        <li>Product</li>
        <li>About Us</li>
        <li>Careers</li>
        <li>Community</li>
      </ul>
      <button className="bg-orange-500 py-4 px-6 rounded-full text-white">
        Get Started
      </button>
    </div>
  );
};

export default Navigation;
