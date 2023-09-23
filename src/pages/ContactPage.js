import React, { useState } from "react";
import linkedin from "../images/linkedin.png";
import { Link } from "react-router-dom";
import x from "../images/x.png";
import ig from "../images/ig.png";
import facebook from "../images/facebook.png";
import submitBtn from "../images/SubmitBtn.png";
import star1 from "../images/starwhite.png";
import star2 from "../images/star.png";
import star3 from "../images/star pu.png";
import star4 from "../images/sata gra.png";
import backBtn from "../images/backBtn.png";
import purpleFlare from "../images/PurpleFlare2.png";
import purpleFlare2 from "../images/PurpleFlare.png";
import { toast } from "react-toastify";
import { baseUrl } from "../utils/baseUrl";
import axios from "axios";
import LoadingModal from "../utils/LoadingModal";
import ContactCongratsModal from "../utils/ContactCongratsModal";

const ContactPage = () => {
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [values, setValues] = useState({
    first_name: "",
    phone_number: "",
    email: "",
    message: "",
  });

  function closeModal() {
    setIsOpen(false);
  }

  const handleChange = (e) => {
    const newObj = { ...values, [e.target.name]: e.target.value };
    setValues(newObj);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios
        .post(
          `${baseUrl}/hackathon/contact-form`,
          {
            first_name: values.first_name,
            phone_number: values.phone_number,
            email: values.email,
            message: values.message,
          },
          setLoading(true)
        )
        .then((response) => {
          // console.log(response.data);
          if (response.status === 201) {
            setLoading(false);
            // console.log('success');
            toast.success(`Submitted Successful!, Thank You`, {
              position: "top-right",
            });
            setIsOpen(true);
            document.getElementById("contact-form").reset();
          }
        });
    } catch (error) {
      console.log(error.response);
      console.log(error);
      toast.error(`An error occurred. Please try again`, {
        position: "top-right",
      });
      setLoading(false);
    }
  };

  function closeLoadingModal() {
    setLoading(false);
  }
  return (
    <div className="pt-[5rem] relative">
      <div className="w-full h-full px-4 lg:px-16 max-w-[1240px] mx-auto py-9 relative">
        <div className="hidden lg:flex items-center justify-center gap-24 py-3 text-sm">
          <div>
            <h4 className="text-[#D434FE] text-2xl py-2">Get in touch</h4>
            <p className="py-2">Contact information</p>
            <p className="py-2 w-[8rem]">
              27,Alara Street Yaba 100012 Lagos State
            </p>
            <p className="py-2">Call Us : 07067981819</p>
            <p className="py-2 w-[18rem]">
              we are open from Monday-Friday 08:00am - 05:00pm
            </p>
            <p className="pt-6 text-[#D434FE]">Share on</p>
            <div className="py-3 flex items-center gap-4">
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
            </div>
          </div>

          <div>
            <div className="rounded-lg shadow-lg bg-white/5 py-6 px-4 lg:px-16 my-9">
              <div>
                <div className="text-[#D434FE]">
                  <h4 className="py-2 text-base">
                    Questions or need assistance?
                  </h4>
                  <h4 className="text-base">Let us know about it!</h4>
                </div>

                <form
                  className="w-[26rem] py-4"
                  id="contact-form"
                  onSubmit={handleSubmit}
                >
                  <div className="pb-4">
                    <input
                      type="text"
                      name="first_name"
                      onChange={handleChange}
                      required
                      className="h-12 w-full bg-white/5 border-2 rounded-md border-white focus:border-white px-6 placeholder:text-white"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="py-4">
                    <input
                      type="tel"
                      name="phone_number"
                      onChange={handleChange}
                      required
                      className="h-12 w-full bg-white/5 border-2 rounded-md border-white focus:border-white px-6 placeholder:text-white"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="py-4">
                    <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      required
                      className="h-12 w-full bg-white/5 border-2 rounded-md border-white focus:border-white px-6 placeholder:text-white"
                      placeholder="Email"
                    />
                  </div>
                  <div className="py-4">
                    <textarea
                      cols="10"
                      rows="5"
                      name="message"
                      onChange={handleChange}
                      required
                      placeholder="Message"
                      className="py-2 w-full bg-white/5 border-2 rounded-md border-white focus:border-white px-6 placeholder:text-white"
                    ></textarea>
                  </div>
                  <div className="flex items-center justify-center">
                    <button type="submit">
                      <img src={submitBtn} alt="" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="flex lg:hidden flex-col items-center gap-14 py-3 text-sm">
          <div>
            <h4 className="text-xl text-[#D434FE] py-2 w-[15rem]">
              Questions or need assistance? <br /> Let us know about it
            </h4>
            <p className="pt-2 w-[18rem]">
              Email us below to any question related to our event
            </p>
          </div>

          <div>
            <form
              className="w-[300px]"
              id="contact-form"
              onSubmit={handleSubmit}
            >
              <div className="pb-4">
                <input
                  type="text"
                  name="first_name"
                  onChange={handleChange}
                  required
                  className="h-12 w-full bg-white/5 border-2 rounded-md border-white focus:border-white px-6 placeholder:text-white"
                  placeholder="first Name"
                />
              </div>
              <div className="py-4">
                <input
                  type="tel"
                  name="phone_number"
                  onChange={handleChange}
                  required
                  className="h-12 w-full bg-white/5 border-2 rounded-md border-white focus:border-white px-6 placeholder:text-white"
                  placeholder="Phone Number"
                />
              </div>
              <div className="py-4">
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  required
                  className="h-12 w-full bg-white/5 border-2 rounded-md border-white focus:border-white px-6 placeholder:text-white"
                  placeholder="Email"
                />
              </div>
              <div className="py-4">
                <textarea
                  cols="10"
                  rows="5"
                  name="message"
                  onChange={handleChange}
                  required
                  placeholder="Message"
                  className="py-2 w-full bg-white/5 border-2 rounded-md border-white focus:border-white px-6 placeholder:text-white"
                ></textarea>
              </div>
              <div className="flex items-center justify-center">
                <button type="submit">
                  <img src={submitBtn} alt="" />
                </button>
              </div>
            </form>

            <div className="pt-4 flex items-center justify-center flex-col">
              <p className="pt-6 text-[#D434FE]">Share on</p>
              <div className="py-3 flex items-center gap-4">
                <div>
                  <img src={ig} alt="/" />
                </div>
                <div>
                  <img src={x} alt="/" />
                </div>
                <div>
                  <img src={facebook} alt="/" />
                </div>
                <div>
                  <img src={linkedin} alt="/" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="block lg:hidden">
          <Link to="/">
            <img src={backBtn} alt="/" className="absolute left-5 top-5" />
          </Link>
        </div>

        <div>
          <img
            src={star1}
            alt="/"
            className="absolute right-2 bottom-[15rem] lg:right-0 lg:bottom-[13rem] w-[1rem] lg:w-[1.5rem]"
          />
        </div>

        <div>
          <img
            src={star2}
            alt="/"
            className="absolute right-[3rem] top-[5rem] lg:right-[12rem] lg:top-[3rem] w-[1.2rem]"
          />
        </div>

        <div>
          <img
            src={star3}
            alt="/"
            className="absolute  right-[20rem] bottom-[10rem] lg:right-[43rem] lg:bottom-[14rem] w-[1rem] lg:w-[1.7rem]"
          />
        </div>

        <div>
          <img
            src={star4}
            alt="/"
            className="absolute left-[12rem] top-[1rem] w-[0.8rem] lg:left-[12rem] lg:top-[7rem] lg:w-[1.2rem]"
          />
        </div>
      </div>

      <div>
        <img
          src={purpleFlare}
          alt="/"
          className="absolute top-0 left-0 md:top-1 lg:top-0 lg:left-0 lg:h-[35rem] -z-50"
        />
      </div>
      <div>
        <img
          src={purpleFlare2}
          alt="/"
          className="absolute hidden lg:block right-0 w-[10rem] h-[22rem] lg:w-[35rem]  lg:-bottom-0 -z-50"
        />
      </div>

      {loading ? (
        <LoadingModal
          isLoading={loading}
          closeLoadingModal={closeLoadingModal}
        />
      ) : (
        ""
      )}

      {isOpen ? (
        <ContactCongratsModal closeModal={closeModal} isOpen={isOpen} />
      ) : (
        ""
      )}
    </div>
  );
};

export default ContactPage;
