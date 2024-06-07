import React from "react";
import Navbar from "../Navbar/navabar";
import Me from "../../../src/assets/aminat.jpg";
import { useEffect } from "react";

const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Navbar />

      <div className=" ">
        {/* section 2  */}
        <div className="bg-gray-200  ">
          <div className=" duration-700 max-w-[90%]  2xl:max-w-[70%] mx-auto lg:grid lg:grid-cols-2 py-20">
            <div className="lg:max-w-[90%] pt-10 lg:pt-20">
              <h1 className=" font-smalltech font-bold text-left  text-[25px] lg:text-[30px] md:text-[35px] lg:py-4">
                Toyosi Usman is a security +<br></br>software engineer.
              </h1>
              <div className="my-10 flex   lg:hidden">
                <img src={Me} className="max-h-[700px]" />
              </div>
              <h1 className=" text-left font-smalltech text-[18px] leading-10 md:text-[22px] pb-6">
                <p>
                  I am that BlackTechieGirl, a title that signifies my immense
                  passion for technology. I am a highly determined and dedicated
                  individual and my primary drive is growth.My expertise encompasses penetration testing,vulnerability management, security development, threat modeling, and secure coding, all driven by a commitment to continuous learning and professional excellence.</p>                
                  <p>
                  {" "}
                  Software is powerful. It determines how we experience life,
                  and the ways we connect, communicate, and learn. I would
                  always put in my best to make sure that today is better than
                  yesterday.{" "}
                </p>

                <p>
                  Software is powerful. It determines how we experience life,
                  and the ways we connect, communicate, and learn. we are going
                  to focus on the features present on the tabs in the upper
                  bar.Let's start with the Proxy too
                </p>
              </h1>
              <div className=" grid grid-cols-2 gap-5 lg:gap-20 my-10 max-w-[100%]">
                <button className="font-smalltech lg:text-[20px] text-gray  py-2 lg:py-4 border  hover:border-2 border-black duration-300 ease-in  ">
                  Contact Me
                </button>
                <button className="font-smalltech lg:text-[20px] text-gray  py-2 lg:py-4  border border-gray-400 hover:border-2   duration-300 ease-in  ">
                  Learn More
                </button>
              </div>
            </div>
            <div className="my-20 flex justify-end  hidden lg:flex">
              <img src={Me} className="max-h-[700px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
