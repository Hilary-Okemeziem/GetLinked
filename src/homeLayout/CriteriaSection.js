import React from "react";
import star1 from "../images/star pu.png";
import star2 from "../images/starwhite.png";
import star3 from "../images/star.png";
import ellipse from "../images/Ellipse 2.png";
import criteriaImg from "../images/criteriaImg.png";
import ReadMoreBtn from "../images/ReadMoreBtn.png";
import purpleFlare from "../images/PurpleFlare2.png";
import purpleFlare2 from "../images/PurpleFlare.png";

const CriteriaSection = () => {
  return (
    <div className="pt-[5rem] relative reveal" >
      <div className="w-full h-full px-4 lg:px-12 mx-auto max-w-[1240px] ">
        <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-16 lg:gap-24">
          <div className="ml-0 lg:ml-10">
            <img src={criteriaImg} alt="/" />
          </div>
          <div>
            <h2 className="text-xl text-center lg:text-start lg:text-3xl w-full md:w-full lg:w-[20rem] py-2">
              Judging Criteria <br/>
              <span className="text-[#D434FE]"> Key attributes</span>
            </h2>
            <p className="py-2 text-center text-sm lg:text-start lg:w-[33rem]">
              <span className="text-[#FF26B9]">Innovation and Creativity:</span>{" "}
              Evaluate the uniqueness and creativity of the solution. Consider
              whether it addresses a real-world problem in a novel way or
              introduces innovative features.
            </p>
            <p className="py-2 text-center text-sm lg:text-start lg:w-[33rem]">
              <span className="text-[#FF26B9]">Functionality:</span> Assess how
              well the solution works. Does it perform its intended functions
              effectively and without major issues? Judges would consider the
              completeness and robustness of the solution.
            </p>
            <p className="py-2 text-center text-sm lg:text-start lg:w-[33rem]">
              <span className="text-[#FF26B9]">Impact and Relevance:</span>{" "}
              Determine the potential impact of the solution in the real world.
              Does it address a significant problem, and is it relevant to the
              target audience? Judges would assess the potential social,
              economic, or environmental benefits.
            </p>
            <p className="py-2 text-center text-sm lg:text-start lg:w-[33rem]">
              <span className="text-[#FF26B9]">Technical Complexity:</span>{" "}
              Evaluate the technical sophistication of the solution. Judges
              would consider the complexity of the code, the use of advanced
              technologies or algorithms, and the scalability of the solution.
            </p>
            <p className="py-2 text-center text-sm lg:text-start lg:w-[33rem]">
              <span className="text-[#FF26B9]">
                Adherence to Hackathon Rules:
              </span>{" "}
              Judges will Ensure that the team adhered to the rules and
              guidelines of the hackathon, including deadlines, use of specific
              technologies or APIs, and any other competition-specific
              requirements.
            </p>

            <div className="pt-12 cursor-pointer flex items-center justify-center lg:block">
                <img src={ReadMoreBtn} alt="" />
            </div>
          </div>
        </div>
        <div>
          <img
            src={star2}
            alt="/"
            className="absolute right-[2rem] bottom-[7rem] w-[1rem] md:right-[4rem] md:bottom-[7rem] lg:left-[38rem] lg:bottom-[5rem]"
          />
        </div>
        <div>
          <img
            src={star1}
            alt="/"
            className="absolute left-[10rem] top-[1rem] w-[1rem] lg:left-[15rem] lg:top-[6rem] lg:w-[1.5rem]"
          />
        </div>
        <div>
          <img
            src={star3}
            alt="/"
            className="absolute left-[13rem] top-[14rem] lg:left-[26rem] lg:top-[25rem] w-[0.8rem] lg:w-[1.2rem]"
          />
        </div>
        <div>
          <img
            src={ellipse}
            alt="/"
            className="absolute hidden lg:block lg:left-[12.5rem] lg:top-[9.2rem] w-[7rem] -z-20"
          />
        </div>
        <div>
          <img
            src={purpleFlare}
            alt="/"
            className="absolute top-[9rem] left-0 md:top-1 lg:top-[15rem] lg:left-0 lg:h-[35rem] -z-50"
          />
        </div>
        <div>
          <img
            src={purpleFlare2}
            alt="/"
            className="absolute right-0 bottom-[6rem] w-[10rem] h-[22rem] lg:w-[35rem] lg:h-[40rem] lg:top-[26rem]"
          />
        </div>
      </div>
      <div className="border-b border-gray-700 pt-[4.7rem]"></div>
    </div>
  );
};

export default CriteriaSection;
