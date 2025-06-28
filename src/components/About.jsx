import AbtContent from "./UI/AbtContent";
import Button from "./UI/Button";

const DUMMY = [
  {
    title: "What’s different about Manage?",
    body: "Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.",
  },
  {
    title: "Advanced built-in reports",
    body: "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.",
  },
  {
    title: "Everything you need in one place",
    body: "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
  },
];
const About = () => {
  return (
    <div className="grid grid-cols-2">
      <div>
        <h2 className="font-extrabold text-3xl sm:text-6xl text-center sm:text-left  mb-4 sm:mb-8">
          What&apos;s different about Manage?
        </h2>
        <p className="text-gray-500 text-[14px] sm:text-xl text-center sm:text-left">
          Manage provides all the functionality your <br /> team needs, without
          the complexity. Our
          <br /> software is tailor-made for modern digital
          <br /> product teams.
        </p>
      </div>
      {/* With the use of list */}
      <div className="flex flex-col justify-between">
        {DUMMY.map((cnt) => (
          <AbtContent DUMMY={DUMMY} content={cnt} key={cnt.title} />
        ))}
      </div>
    </div>
  );
};

export default About;
