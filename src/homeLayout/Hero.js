import React, { useEffect, useRef, useState } from "react";
import star from "../images/starwhite.png";
import star2 from "../images/star.png";
import vector from "../images/Vector 4.png";
import purpleFlare from "../images/PurpleFlare2.png";
import purpleFlare2 from "../images/PurpleFlare.png";
import title from "../images/Title.png";
import regBtn from "../images/Register Button.png";
import heroImg from "../images/heroImg.png";
import galaxy from "../images/galaxy.png";
import metrix from "../images/metrix.png";
import { Link } from "react-router-dom";

const Hero = () => {
  const Ref = useRef(null);

  const [timer, setTimer] = useState("00  00  00");

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };

  
  useEffect(() => {
    const startTimer = (e) => {
      let { total, hours, minutes, seconds } = getTimeRemaining(e);
      if (total >= 0) {
        setTimer(
          (hours > 9 ? hours : "0" + hours) +
            "ₕ  " +
            (minutes > 9 ? minutes : "0" + minutes) +
            "ₘ " +
            (seconds > 9 ? seconds : "0" + seconds) +
            "ₛ "
        );
      }
    };
    const clearTimer = (e) => {
      setTimer("00 00 00");
      if (Ref.current) clearInterval(Ref.current);
      const id = setInterval(() => {
        startTimer(e);
      }, 1000);
      Ref.current = id;
    };
    const getDeadTime = () => {
      let deadline = new Date();
  
      deadline.setSeconds(deadline.getSeconds() + 80000);
      return deadline;
    };

    clearTimer(getDeadTime());
  }, []);

  return (
    <div className="pt-[5rem] relative" id="hero">
      <div className="hidden lg:block">
        <div className="">
          <img
            src={purpleFlare}
            alt="/"
            className="absolute -top-[10rem] left-0 w-[75rem] h-[35rem] -z-50"
          />
        </div>
        <div className="">
          <img
            src={star2}
            alt="/"
            className="absolute right-[35rem] bottom-[30rem] animate__animated animate__rollIn"
          />
        </div>
        <div className="">
          <img
            src={star2}
            alt="/"
            className="absolute left-[29.5rem] bottom-[9rem] animate__animated animate__rollIn"
          />
        </div>
        <div className="w-full h-full px-4 lg:px-12 mx-auto max-w-[1240px]">
          <div className="pt-2 flex items-center justify-between">
            <div>
              <img
                src={star}
                alt="/"
                className="absolute top-[8rem] left-[10rem] animate__animated animate__bounce"
              />
            </div>

            <div>
              <h3 className="text-white text-3xl italic tracking-wide absolute right-11 top-[6rem] animate__animated animate__fadeInDown animate_delay-2s animate__slow">
                Igniting a Revolution in HR Innovation
              </h3>
              <img
                src={vector}
                width={230}
                alt="/"
                className="absolute right-12 top-[8rem] animate__animated animate__fadeInDown animate_delay-3s animate__slow"
              />
            </div>
          </div>

          <div className="pt-[5rem] flex justify-between">
            <div>
              <div className="w-[37rem] pb-2 animate__animated animate__backInLeft animate__slow ">
                <img src={title} alt="/" />
              </div>
              <p className="w-[27rem] py-2 animate__animated animate__fadeInLeft animate__delay-2s animate__slow">
                Participate in getlinked tech Hackathon 2023 stand a chance to
                win a Big prize
              </p>
              <div className="py-6 animate__animated animate__fadeInLeft animate__delay-3s animate__slow">
                <Link to="/register" className="cursor-pointer">
                  <img src={regBtn} alt="/" width={140} />
                </Link>
              </div>
              <div className="text-5xl mt-12 tracking-wider font-extrabold animate__animated animate__backInLeft animate__delay-4s animate__slow">
                {timer}
              </div>
            </div>

            <div>
              <div>
                <img
                  src={heroImg}
                  alt="/"
                  className="absolute right-0 w-[50rem] h-[33rem] z-10"
                />
              </div>
              <div>
                <img
                  src={galaxy}
                  alt="/"
                  className="absolute right-0 w-[45rem] h-[31rem] z-[20] animate__animated animate__fadeInDown animate__delay-2s"
                />
              </div>
              <div>
                <img
                  src={metrix}
                  alt="/"
                  className="absolute right-0 w-[45rem] h-[31rem]"
                />
              </div>
              <div>
                <img
                  src={purpleFlare2}
                  alt="/"
                  className="absolute right-0 w-[60rem] h-[30rem]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="border-b border-gray-700 pt-[4.7rem]"></div>
      </div>

      <div className="flex flex-col items-center justify-center lg:hidden">
        <div className="py-5">
          <p className="text-md font-bold italic">
            Igniting a Revolution in HR Innovation
          </p>
          <img
            src={vector}
            alt="/"
            className="absolute right-5 w-[7.5rem] h-[0.8rem] md:right-[13.5rem]"
          />
        </div>

        <div className="py-7 flex flex-col items-center justify-center">
          <div className="py-2">
            <img src={title} alt="/" className="w-[21rem] z-20" />
          </div>
          <p className="py-2 text-center">
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>
          <div className="py-4">
            <Link to="/" className="cursor-pointer">
              <img src={regBtn} alt="/" width={140} />
            </Link>
          </div>
          <div className="text-5xl mt-7 mb-5 tracking-wider font-extrabold">
            {timer}
          </div>
        </div>

        <div>
          <img
            src={purpleFlare}
            alt="/"
            className="absolute top-10 left-0 -z-50"
          />
        </div>

        <div>
          <img
            src={star}
            alt="/"
            className="absolute top-[10.5rem] left-[5.5rem] w-[1rem]"
          />
        </div>

        <div>
          <img
            src={star2}
            alt="/"
            className="absolute top-[10rem] right-[2rem] w-[0.7rem]"
          />
        </div>

        <div>
          <img
            src={star2}
            alt="/"
            className="absolute top-[24.5rem] right-[5rem] w-[0.7rem]"
          />
        </div>

        <div>
            <img src={heroImg} alt="/" className="" />
        </div>

        <div>
            <img src={galaxy} alt="/" className="absolute left-7 bottom-8 w-[20rem] md:w-[45rem]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
