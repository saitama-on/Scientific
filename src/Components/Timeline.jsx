import React from "react";
import "./Timeline.css";
import { Timeline1 } from "./Timelines/Timeline1";
import { Timeline2 } from "./Timelines/Timeline2";
import { Timeline3 } from "./Timelines/Timeline3";
import { Timeline4 } from "./Timelines/Timeline4";

export const Timeline = () => {
  return (
    <div className="flex flex-col justify-center items-center" id='timeline'>
      <div className="uppercase text-4xl font-extrabold">TIMELINE</div>
      <div className="-ml-24 sm:ml-0 grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-y-2 lg:grid-cols-4 pt-10 sm:pt-20 w-full xl:w-11/12 sm:gap-x-4 xl:gap-x-12 xl:pr-10 xl:-ml-10">
        <Timeline1 />
        <Timeline2 />
        <Timeline3 />
        <Timeline4 />
      </div>
      <div className="h-[50px]"></div>
      {/* <div className="h-[200px]"></div> */}
    </div>
  );
};
