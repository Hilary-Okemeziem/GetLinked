import React from "react";
import timeline from "../images/Timeline.png";
import numbers from "../images/numbers.png";
import content from "../images/content.png";
import star1 from "../images/starwhite.png";
import star2 from "../images/star.png";
import star3 from "../images/star pu.png";

const TimelineSection = () => {
  return (
    <div id="timeline" className="pt-[5rem] relative reveal" >
      <div className="w-full h-full px-4 lg:px-16 mx-auto max-w-[1240px] ">
        <div className="relative hidden lg:block">
          <div>
            <img src={timeline} alt="" />
          </div>
          <div className=" flex items-center justify-center">
            <p className="absolute top-[3rem] text-center w-[28rem]">
                Here is the breakdown of the time we anticipate using for the
                upcoming event.
            </p>
          </div>
        </div>

        <div className="block lg:hidden relative">
            <div className="text-center pb-6">
                <h3 className="font-bold text-xl py-2">Timeline</h3>
                <p className="pb-2 text-sm">Here is the breakdown of the time we anticipate using for the
                upcoming event.</p>
            </div>
            <div className="flex items-center justify-center gap-2 md:gap-8 py-4">
                <div>
                    <img src={numbers} alt="/" />
                </div>
                <div>
                    <img src={content} alt="/" />
                </div>
            </div>
            <div>
                <img src={star3} alt="/" className="absolute top-[6rem] left-[3rem] w-[1rem]" />
            </div>
            <div>
                <img src={star1} alt="/" className="absolute top-[29rem] right-[3rem] w-[1rem]" />
            </div>
            <div>
                <img src={star2} alt="/" className="absolute bottom-0 left-0 w-[1rem]" />
            </div>
        </div>
      </div>
      <div className="border-b border-gray-700 pt-[4.7rem]"></div>
    </div>
  );
};

export default TimelineSection;
