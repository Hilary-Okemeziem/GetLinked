import React from "react";
import rulesImg from "../images/rulesImg.png";
import star1 from "../images/starwhite.png";
import star2 from "../images/star.png";
import purpleFlare from "../images/PurpleFlare2.png";
import purpleFlare2 from "../images/PurpleFlare.png";

const RulesSection = () => {
  return (
    <div className="pt-[5rem] relative reveal" >
      <div className="w-full h-full px-4 lg:px-12 mx-auto max-w-[1240px]">
        <div className="flex flex-wrap flex-col-reverse lg:flex-nowrap lg:flex-row items-center justify-center gap-16 lg:gap-18">
          <div className="ml-0 lg:ml-10">
            <h2 className="text-xl text-center lg:text-start lg:text-3xl w-[20rem] md:w-full lg:w-[10rem] py-2 ">
              Rules and
              <span className="text-[#D434FE]"> Guidelines</span>
            </h2>
            <p className="py-2 text-center text-sm lg:text-start lg:w-[35rem]">
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether you're a
              coding genius, a design maverick, or a concept wizard, you'll have
              the chance to transform your ideas into reality. Solving
              real-world problems, pushing the boundaries of technology, and
              creating solutions that can change the world, that's what we're
              all about!
            </p>
          </div>

          <div>
            <img src={rulesImg} alt="/" />
          </div>
        </div>
        <div>
          <img
            src={star1}
            alt="/"
            className="absolute left-5 top-[15rem] w-[0.7rem] lg:left-[42rem] lg:top-[28rem] lg:w-[1.5rem]"
          />
        </div>
        <div>
          <img
            src={star2}
            alt="/"
            className="absolute right-4 top-[33rem] lg:left-[26rem] lg:top-[11rem] w-[0.8rem] md:w-[1.2rem]"
          />
        </div>

        <div>
          <img
            src={star1}
            alt="/"
            className="absolute left-[5rem] bottom-[3rem] w-[0.7rem] block lg:hidden"
          />
        </div>
        <div className="">
          <img
            src={purpleFlare}
            alt="/"
            className="absolute top-0 left-0 md:top-1 lg:left-0 lg:w-[75rem] lg:h-[35rem] -z-50"
          />
        </div>
        <div>
          <img
            src={purpleFlare2}
            alt="/"
            className="absolute right-0 bottom-[5rem] w-[10rem] h-[30rem]"
          />
        </div>
      </div>
      <div className="border-b border-gray-700 pt-[4.7rem]"></div>
    </div>
  );
};

export default RulesSection;
