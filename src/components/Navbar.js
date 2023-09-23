import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/getlinked.png";
import hamburger from "../images/hamburger.png";
import hamburgerClose from "../images/hamburgerClose.png";
import regBtn from "../images/Register Button.png";
import ellipse from "../images/Ellipse 4.png";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const [navBg, setNavBg] = useState(false);

  const changeNavbg = () => {
    if (window.scrollY >= 90) {
      setNavBg(true);
    } else {
      setNavBg(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNavbg);
  }, []);

  return (
    <div>
      <div
        className={
          navBg
            ? "fixed w-full h-20 shadow-xl z-[100] bg-[#150E28] ease-in-out duration-300"
            : "fixed w-full h-20 z-[100]"
        }
      >
        <div className="flex justify-between items-center w-full h-full px-8 lg:px-12 max-w-[1240px] mx-auto">
          <Link to="/" className="cursor-pointer">
            <img src={logo} alt="/" width={140} />
          </Link>

          <div className="hidden lg:flex items-center gap-24">
            <ul className="flex items-center gap-12 text-sm">
              <li>
                <HashLink smooth to="/#timeline" className="hover:text-[#D434FE]">
                  Timeline
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="/#intro" className="hover:text-[#D434FE]">Overview</HashLink>
              </li>
              <li>
                <HashLink smooth to="/#faqs" className="hover:text-[#D434FE]">FAQs</HashLink>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#D434FE]">Contact</Link>
              </li>
            </ul>

            <div>
              <Link to="/register" className="cursor-pointer">
                <img src={regBtn} alt="/" width={140} />
              </Link>
            </div>
          </div>

          {/* Hamburger Icon */}
          <div onClick={handleNav} className="lg:hidden z-9 ml-3">
            <img src={hamburger} alt="/" />
          </div>
        </div>

        {/* Mobile Menu */}
        {/* Overlay */}
        <div
          className={
            nav
              ? "lg:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
              : ""
          }
        >
          {/* Side Drawer Menu */}
          <div
            className={
              nav
                ? "fixed left-0 top-0 w-full h-screen bg-[#150E28] p-4 ease-in duration-500 z-[100]"
                : "fixed left-[-100%] top-0 p-4 ease-in duration-500"
            }
          >
            <div>
              <div className="flex w-full items-center justify-end px-6 py-9 ">
                <div onClick={handleNav} className="cursor-pointer relative">
                  <img src={ellipse} alt="/" />
                  <img
                    src={hamburgerClose}
                    alt="/"
                    className="absolute top-[6px] left-[6px]"
                  />
                </div>
              </div>
            </div>

            <div className="mt-[3rem] px-9 flex flex-col">
              <div>
                <ul className="flex flex-col gap-6 text-lg mb-10">
                  <li onClick={() => setNav(false)}>
                    <HashLink smooth to="/#timeline">Timeline</HashLink>
                  </li>
                  <li onClick={() => setNav(false)}>
                    <HashLink smooth to="/#intro">Overview</HashLink>
                  </li>
                  <li onClick={() => setNav(false)}>
                    <HashLink smooth to="/#faqs">FAQs</HashLink>
                  </li>
                  <li onClick={() => setNav(false)}>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>

                <div>
                  <Link
                    to="/register"
                    className="cursor-pointer"
                    onClick={() => setNav(false)}
                  >
                    <img src={regBtn} alt="/" width={140} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b border-gray-700"></div>
      </div>
    </div>
  );
};

export default Navbar;
