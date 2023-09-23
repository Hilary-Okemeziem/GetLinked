import React, { useEffect, useState } from "react";
import star1 from "../images/starwhite.png";
import star2 from "../images/star.png";
import star3 from "../images/star pu.png";
import star4 from "../images/sata gra.png";
import purpleFlare from "../images/PurpleFlare2.png";
import purpleFlare2 from "../images/PurpleFlare.png";
import regImg from "../images/regImg.png";
import regBtnlong from "../images/regBtnlong.png";
import submitBtn from "../images/SubmitBtn.png";
import femoji from "../images/femoji.png";
import memoji from "../images/memoji.png";
import line from "../images/Line 9.png";
import Select from "react-select";
import { baseUrl } from "../utils/baseUrl";
import axios from "axios";
import { toast } from "react-toastify";
import FadeLoader from "react-spinners/FadeLoader";
import LoadingModal from "../utils/LoadingModal";
import CongratsModal from "../utils/CongratsModal";

const groupSize = [
  { value: 5, label: "5" },
  { value: 10, label: "10" },
  { value: 15, label: "15" },
  { value: 20, label: "20" },
];

const RegisterPage = () => {
  const [options, setOptions] = useState([""]);
  const [itsloading, setItsloading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [checked, setChecked] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  const handleChecked = () => {
    setChecked(!checked);
  };

  const styles = {
    control: (styles, state) => ({
      ...styles,
      backgroundColor: "white",
      height: "3rem",
      paddingLeft: "1rem",
      paddingRight: "1rem",
      marginTop: "0.5rem",
      borderWidth: "2px",
      borderColor: "#D434FE",
      outline: "2px solid transparent",
      outlineOffset: "2px",
      borderRadius: "0.375rem",
      transitionDuration: "200ms",
      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    }),
  };

  const url = `${baseUrl}/hackathon/categories-list`;

  useEffect(() => {
    const getData = async () => {
      const arr = [];
      setItsloading(true);
      await axios.get(url).then((res) => {
        let result = res.data;
        console.log(result);
        result.map((category) => {
          return arr.push({
            value: category.id,
            label: category.name,
          });
        });
        setOptions(arr);
      });
      setItsloading(false);
    };
    getData();
  }, [url]);

  const [values, setValues] = useState({
    team_name: "",
    phone_number: "",
    email: "",
    project_topic: "",
  });

  const handleChange = (e) => {
    const newObj = { ...values, [e.target.name]: e.target.value };
    setValues(newObj);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios
        .post(
          `${baseUrl}/hackathon/registration`,
          {
            team_name: values.team_name,
            phone_number: values.phone_number,
            email: values.email,
            project_topic: values.project_topic,
            category: selectedCategory.value,
            group_size: selectedGroup.value,
            privacy_poclicy_accepted: checked,
          },
          setLoading(true)
        )
        .then((response) => {
          // console.log(response.data);
          if (response.status === 201) {
            setLoading(false);
            // console.log('success');
            toast.success(`Registration Successful!`, {
              position: "top-right",
            });
            setIsOpen(true);
            document.getElementById("reg-form").reset();
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

  const Loading = () => {
    return (
      <div className="flex flex-wrap items-center justify-center h-screen">
        <FadeLoader color={"#FFF"} loading={itsloading} size={150} />
        <p className="text-2xl ">Loading...</p>
      </div>
    );
  };

  function closeLoadingModal() {
    setLoading(false);
  }

  return (
    <div className="pt-[5rem] relative">
      {itsloading ? (
        <Loading />
      ) : (
        <div className="w-full h-full px-4 lg:px-16 max-w-[1240px] mx-auto py-9 relative">
          <h4 className="lg:hidden block py-2 text-xl text-[#D434FE]">
            Register
          </h4>
          <div className="flex flex-col lg:flex-row items-center justify-center py-3 text-sm">
            <div>
              <img src={regImg} alt="" />
            </div>

            <div>
              <div className="rounded-lg lg:shadow-lg bg-transparent lg:bg-white/5 py-6 px-4 lg:px-9 my-9 w-[350px] lg:w-[650px] max-w-[800px]">
                <div>
                  <div className="py-2">
                    <h4 className="hidden lg:block py-2 text-xl text-[#D434FE]">
                      Register
                    </h4>

                    <div className="relative pb-3">
                      <div className=" flex items-center gap-2">
                        <div>
                          <p className="mt-3">Be part of this movement!</p>
                        </div>
                        <div>
                          <img src={femoji} alt="" />
                        </div>
                        <div>
                          <img src={memoji} alt="" />
                        </div>
                      </div>
                      <div>
                        <img
                          src={line}
                          alt=""
                          className="absolute right-6 lg:right-[18rem]"
                        />
                      </div>
                    </div>

                    <div>
                      <h2 className="text-xl lg:text-2xl uppercase py-2">
                        Create your account
                      </h2>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} id="reg-form">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-8 py-4">
                      <div>
                        <label>Team's Name</label>
                        <input
                          type="text"
                          name="team_name"
                          onChange={handleChange}
                          required
                          className="h-12 w-full  border-2 rounded-md border-[#D434FE] focus:border-[#D434FE] bg-white px-6 mt-2 text-black"
                          placeholder="Enter the name of your group"
                        />
                      </div>

                      <div>
                        <label>Phone</label>
                        <input
                          type="tel"
                          name="phone_number"
                          onChange={handleChange}
                          required
                          className="h-12 w-full border-[#D434FE] focus:border-[#D434FE] bg-white border-2 rounded-md px-6 mt-2 text-black"
                          placeholder="Enter the phone number"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2  items-center justify-between gap-8 py-2">
                      <div>
                        <label>Email</label>
                        <input
                          type="email"
                          name="email"
                          onChange={handleChange}
                          required
                          className="h-12 w-full border-2 rounded-md border-[#D434FE] focus:border-[#D434FE] bg-white px-6 mt-2 text-black"
                          placeholder="Enter your email address"
                        />
                      </div>

                      <div>
                        <label>Project Topic</label>
                        <input
                          type="text"
                          name="project_topic"
                          onChange={handleChange}
                          required
                          className="h-12 w-full border-2 rounded-md border-[#D434FE] focus:border-[#D434FE] bg-white px-6 mt-2 text-black"
                          placeholder="What is your group project topic"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 items-center justify-between gap-8 pt-6 lg:py-2 text-black">
                      <div>
                        <label className="text-white">Category</label>
                        <Select
                          defaultValue={selectedCategory}
                          onChange={setSelectedCategory}
                          options={options}
                          styles={styles}
                          placeholder="Select..."
                          required
                          theme={(theme) => ({
                            ...theme,
                            colors: {
                              ...theme.colors,
                              primary25: "grey",
                              primary: "#D434FE",
                            },
                          })}
                        />
                      </div>

                      <div>
                        <label className="text-white">Group Size</label>
                        <Select
                          defaultValue={selectedGroup}
                          onChange={setSelectedGroup}
                          options={groupSize}
                          styles={styles}
                          placeholder="Select..."
                          required
                          theme={(theme) => ({
                            ...theme,
                            colors: {
                              ...theme.colors,
                              primary25: "grey",
                              primary: "#D434FE",
                            },
                          })}
                        />
                      </div>
                    </div>

                    <div className="pt-4">
                      <p className="italic text-[#FF26B9]">
                        Please review your registration details before
                        submitting
                      </p>
                    </div>

                    <div className="py-4 flex gap-2">
                      <label>
                        <input
                          type="checkbox"
                          name="privacy_poclicy_accepted"
                          onChange={handleChecked}
                          value={checked}
                          required
                        />
                        I agreed with the event terms and conditions and privacy
                        policy
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="hidden lg:flex items-center justify-center"
                    >
                      <img src={regBtnlong} alt="" className="w-[50rem]" />
                    </button>

                    <button
                      type="submit"
                      className="flex lg:hidden items-center justify-center pt-2"
                    >
                      <img src={submitBtn} alt="" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div>
            <img
              src={star1}
              alt="/"
              className="absolute hidden lg:block lg:right-[8rem] lg:bottom-[3rem] w-[1rem] lg:w-[1rem] animate__animated animate__rollIn"
            />
          </div>

          <div>
            <img
              src={star2}
              alt="/"
              className="absolute right-[22rem] top-[40rem] lg:right-[12rem] lg:top-[8rem] w-[1.2rem] animate__animated animate__rollIn"
            />
          </div>

          <div>
            <img
              src={star2}
              alt="/"
              className="absolute hidden lg:block lg:left-0 lg:bottom-[5rem] w-[1.5rem] animate__animated animate__rollIn"
            />
          </div>

          <div>
            <img
              src={star3}
              alt="/"
              className="absolute  right-7 bottom-[23rem] lg:right-[46rem] lg:bottom-[14rem] w-[1rem] lg:w-[1.7rem] animate__animated animate__rollIn"
            />
          </div>

          <div>
            <img
              src={star4}
              alt="/"
              className="absolute left-[20rem] top-[17rem] w-[0.8rem] lg:left-[12rem] lg:top-[7rem] lg:w-[1.2rem] animate__animated animate__rollIn"
            />
          </div>
        </div>
      )}

      <div>
        <img
          src={purpleFlare}
          alt="/"
          className="absolute top-[5rem] left-0 md:top-1 lg:top-0 lg:left-0 lg:h-[35rem] -z-50 animate__animated animate__rollIn"
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

      {isOpen ? <CongratsModal closeModal={closeModal} isOpen={isOpen} /> : ""}
    </div>
  );
};

export default RegisterPage;
