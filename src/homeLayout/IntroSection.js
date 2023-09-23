import React from "react";
import bigIdea from "../images/The big idea.png";
import arrow from "../images/arrow.png";
import star1 from "../images/star pu.png";
import star2 from "../images/sata gra.png";

const IntroSection = () => {
  return (
    <div className="pt-[5rem]" id="intro" >
      <div className="w-full h-full px-4 lg:px-12 mx-auto max-w-[1240px] relative">
        <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-16 lg:gap-24">
          <div className="ml-0 lg:ml-10">
            <img src={bigIdea} alt="/" />
          </div>
          <div>
            <h2 className="text-xl text-center lg:text-start lg:text-3xl w-[20rem] md:w-full lg:w-[26rem] py-2">
              Introduction to getlinked{" "}
              <span className="text-[#D434FE]">tech Hackathon 1.0</span>
            </h2>
            <p className="py-2 text-center text-sm lg:text-start lg:w-[33rem]">
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether you're a
              coding genius, a design maverick, or a concept wizard, you'll have
              the chance to transform your ideas into reality. Solving
              real-world problems, pushing the boundaries of technology, and
              creating solutions that can change the world, that's what we're
              all about!
            </p>
          </div>
        </div>
        <div>
            <img src={arrow} alt="/" className="absolute left-[9rem] bottom-[18rem] md:left-[21.5rem] md:bottom-[10rem] lg:left-[33rem] lg:-bottom-[1rem]" />
        </div>
        <div>
            <img src={star1} alt="/" className="absolute right-[1rem] top-[26.3rem] w-[1rem] lg:right-[2.7rem] lg:top-[9.3rem] lg:w-[1.5rem]" />
        </div>
        <div>
            <img src={star2} alt="/" className="absolute left-[2rem] top-[7rem] lg:left-[3rem] lg:top-[9.3rem] w-[0.8rem] lg:w-[1.2rem]" />
        </div>
      </div>
      <div className="border-b border-gray-700 pt-[4.7rem]"></div>
    </div>
  );
};

export default IntroSection;
