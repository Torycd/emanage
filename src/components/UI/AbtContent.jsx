import Button from "./Button";

const AbtContent = ({ content, DUMMY }) => {
  return (
    <div className="flex justify-between gap-10">
      <div>
        <Button className="">{`0${DUMMY.indexOf(content) + 1}`}</Button>
      </div>
      <div>
        <p>{content.body}</p>
      </div>
    </div>
  );
};

export default AbtContent;
