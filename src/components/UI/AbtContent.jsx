import Button from "./Button";

const AbtContent = ({ content, DUMMY }) => {
  return (
    <div className="flex flex-col justify-between gap-10 sm:mb-[64px] ">
      <div className="ml-[32px] sm:ml-0 bg-[#fff0ec] sm:bg-white rounded-l-full flex gap-5  items-center">
        <div>
          <Button classAdd="px-[20px] py-[5px] sm:px-[40px] sm:py-[20px] ">{`0${
            DUMMY.indexOf(content) + 1
          }`}</Button>
        </div>

        <h2 className="self-center font-extrabold text-[16px]  text-[#1d1e25] sm:text-2xl">
          {content.title}
        </h2>
      </div>
      <div className="space-y-5 mx-[32px] sm:mx-[132px]">
        <p className="text-[#9095a7]">{content.body}</p>
      </div>
    </div>
  );
};

export default AbtContent;
