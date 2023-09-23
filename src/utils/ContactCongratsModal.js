import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import done from "../images/done.png";
import man from "../images/man.png";
import wink from "../images/wink.png";
import modalBtn from "../images/modalBtn.png";
import star2 from "../images/star.png";
import star3 from "../images/star pu.png";
import star4 from "../images/sata gra.png";

const ContactCongratsModal = ({ isOpen, closeModal }) => {
  return (
    <div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/80" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-md bg-white/5 border border-[#D434FE] p-6 text-left align-middle shadow-xl transition-all mt-[4.3rem]">
                  <Dialog.Title>
                    <div className="flex items-center justify-center w-full relative">
                      <img src={done} alt="/" className="mr-[8rem]" />

                      <img
                        src={man}
                        alt="/"
                        className="absolute left-[3rem] md:left-[6rem] lg:left-[6rem] top-[1rem]"
                      />
                    </div>
                  </Dialog.Title>

                  <div className="flex items-center justify-center flex-col py-6">
                    <div>
                      <h2 className="text-center text-xl font-extrabold py-3">
                        Thank You for the feedback <br />
                        you message has been successfully!
                      </h2>
                    </div>
                    <div className="flex items-center justify-center text-xs">
                      <p className="text-center ">
                        Yes, it was easy and you did it! <br />
                        feel free to reach out to us anytime
                      </p>

                      <div>
                        <img src={wink} alt="" className="w-[10px] mt-4" />
                      </div>
                    </div>

                    <div className="pt-7 relative cursor-pointer" onClick={closeModal}>
                      <img src={modalBtn} alt="" />
                      <p className="text-center absolute text-sm lg:text-base top-8 left-[8.5rem] md:left-[11rem] lg:top-9 lg:left-[11rem]">
                        Back
                      </p>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
          <div>
            <img
              src={star2}
              alt="/"
              className="absolute hidden lg:block lg:left-[30rem] lg:bottom-[33rem] w-[1.5rem]"
            />
          </div>

          <div>
            <img
              src={star4}
              alt="/"
              className="absolute hidden lg:block  lg:right-[30rem] lg:bottom-[16rem] w-[1rem] lg:w-[1.7rem]"
            />
          </div>

          <div>
            <img
              src={star3}
              alt="/"
              className="absolute hidden lg:block lg:right-[25rem] lg:bottom-[48rem] w-[1rem] lg:w-[1.7rem]"
            />
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default ContactCongratsModal;
