import React from "react";
import Navbar from "../Navbar/navabar";
import Me from "../../../src/assets/aminat.jpg";
import { useEffect } from "react";
import FaYoutube from "../../assets/Youtube.png";
import FaLinkedIn from "../../assets/linkedin.png";
import FaTwitter from "../../assets/twitter.webp";
import FaGithub from "../../assets/github.png";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />

      <div className=" ">
        {/* section 2  */}
        <div className="bg-gray-200  ">
          <div className=" duration-700 max-w-[90%]  2xl:max-w-[70%] mx-auto lg:grid lg:grid-cols-2 py-20">
            <div className="lg:max-w-[90%] pt-10 lg:pt-32">
              <h1 className=" font-smalltech font-bold text-left  text-[75px] lg:text-[100px] md:text-[35px] lg:py-4">
                {/* Toyosi Usman is a security +<br></br>software engineer. */}
                So who am I ?
              </h1>

              <div className="my-10 flex   lg:hidden">
                <img src={Me} className="max-h-[350px] lg:max-h-[700px] w-full object-cover object-top"  />
              </div>
              <h1 className=" text-left font-smalltech text-[18px] leading-10 md:text-[22px] pb-6">
                <p>
                  I am that Black Techie, a title that signifies my immense
                  passion for technology. I am a highly determined and dedicated
                  individual and my primary drive is growth. My expertise
                  encompasses penetration testing,vulnerability management,
                  security development, threat modeling, and secure coding, all
                  driven by a commitment to continuous learning and professional
                  excellence.
                </p>

                <p>{""}</p>

                {/* <p>
                  
                With over three years of experience in Application Security Engineering, I possess a strong track record of building reliable and secure applications. I develop secure applications by thinking like an attacker and building like a defender. With multiple cybersecurity certifications, I bring deep technical expertise to the table.
                I am an advocate for synergy, a co-creator in projects that redefine norms. Together, we possess the power to shape the future of technology. Let's Connect and Ignite Transformation ✨🚀
                </p> */}

                <div className="flex justify-between mt-4">
                  <div className="flex items-center cursor-pointer">
                    <img src={FaYoutube} className="md:w-6 md:h-6  w-5 h-5 " />
                    <a
                      href="https://www.youtube.com/@user-rr1vx4vc8s"
                      className="mx-1 md:mx-3 underline underline-offset-2 unde text-gray-600 align-text-top"
                    >
                      Youtube
                    </a>
                  </div>
                  <div className="flex items-center cursor-pointer">
                    <img src={FaLinkedIn} className="w-6 h-6" />
                    <a
                      href="https://www.linkedin.com/in/aminat-usman-5169b6173/"
                      className="mx-1 md:mx-3 underline underline-offset-2 unde text-gray-600 "
                    >
                      LinkedIn
                    </a>
                  </div>
                  <div className="flex items-center cursor-pointer">
                    <img src={FaGithub} className="w-6 h-6" />
                    <a
                      href="https://github.com/iamtoyosee"
                      className="mx-1 md:mx-3 underline underline-offset-2 unde text-gray-600 "
                    >
                      Github
                    </a>
                  </div>
                  <div className="flex items-center cursor-pointer">
                    <img src={FaTwitter} className="w-8 h-8" />
                    <a
                      href="https://x.com/BTG1011"
                      className="mx-1 md:mx-3 underline underline-offset-2 unde text-gray-600 "
                    >
                      Twitter
                    </a>
                  </div>
                  {/* <img src={FaGithub} className="w-8"/>
                <img src={FaTwitter} className="w-8"/> */}
                </div>
              </h1>
              <div className=" grid grid-cols-2 gap-5 lg:gap-20 my-6 max-w-[100%]">
                <button className="font-smalltech lg:text-[20px] text-white  py-2 lg:py-4 border  hover:border-2 bg-black duration-300 ease-in  ">
                  <a href="mailto:blacktechiegirl@gmail.com?subject=Contact%20Request">
                    Contact Me
                  </a>
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
