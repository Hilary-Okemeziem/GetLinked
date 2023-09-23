import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/getlinked.png";
import linkedin from "../images/linkedin.png";
import x from "../images/x.png";
import ig from "../images/ig.png";
import phone from "../images/phone.png";
import location from "../images/location.png";
import facebook from "../images/facebook.png";
import star1 from "../images/starwhite.png";
import star2 from "../images/star.png";
import star4 from "../images/sata gra.png";
import { HashLink } from "react-router-hash-link";
import { BiSolidChevronUpSquare } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="bg-[#100B20] w-full text-white text-sm">
      <div className="w-full h-full pt-9 px-6 lg:px-16 mx-auto max-w-[1240px] relative">
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-14 mt-9">
          <div>
            <div>
              <HashLink smooth to="/#hero" className="cursor-pointer">
                <img src={logo} alt="/" width={140} />
              </HashLink>
            </div>
            <div className="py-2 mb-[2.5rem] lg:mb-[5rem]">
              <p className="py-2 lg:w-[29rem]">
                Getlinked Tech Hackathon is a technology innovation program
                established by a group of organizations with the aim of
                showcasing young and talented individuals in the field of
                technology
              </p>
            </div>
            <div>
              <p>
                Terms of Use <span className="text-[#D434FE]">|</span> Privacy
                Policy
              </p>
            </div>
          </div>

          <div>
            <div>
              <h5 className="text-[#D434FE]">Useful Links</h5>
            </div>
            <div className="py-2">
              <ul className="list-none">
                <li className="py-3 hover:text-[#D434FE]">
                  <HashLink smooth to="/#intro">
                    Overview
                  </HashLink>
                </li>
                <li className="py-3 hover:text-[#D434FE]">
                  <HashLink smooth to="/#timeline">
                    Timeline
                  </HashLink>
                </li>
                <li className="py-3 hover:text-[#D434FE]">
                  <HashLink smooth to="/#faqs">
                    FAQs
                  </HashLink>
                </li>
                <li className="py-3 hover:text-[#D434FE]">
                  <Link to="/register">Register</Link>
                </li>
                <li className="py-3 flex items-center gap-4">
                  <div className="text-[#D434FE]">Follow us</div>
                  <div>
                    <img src={ig} alt="" />
                  </div>
                  <div>
                    <img src={x} alt="" />
                  </div>
                  <div>
                    <img src={facebook} alt="" />
                  </div>
                  <div>
                    <img src={linkedin} alt="" />
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div>
              <h5 className="text-[#D434FE]">Contact Us</h5>
            </div>
            <div className="py-4">
              <div className="flex items-center gap-4 py-2">
                <div>
                  <img src={phone} alt="" />
                </div>
                <div>
                  <p>+234 6707653444</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div>
                  <img src={location} alt="" />
                </div>
                <div className="w-[7rem]">
                  <p>27,Alara Street Yaba 100012 Lagos State</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <HashLink smooth to="/#hero">
          <div className="absolute bottom-0 right-0 shadow-xl">
            <BiSolidChevronUpSquare size={50} color={"#D434FE"} />
          </div>
        </HashLink>

        <div>
          <img
            src={star1}
            alt="/"
            className="absolute left-0 top-[9rem] lg:left-0 lg:top-[6rem] w-[1rem] lg:w-[1.2rem]"
          />
        </div>
        <div>
          <img
            src={star1}
            alt="/"
            className="absolute right-[3rem] bottom-[4rem] w-[0.8rem] lg:right-[5rem] lg:bottom-[1rem] lg:w-[1.2rem]"
          />
        </div>
        <div>
          <img
            src={star2}
            alt="/"
            className="absolute right-[10rem] top-[25rem] lg:right-[19rem] lg:top-[6rem] w-[1rem] md:w-[1.2rem]"
          />
        </div>
        <div>
          <img
            src={star4}
            alt="/"
            className="absolute left-[7rem] -bottom-[1rem] w-[0.6rem] lg:left-[38rem] lg:bottom-0 lg:w-[1.2rem]"
          />
        </div>
      </div>

      <div className="flex items-center justify-center pt-6 pb-9">
        <p>All rights reserved. © getlinked Ltd.</p>
      </div>
    </div>
  );
};

export default Footer;
