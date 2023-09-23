import React from "react";
import star1 from "../images/starwhite.png";
import star2 from "../images/star.png";
import star3 from "../images/star pu.png";
import star4 from "../images/sata gra.png";
import purpleFlare from "../images/PurpleFlare2.png";
import policyImg2 from "../images/policyImg2.png";
import policyImg from "../images/policyImg.png";
import listItem from "../images/listItem.png";
import ReadMoreBtn from "../images/ReadMoreBtn.png";

const PolicySection = () => {
  return (
    <div className="pt-[5rem] relative" >
      <div className="w-full h-full px-4 lg:px-12 mx-auto max-w-[1240px]">
        <div className="flex flex-wrap lg:flex-nowrap lg:flex-row items-center justify-center gap-16 lg:gap-18">
          <div>
            <div className="ml-0 lg:ml-10">
              <h2 className="text-xl text-center lg:text-start lg:text-3xl w-full py-2 ">
                Privacy Policy and <br />
                <span className="text-[#D434FE]"> Terms</span>
              </h2>
              <p className="pt-2 pb-6 text-center text-sm lg:text-start text-gray-300">
                Last updated on September 12, 2023
              </p>
              <p className="py-2 text-center text-sm lg:text-start w-[22rem] md:w-full lg:w-[29rem]">
                Below are our privacy & policy, which outline a lot of goodies.
                it&apos;s our aim to always take of our participant
              </p>

              <div className="rounded-sm border border-[#D434FE] py-6 px-4 lg:px-9 my-9 bg-white/5">
                <div className="flex items-center justify-center">
                    <p className="py-2 text-center text-sm w-[18rem] lg:text-start md:w-full lg:w-[26rem]">
                    At getlinked tech Hackathon 1.0, we value your privacy and are
                    committed to protecting your personal information. This
                    Privacy Policy outlines how we collect, use, disclose, and
                    safeguard your data when you participate in our tech hackathon
                    event. By participating in our event, you consent to the
                    practices described in this policy.
                    </p>
                </div>

                <h4 className="text-[#D434FE] font-semibold py-2 text-sm">
                  Licensing Policy
                </h4>

                <p className="py-2 text-sm">
                  Here are terms of our Standard License:
                </p>

                <div>
                  <div className="flex items-center gap-4 py-4">
                    <div>
                      <img src={listItem} alt="/" className="mb-9 w-[2.5rem] lg:mb-5 lg:w-[0.8rem]" />
                    </div>
                    <div>
                      <p className="text-sm lg:w-[27rem]">
                        The Standard License grants you a non-exclusive right to
                        navigate and register for our event
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 pb-6">
                    <div>
                      <img src={listItem} alt="/" className="mb-9 w-[2.5rem] lg:mb-5 lg:w-[0.8rem]" />
                    </div>
                    <div>
                      <p className="text-sm lg:w-[27rem]">
                        You are licensed to use the item available at any free
                        source sites, for your project developement
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <img src={ReadMoreBtn} alt="/" />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <img
                src={star3}
                alt="/"
                className="absolute left-[21rem] top-[17rem] w-[1.2rem] lg:left-[43rem] lg:top-[11rem] lg:w-[1.2rem]"
              />
            </div>
            <div>
              <img
                src={star3}
                alt="/"
                className="absolute left-0 top-[43rem] lg:left-[7rem] lg:top-[38rem] w-[0.8rem] md:w-[1.5rem]"
              />
            </div>

            <div>
              <img
                src={star2}
                alt="/"
                className="absolute left-[19rem] top-[2rem] w-[0.8rem] lg:left-[32rem] lg:top-[4rem] lg:w-[1.2rem]"
              />
            </div>
          </div>

          <div className="relative mt-16 lg:mt-0">
            <img src={policyImg} alt="/" className="w-[18rem] lg:w-[25rem]" />
            <img
              src={policyImg2}
              alt="/"
              className="absolute -top-[6rem] left-[1rem] lg:-top-[10rem] lg:left-[2rem] w-[18rem] lg:w-[25rem] -z-50"
            />

            <div>
              <img
                src={star1}
                alt="/"
                className="absolute left-[3rem] top-[19rem] w-[0.7rem] lg:left-[21rem] lg:-top-[3rem] lg:w-[1rem]"
              />
            </div>

            <div>
              <img
                src={star1}
                alt="/"
                className="absolute left-[14rem] top-0 lg:left-[4rem] lg:top-[22rem] w-[0.7rem] md:w-[1rem]"
              />
            </div>

            <div>
              <img
                src={star2}
                alt="/"
                className="absolute left-[18rem] top-[19rem] lg:left-[26rem] lg:top-[25rem] w-[0.8rem] md:w-[1.2rem]"
              />
            </div>

            <div>
              <img
                src={star4}
                alt="/"
                className="absolute -left-5 bottom-[24rem] lg:left-[8rem] lg:bottom-[14rem] lg:w-[0.7rem]"
              />
            </div>
          </div>
        </div>

        <div className="">
          <img
            src={purpleFlare}
            alt="/"
            className="absolute left-0 top-[30rem] lg:-bottom-[8rem] lg:w-75rem] lg:h-[35rem] -z-50 lg:z-50"
          />
        </div>
      </div>
      <div className="border-b border-gray-700 pt-[4.7rem]"></div>
    </div>
  );
};

export default PolicySection;
