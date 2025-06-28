import AbtContent from "./UI/AbtContent";
import Button from "./UI/Button";

const DUMMY = [
  {
    title: "Track company-wide progress",
    body: "See how your day-to-day tasks fit into the wider vision. Go from  tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
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
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[50px]">
      <div className="my-[30px] sm:my-[38px] mx-[32px] sm:mx-[132px]">
        <h2 className="font-extrabold text-3xl sm:text-6xl text-center sm:text-left  mb-4 sm:mb-8">
          What&apos;s different about Manage?
        </h2>
        <p className="text-[#9095a7] text-[14px] sm:text-xl text-center sm:text-left">
          Manage provides all the functionality your <br /> team needs, without
          the complexity. Our
          <br /> software is tailor-made for modern digital
          <br /> product teams.
        </p>
      </div>
      {/* With the use of list */}
      <div className="flex flex-col justify-between gap-10">
        {DUMMY.map((cnt) => (
          <AbtContent DUMMY={DUMMY} content={cnt} key={cnt.title} />
        ))}
      </div>
    </div>
  );
};

export default About;
