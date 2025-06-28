// import React from 'react'
import im1 from "../assets/Guide/images/avatar-anisha.png";
import im2 from "../assets/Guide/images/avatar-ali.png";
import im3 from "../assets/Guide/images/avatar-richard.png";
import im4 from "../assets/Guide/images/avatar-shanai.png";

const DUMMY = [
  {
    img: im1,
    name: "Anisha Li",
    abt: "Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.",
  },
  {
    img: im2,
    name: "Ali Bravo",
    abt: "We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.",
  },
  {
    img: im3,
    name: "Richard Watts",
    abt: "Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!",
  },
  {
    img: im4,
    name: "Shanai Gough",
    abt: "Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.",
  },
];

const People = () => {
  return (
    <section className="flex gap-4 mt-[70px]">
      {DUMMY.map((dt) => (
        <div
          key={dt.name}
          className="bg-[#f2f2f2] flex flex-col space-y-5 px-5 pb-5 items-center text-center"
        >
          <img
            src={dt.img}
            alt={dt.name}
            className="rounded-full -translate-y-1/2 w-32 h-32"
          />
          <h2 className="font-bold mt-16">{dt.name}</h2>
          <p>“{dt.abt}”</p>
        </div>
      ))}
    </section>
  );
};

export default People;
