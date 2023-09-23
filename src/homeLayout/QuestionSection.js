import React from "react";
import star1 from "../images/starwhite.png";
import star2 from "../images/star.png";
import star3 from "../images/star pu.png";
import questionMark1 from "../images/_.png";
import questionMark2 from "../images/_gra.png";
import questionImg from "../images/questionImg.png";
import star4 from "../images/sata gra.png";

const QuestionSection = () => {
  return (
    <div className="pt-[5rem] relative reveal" id="faqs"  >
      <div className="w-full h-full px-4 lg:px-12 mx-auto max-w-[1240px] ">
        <div className="flex flex-wrap lg:flex-nowrap lg:flex-row items-center justify-center gap-24 lg:gap-24">
          <div className="ml-0 lg:ml-10 w-full">
            <h2 className="text-xl text-center lg:text-start lg:text-3xl w-full py-2 ">
              Frequently Ask <br />
              <span className="text-[#D434FE]"> Question</span>
            </h2>
            <p className="py-2 text-center text-sm lg:text-start lg:w-[24rem]">
              We got answers to the questions that you might want to ask about
              getlinked Hackathon 1.0
            </p>
            <div className="py-12">
              <div className="relative text-sm py-3 lg:w-[28rem]">
                <p>Can I work on a project I started before the hackathon?</p>
                <div className="border-b border-[#D434FE] pt-[1rem]"></div>
                <div>
                  <img
                    src={star4}
                    alt="/"
                    className="absolute right-0 top-8 md:top-4 lg:top-2 w-[1rem]"
                  />
                </div>
              </div>
              <div className="relative text-sm py-3 lg:w-[28rem]">
                <p>What happens if I need help during the hackathon?</p>
                <div className="border-b border-[#D434FE] pt-[1rem]"></div>
                <div>
                  <img
                    src={star4}
                    alt="/"
                    className="absolute right-0 top-8 md:top-4 lg:top-2 w-[1rem]"
                  />
                </div>
              </div>
              <div className="relative text-sm py-3 lg:w-[28rem]">
                <p>What happens if I don't have an idea for a project?</p>
                <div className="border-b border-[#D434FE] pt-[1rem]"></div>
                <div>
                  <img
                    src={star4}
                    alt="/"
                    className="absolute right-0 top-8 md:top-4 lg:top-2 w-[1rem]"
                  />
                </div>
              </div>
              <div className="relative text-sm py-3 lg:w-[28rem]">
                <p>Can I join a team or do I have to come with one?</p>
                <div className="border-b border-[#D434FE] pt-[1rem]"></div>
                <div>
                  <img
                    src={star4}
                    alt="/"
                    className="absolute right-0 top-8 md:top-4 lg:top-2 w-[1rem]"
                  />
                </div>
              </div>
              <div className="relative text-sm py-3 lg:w-[28rem]">
                <p>What happens after the hackathon ends</p>
                <div className="border-b border-[#D434FE] pt-[1rem]"></div>
                <div>
                  <img
                    src={star4}
                    alt="/"
                    className="absolute right-0 top-4 md:top-4 lg:top-2 w-[1rem]"
                  />
                </div>
              </div>
              <div className="relative text-sm py-3 lg:w-[28rem]">
                <p>Can I work on a project I started before the hackathon?</p>
                <div className="border-b border-[#D434FE] pt-[1rem]"></div>
                <div>
                  <img
                    src={star4}
                    alt="/"
                    className="absolute right-0 top-8 md:top-4 lg:top-2 w-[1rem]"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full relative">
            <img src={questionImg} alt="/" />
            <div>
              <img
                src={questionMark1}
                alt="/"
                className="absolute left-[2rem] -top-[3rem] md:left-[5rem] md:-top-[1rem]  lg:left-[2rem] lg:-top-[2rem]"
              />
            </div>
            <div>
              <img
                src={questionMark1}
                alt="/"
                className="absolute right-[5rem] -top-[3rem] md:right-[15rem] md:-top-[1rem] lg:right-[10rem] lg:-top-[2rem]"
              />
            </div>
            <div>
              <img
                src={questionMark2}
                alt="/"
                className="absolute left-[7rem] -top-[6rem] md:left-[15rem] lg:left-[10rem] lg:-top-[6rem]"
              />
            </div>
            <div>
              <img
                src={star1}
                alt="/"
                className="absolute right-[5rem] lg:right-[5rem] lg:top-[33rem] w-[0.8rem] lg:w-[1.2rem]"
              />
            </div>
            <div>
              <img
                src={star2}
                alt="/"
                className="absolute left-5 top-[11rem] md:left-12 md:top-[21rem] lg:left-5 lg:top-[15rem] w-[0.7rem] lg:w-[1.5rem]"
              />
            </div>
            <div>
              <img
                src={star4}
                alt="/"
                className="absolute left-[4rem] top-[5rem] md:left-[10rem] md:top-[9rem] lg:left-[5rem] lg:top-[7rem] w-[0.7rem] lg:w-[1.2rem]"
              />
            </div>
            <div>
              <img
                src={star4}
                alt="/"
                className="absolute left-[11rem] -top-[3rem] md:left-[20rem]  lg:left-[15rem] lg:-top-[2rem] w-[0.7rem] lg:w-[1.2rem]"
              />
            </div>
          </div>
        </div>

        <div>
          <img
            src={star3}
            alt="/"
            className="absolute left-7 top-[4rem] lg:left-[7rem] lg:top-[2rem] w-[1.5rem]"
          />
        </div>
      </div>
      <div className="border-b border-gray-700 pt-[4.7rem]"></div>
    </div>
  );
};

export default QuestionSection;
