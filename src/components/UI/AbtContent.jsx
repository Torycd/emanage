import Button from "./Button";

const AbtContent = ({ content, DUMMY }) => {
  return (
    <div className="flex justify-between gap-10">
      <div className="">
        <Button classAdd="px-[40px]">{`0${DUMMY.indexOf(content) + 1}`}</Button>
      </div>
      <div className="space-y-5">
        <h2 className="font-extrabold mt-3 text-[#1d1e25] text-xl">
          {content.title}
        </h2>
        <p className="text-[#9095a7]">{content.body}</p>
      </div>
    </div>
  );
};

export default AbtContent;
