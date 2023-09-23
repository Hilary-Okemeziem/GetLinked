import React from "react";
import star1 from "../images/starwhite.png";
import star2 from "../images/star.png";
import star3 from "../images/star pu.png";
import star4 from "../images/sata gra.png";
import purpleFlare from "../images/PurpleFlare2.png";
import purpleFlare2 from "../images/PurpleFlare.png";
import trophy from "../images/trophy.png";
import rewards from "../images/Rewards.png";

const RewardsSection = () => {
  return (
    <div className="pt-[5rem] relative" >
      <div className="w-full h-full px-4 lg:px-12 mx-auto max-w-[1240px]">
        <div className="relative lg:hidden block pb-[4rem]">
          <h2 className="text-xl text-center lg:text-start lg:text-3xl py-2">
            Prizes and <br />
            <span className="text-[#D434FE]"> Rewards</span>
          </h2>
          <p className="py-2 text-center text-sm lg:text-start lg:w-[24rem]">
            Highlight of the prizes or rewards for winners and for participants.
          </p>
          <div>
            <img
              src={star4}
              alt="/"
              className="absolute right-0 -top-0 lg:right-[17rem] lg:top-[6rem] w-[0.8rem] lg:w-[1.2rem] -z-50"
            />
          </div>
        </div>

        <div className="flex flex-wrap lg:flex-nowrap lg:flex-row items-center justify-center gap-16 lg:gap-30">
          <div className="relative">
            <img src={trophy} alt="" />
            <div>
              <img
                src={star3}
                alt="/"
                className="absolute hidden lg:block lg:left-[10rem] lg:-top-[5rem] lg:w-[1.2rem]"
              />
            </div>

            <div>
              <img
                src={star1}
                alt="/"
                className="absolute left-0 -bottom-[2rem] lg:left-[10rem] lg:-bottom-[5rem] w-[0.9rem] md:w-[1.2rem]"
              />
            </div>
          </div>

          <div>
            <div className="relative hidden lg:block">
              <h2 className="text-xl text-center lg:text-start lg:text-3xl py-2 ">
                Prizes and <br />
                <span className="text-[#D434FE]"> Rewards</span>
              </h2>
              <p className="py-2 text-center text-sm lg:text-start lg:w-[24rem]">
                Highlight of the prizes or rewards for winners and for
                participants.
              </p>
              <div>
                <img
                  src={star4}
                  alt="/"
                  className="absolute right-0 -top-0 lg:right-[17rem] lg:top-[6rem] w-[0.8rem] lg:w-[1.2rem] -z-50"
                />
              </div>
            </div>
            <div className="py-4 relative">
              <img src={rewards} alt="/" />
              <div>
                <img
                  src={star1}
                  alt="/"
                  className="absolute right-0 top-0 w-[0.7rem] lg:left-[2rem] lg:top-[2rem] lg:w-[1.5rem]"
                />
              </div>
              <div>
                <img
                  src={star1}
                  alt="/"
                  className="absolute hidden lg:block lg:right-0 lg:top-[8rem] w-[0.8rem] md:w-[1.2rem]"
                />
              </div>

              <div>
                <img
                  src={star2}
                  alt="/"
                  className="absolute right-[8rem] -bottom-[3rem] lg:left-[25rem] lg:bottom-0 w-[0.7rem] md:w-[1.2rem]"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src={star4}
            alt="/"
            className="absolute block lg:hidden left-0 top-[2rem] w-[0.8rem]"
          />
        </div>
        <div className="">
          <img
            src={purpleFlare}
            alt="/"
            className="absolute top-8 left-0 md:top-1 lg:left-0 lg:w-[60rem] lg:h-[35rem] -z-50"
          />
        </div>
        <div>
          <img
            src={purpleFlare2}
            alt="/"
            className="absolute right-0 bottom-0 w-[10rem] h-[30rem]"
          />
        </div>
      </div>
      <div className="border-b border-gray-700 pt-[4.7rem]"></div>
    </div>
  );
};

export default RewardsSection;
