import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Components/Navbar/navabar";
import Proto1 from "./assets/blogimage1.avif";
import Proto2 from "./assets/blogimage2.avif";
import Proto3 from "./assets/blogimage3.avif";
import Proto4 from "./assets/cyber1 (1).jpg";
import Proto5 from "./assets/cyber1 (2).jpg";
import Proto6 from "./assets/cyber1 (3).jpg";
import Proto7 from "./assets/cyber1 (4).jpg";
import Proto8 from "./assets/cyber1 (5).jpg";
import Cert1 from "./assets/oscp.png";
import Cert2 from "./assets/ccnp_security.png";
import Cert3 from "./assets/ccna_600.png";
import Cert4 from "./assets/aws saa.png";
import Cert5 from "./assets/aws-dva.png";
import Cert6 from "./assets/NSE-4-badge-2.png";
import Proj1 from "./assets/project4.jpg";
import Proj2 from "./assets/project2.png";
import Proj3 from "./assets/project3.png";
import Test1 from "./assets/test.svg";
import Test2 from "./assets/test2.svg";
import Test3 from "./assets/test3.svg";
import Test4 from "./assets/test4.svg";
import Exp1 from "./assets/exp3.jpg";
import Exp2 from "./assets/exp2.jpeg";
import Exp3 from "./assets/exp1.jpeg";
import { Button, ButtonBox } from "./Components/Button/button";

function App() {
  const productRef = useRef(null);
  const navigate = useNavigate();
  const [expertState, setExpertState] = useState(0);

  const changeExpertState = (value) => {
    setExpertState(value);
  };
  const categoryObj = [
    {
      imgUrl: Proto1,
      url: "/blog",
      text: "Over-Engineering my Storage",
    },
    {
      imgUrl: Proto2,
      url: "/blog",
      text: "Red-Team Capstone Challenge",
    },
    {
      imgUrl: Proto3,
      url: "/blog",
      text: "Weaponization Techniques",
    },
  ];

  const expertise = [
    {
      imgUrl: Test2,
      url: "/blog",
      text: "Security",
    },
    {
      imgUrl: Test1,
      url: "/blog",
      text: "Software",
    },
    {
      imgUrl: Test3,
      url: "/blog",
      text: "Cloud",
    },
    {
      imgUrl: Test4,
      url: "/blog",
      text: "Network",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="h-[340px] md:h-[500px] lg:h-[700px] xl:h-[800px] bg-black flex justify-center items-center ">
        <h1 className="max-w-[90%] 2xl:max-w-[70%] mx-auto font-bignote text-[43px] md:text-[85px] lg:text-[100px] 2xl:text-[125px] lg:leading-[150px] text-white text-left font-bold">
          Think like an attacker, Build like a defender.
        </h1>
      </div>
      <div className=" ">
        {/* section 2  */}
        <>
          <div className="py-20 max-w-[90%]  2xl:max-w-[70%] mx-auto">
            <div>
              <h1 className=" font-smalltech font-bold text-left text-[25px] md:text-[35px] py-4">
                Toyosi Usman is a security +<br></br>software engineer.
              </h1>
              <h1 className=" text-left font-smalltech text-[18px] leading-8 md:leading-10 md:text-[30px] pb-6 lg:max-w-[90%] xl:max-w-[70%]">
                I am that BlackTechieGirl, a title that signifies my immense
                passion for technology. I am a highly determined and dedicated
                individual and my primary drive is growth. I would always put in
                my best to make sure that today is better than yesterday.
                Software is powerful.
              </h1>
            </div>
            <div className=" grid grid-cols-2 gap-5 lg:gap-20 my-10 md:max-w-[80%] xl:max-w-[50%]">
              <button className="font-smalltech md:text-[20px] text-gray  py-2 md:py-4 border  hover:border-2 border-black duration-300 ease-in  ">
                Contact Me
              </button>
              <button className="font-smalltech md:text-[20px] text-gray  py-2 md:py-4 border border-gray-400 hover:border-2   duration-300 ease-in  ">
                Learn More
              </button>
            </div>
          </div>

          {/* section 3  */}
          <div className=" pt-5 bg-slate-100 py-[100px] ">
            <div className="max-w-[90%] 2xl:max-w-[70%] mx-auto ">
              <div className="lg:max-w-[60%] font-smalltech text-[17px] md:text-[22px]  flex py-[50px]">
                {expertise.map((item, index) => {
                  return (
                    <p
                      onClick={() => changeExpertState(index)}
                      className={
                        expertState === index
                          ? "border-b-4 pb-2 border-indigo-500 mr-5 md:mr-20 px-2 cursor-pointer"
                          : "mr-5 md:mr-20 px-2 duration-300 ease-in cursor-pointer"
                      }
                    >
                      {item.text}{" "}
                    </p>
                  );
                })}
              </div>

              <div className="lg:flex text-center lg:text-left ">
                <div className="lg:max-w-[50%]">
                  <p className="font-bignote text-[20px] md:text-[25px] pt-10 pb-5 hidden md:block">
                    Expertise
                  </p>

                  <p className="font-bignote text-[40px] md:text-[60px] pb-10 md:leading-[70px]">
                    {expertise[expertState].text} <br></br> Engineering
                  </p>
                  <div className=" lg:hidden flex items-center justify-center mb-6">
                    <img src={expertise[expertState].imgUrl} />
                  </div>

                  <h1 className=" text-center pb-6 text-[18px] leading-8 md: md:text-[25px] font-smalltech md:leading-[35px]">
                    {expertise[expertState].text} is powerful. It determines how
                    we experience life, and the ways we connect, communicate,
                    and learn. That’s why great design is about more than just
                    beauty or delight.That’s why great design is about more than
                    just beauty or delight.
                  </h1>
                  <div className=" grid grid-cols-2 lg:gap-20  lg:max-w-[80%] mt-10 ">
                    <Button text="View Projects" />
                    <ButtonBox text="View Articles" />
                  </div>
                </div>
                <img
                  src={expertise[expertState].imgUrl}
                  className="min-w-[45%] ml-40 hidden lg:block"
                />
              </div>
            </div>
          </div>

          {/* certification section   */}
          <div className="">
            <div className=" max-w-[90%]  2xl:max-w-[70%] mx-auto">
              <div className="my-16 lg:my-32">
                <h1 className="border-y font-bold text-xl lg:text-4xl text-center font-smalltech py-4 ">
                  CERTIFICATIONS AND QUALIFICATIONS
                </h1>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-6 ">
                <img src={Cert1} className="lg:max-w-[200px]" />
                <img src={Cert2} className="lg:max-w-[200px]" />
                <img src={Cert3} className="lg:max-w-[200px]" />
                <img src={Cert4} className="lg:max-w-[200px]" />
                <img src={Cert5} className="lg:max-w-[200px]" />
                <img src={Cert6} className="lg:max-w-[200px]" />
              </div>
              <div className="flex justify-center mt-20">
                  <ButtonBox text="View Certificates" />
                </div>
            </div>
          </div>
          {/* projects section   */}

          <div className=" max-w-[90%]  2xl:max-w-[70%] mx-auto">
            <div className="my-16 lg:my-32">
              <h1 className="border-y font-bold text-xl lg:text-4xl text-center mb-16 font-smalltech py-4">
                PROJECTS
              </h1>
            </div>

            <div className="grid lg:grid-cols-3 gap-10 mb-[120px] text-center">
              <div>
                <img src={Proj1} className="lg:min-h-[300px]" />
                <p className="font-bignote mt-8 mb-3 text-[18px] lg:text-[20px]">
                  Vulnerability Scanner
                </p>
                <p className="font-smalltech text-[18px] lg:text-[20px]">
                  This vulnerability scanner provides in-depth insight on the
                  state of a security infrastructure
                </p>
                <div className="flex justify-center mt-4 lg:mt-10">
                  <ButtonBox text="View Project" />
                </div>
              </div>
              <div>
                <img src={Proj2} className="lg:min-h-[300px]" />
                <p className="font-bignote mt-8 mb-3 text-[18px] lg:text-[20px]">
                  Assets Management Tool
                </p>
                <p className="font-smalltech text-[18px] lg:text-[20px]">
                  Get your assets under control with this cloud-based asset
                  management and tracking platform.
                </p>
                <div className="flex justify-center mt-4 lg:mt-10">
                  <ButtonBox text="View Project" />
                </div>
              </div>
              <div>
                <img src={Proj3} className="lg:min-h-[300px]" />
                <p className="font-bignote mt-8 mb-3 text-[18px] lg:text-[20px]">
                  Incident Response Tool
                </p>
                <p className="font-smalltech text-[18px] lg:text-[20px]">
                  This tool helps you Effectively & Efficiently Respond To
                  Breaches Against Cyberattacks
                </p>
                <div className="flex justify-center mt-4 lg:mt-10">
                  <ButtonBox text="View Project" />
                </div>
              </div>
            </div>
          </div>

          {/* Video section   */}

          <div className=" max-w-[90%]  2xl:max-w-[70%] mx-auto">
            <div className="my-16 lg:my-32">
              <h1 className="border-y font-bold text-xl lg:text-4xl text-center mb-16 font-smalltech py-4">
                VIDEOS
              </h1>
            </div>

            <div className="grid lg:grid-cols-3 gap-10">
              <div>
                <iframe
                  width="360"
                  height="315"
                  src="https://www.youtube.com/embed/jRWNRJlqMqE"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
                <p className="font-bignote mt-8 mb-3 text-[20px]">
                  BlackTechieGirl's Introduction
                </p>
                <p className="font-smalltech text-[20px]">
                  In this vidoe I introduced myself and discussed my goals and
                  ambitions.
                </p>
              </div>
              <div>
                <iframe
                  width="360"
                  height="315"
                  src="https://www.youtube.com/embed/lh-0wPmVT2k"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
                <p className="font-bignote mt-8 mb-3 text-[20px]">
                  Understanding TCP/IP Communication
                </p>
                <p className="font-smalltech text-[20px]">
                  In this vidoe I gave great detail on the TCP/IP communication
                  process.
                </p>
              </div>
              <div>
                <iframe
                  width="360"
                  height="315"
                  src="https://www.youtube.com/embed/lh-0wPmVT2k"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
                <p className="font-bignote mt-8 mb-3 text-[20px]">
                  Latest AWS Security Features
                </p>
                <p className="font-smalltech text-[20px]">
                  In this vidoe I discussed some of the latest AWS Security
                  Features.
                </p>
              </div>
            </div>

            <div className="flex justify-center my-10">
              <div className="flex justify-center mt-10">
                <ButtonBox text="View Youtube Channel" />
              </div>
            </div>
          </div>
          {/* Experience section   */}

          <div className=" max-w-[90%]  2xl:max-w-[70%] mx-auto ">
            <div className="my-16 lg:my-32">
              <h1 className="border-y font-bold text-xl lg:text-4xl text-center mb-16 font-smalltech py-4 mb-20 mt-20 ">
                EXPERIENCE GALLERY
              </h1>
            </div>

            <div className="grid lg:grid-cols-3">
              <div>
                <img src={Exp1} className="w-[400px] lg:h-[300px]" />
                <p className="font-bignote my-4 lg:mt-8 lg:mb-3 text-[20px]">
                  Open Source Festival 2022
                </p>
              </div>
              <div>
                <img src={Exp2} className="w-[400px] lg:h-[300px]" />
                <p className="font-bignote my-4 lg:mt-8 lg:mb-3 text-[20px]">
                  She Codes Software Hackhaton 2020
                </p>
              </div>
              <div>
                <img src={Exp3} className="w-[400px] lg:h-[300px]" />
                <p className="font-bignote mt-8 mb-3 text-[20px]">
                  Esentry Cybersecurity Hackhaton 2021
                </p>
              </div>
            </div>
            <div className="flex justify-center my-10">
              <ButtonBox text="View More Pictures" />
            </div>
          </div>

          {/* Blog section   */}
          <div className="max-w-[90%]  2xl:max-w-[70%] mx-auto mb-20">
            <div className="my-16 lg:my-32">
              <h1 className="border-y font-bold text-xl lg:text-4xl text-center mb-16 font-smalltech py-4 mb-20 mt-20">
                GET UPDATED WITH MY LATEST BLOGS
              </h1>
            </div>

            <div
              ref={productRef}
              class=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 duration-700 ease-in"
            >
              {categoryObj.map((item, index) => {
                return (
                  <div className="relative">
                    <img
                      src={item.imgUrl}
                      alt="product "
                      className="h-[300px] w-full object-cover object-top cursor-pointer "
                      onClick={() => navigate(item.url)}
                    />
                    <div className=" top-[50%] w-full">
                      <button
                        className="   pt-4"
                        // onClick={() => navigate(item.url)}
                        // className="font-smalltech hover:font-bigtech text-lg  hover:border-[#d6a419] text-gray my-6 min-w-[200px] border sm:border-2 p-2 2xl:p-4 hover:bg-white  duration-300 ease-in w-[50%] mx-auto"
                      >
                        <h1 className="lg:text-xl font-bignote">{item.text}</h1>
                      </button>
                      <p className="font-smalltech md:text-[18px] lg:text-[20px] ">
                        I think the first realisation that I was getting old was
                        when I implemented a system to store physical
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-center my-10">
              <div className="flex justify-center mt-10">
                <ButtonBox text="Visit Blog Page" />
              </div>
            </div>
          </div>
        </>
      </div>

      <div className="bg-black">
        <div>
          <div className="  border-t pt-16 border-[#efebe8] font-smalltech backgrounD-[#f5f5f5] md:grid md:grid-cols-10 w-[90%] 2xl:w-[80%] mx-auto mt-36 text-lg text-white">
            <div className="col-span-4">
              <p className="font-bignote text-3xl mb-3">Black.</p>
              <p className="leading-7">
                Black is the number one beauty ecommerce store<br></br> and an
                official stocklist of over 50 leading beauty brands.
              </p>
              <p className="leading-7">
                Your one stop shop to all your beauty needs.
              </p>
              <p className="leading-7">
                Let's help you redefine, You deserve a flawless skin.
              </p>
            </div>
            <div className="md:col-span-2 flex md:justify-center my-5">
              <ul>
                <li>
                  <b>INFORMATION</b>
                </li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
                <li>Terms and Condition</li>
                <li>Terms and Condition</li>
              </ul>
            </div>
            <div className="md:col-span-2 flex md:justify-center my-5">
              <ul>
                <li>
                  <b>MY ACCOUNT</b>
                </li>
                <li>Account</li>
                <li>My Cart</li>
                <li>My Wishlist</li>
                <li>Checkout</li>
                <li>Returns and Refunds</li>
              </ul>
            </div>
            <div className="md:col-span-2 flex md:justify-center my-5">
              <ul>
                <li>
                  <b>CONTACT</b>
                </li>
                <li>Newsletter</li>
                <li>Stores</li>
                <li>Privacy Policy</li>
                <li>Terms and Condition</li>
              </ul>
            </div>
          </div>

          <p className="font-smalltech text-center text-white">
            Redefine© 2022. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
