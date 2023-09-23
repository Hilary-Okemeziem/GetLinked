import React from "react";
import star1 from "../images/starwhite.png";
import star3 from "../images/star pu.png";
import star4 from "../images/sata gra.png";
import purpleFlare from "../images/PurpleFlare2.png";
import purpleFlare2 from "../images/PurpleFlare.png";
import patner from "../images/patner.png";

const PartnersSection = () => {
  return (
    <div className="pt-[5rem] relative  reveal" >
      <div className="w-full h-full px-4 lg:px-12 mx-auto max-w-[1240px]">
        <div className="pb-[4rem] flex items-center justify-center flex-col">
          <h2 className="text-xl text-center lg:text-3xl py-2">
            Partners and Sponsors
          </h2>
          <p className="py-2 text-center text-sm lg:w-[30rem]">
            Getlinked Hackathon 1.0 is honored to have the following major
            companies as its partners and sponsors
          </p>
        </div>

        <div className="relative flex items-center justify-center">
          <img src={patner} alt="/" />
          <div>
            <img
              src={star3}
              alt="/"
              className="absolute left-[2rem] top-0 w-[0.7rem] lg:left-[2rem] lg:-top-[3rem] lg:w-[1.5rem]"
            />
          </div>
          <div>
            <img
              src={star4}
              alt="/"
              className="absolute hidden lg:block lg:right-[29.6rem] lg:top-[5rem] w-[0.8rem] md:w-[1.2rem]"
            />
          </div>

          <div>
            <img
              src={star1}
              alt="/"
              className="absolute right-[3rem] bottom-0 lg:right-[29.5rem] lg:bottom-[2rem] w-[0.7rem] md:w-[1.2rem]"
            />
          </div>
        </div>

        <div className="">
          <img
            src={purpleFlare}
            alt="/"
            className="absolute -top-[4rem] left-0 w-[20rem] md:top-0 lg:left-0 lg:w-[60rem] lg:h-[35rem] -z-50"
          />
        </div>
        <div>
          <img
            src={purpleFlare2}
            alt="/"
            className="absolute right-0 -bottom-[7rem] w-[10rem] h-[15rem] lg:-bottom-[18rem] lg:w-[25rem] lg:h-[45rem]"
          />
        </div>
      </div>
      <div className="border-b border-gray-700 pt-[4.7rem]"></div>
    </div>
  );
};

export default PartnersSection;
