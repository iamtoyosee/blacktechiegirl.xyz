import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from './Components/Navbar/navabar';
import Proto1 from "./assets/blogimage1.avif";
import Proto2 from "./assets/blogimage2.avif";
import Proto3 from "./assets/blogimage3.avif";
import Proto4 from "./assets/cyber1 (1).jpg";
import Proto5 from "./assets/cyber1 (2).jpg";
import Proto6 from "./assets/cyber1 (3).jpg";
import Proto7 from "./assets/cyber1 (4).jpg";
import Proto8 from "./assets/cyber1 (5).jpg";
import Cert1 from "./assets/oscp.png"
import Cert2 from "./assets/ccnp_security.png"
import Cert3 from "./assets/ccna_600.png"
import Cert4 from "./assets/aws saa.png"
import Cert5 from "./assets/aws-dva.png"
import Cert6 from "./assets/NSE-4-badge-2.png"
import Proj1 from "./assets/project4.jpg"
import Proj2 from "./assets/project2.png"
import Proj3 from "./assets/project3.png"
import Test1 from "./assets/test.svg"
import Test2 from "./assets/test2.svg"
import Test3 from "./assets/test3.svg"
import Test4 from "./assets/test4.svg"
import Exp1 from "./assets/exp3.jpg"
import Exp2 from "./assets/exp2.jpeg"
import Exp3 from "./assets/exp1.jpeg"


function App() {
  const productRef = useRef(null);
  const navigate = useNavigate()
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
    // {
    //   imgUrl: Proto8,
    //   url: "/blog",
    //   text: "Building My DNS Scanner",
    // },
    // {
    //   imgUrl: Proto4,
    //   url: "/blog",
    //   text: "In-depth of a vulnerability scanner",
    // },
    // {
    //   imgUrl: Proto5,
    //   url: "/blog",
    //   text: "My favorite hacking techniques",
    // },
    // {
    //   imgUrl: Proto6,
    //   url: "/blog",
    //   text: "Building My DNS Scanner",
    // },
    // {
    //   imgUrl: Proto1,
    //   url: "/blog",
    //   text: "In-depth of a vulnerability scanner",
    // },
    // {
    //   imgUrl: Proto7,
    //   url: "/blog",
    //   text: "My favorite hacking techniques",
    // },
    // {
    //   imgUrl: Proto8,
    //   url: "/blog",
    //   text: "Over-Engineering my Document Storage",
    // },
    // {
    //   imgUrl: Proto2,
    //   url: "/blog",
    //   text: "Red-Team Capstone Challenge",
    // },
    // {
    //   imgUrl: Proto5,
    //   url: "/blog",
    //   text: "Weaponization Techniques",
    // },
  ];
  return (
    <div>
      <Navbar />
      <div className='h-[300px] md:h-[500px] lg:h-[700px]  xl:h-[800px] bg-black flex justify-center items-center md:px-4 lg:px-0'>
        <h1 className='max-w-[80%]  2xl:max-w-[70%] mx-auto font-bignote text-[45px] md:text-[85px] lg:text-[125px]   lg:leading-[150px] text-white text-left font-bold'>Think like an attacker, Build like a defender.</h1>
      </div>
      <div className=" ">

        {/* section 2  */}
        <>
          <div className=" duration-700 py-20 max-w-[80%]  2xl:max-w-[70%] mx-auto"
          >
            <div>

              <h1 className=" font-smalltech font-bold text-left  text-[30px] md:text-[35px] py-4">Toyosi Usman is a
                security +<br></br>software engineer.</h1>
              <h1 className=" text-left font-smalltech text-[20px] leading-10 md:text-[22px] pb-6 max-w-[70%]">
                I am that BlackTechieGirl, a title that signifies my immense passion for technology. I am a highly determined and dedicated individual and my primary drive is growth. I would always put in my best to make sure that today is better than yesterday. Software is powerful. It determines how we experience life, and the ways we connect, communicate, and learn.
              </h1></div>
            <div className=" grid grid-cols-2 gap-12  max-w-[40%]">
              <button
                // onClick={() => navigate(item.url)}
                className="font-bigtech text-lg text-gray border-gray-300 my-3 min-w-[200px] border sm:border-2 p-2 2xl:p-4 hover:bg-[#d6a419]  hover:text-white duration-300 ease-in  "
              >
                Contact Me
              </button>
              <button
                // onClick={() => navigate(item.url)}
                className="font-bigtech text-lg border-fuchsia-500 text-gray my-3 min-w-[200px] border sm:border-2 p-2 2xl:p-4 hover:bg-white  duration-300 ease-in"
              >
                Learn More
              </button>
            </div>


          </div>

          {/* section 3  */}
          <div className=" mb-5 pt-5 bg-slate-100">
            <div className="max-w-[80%] 2xl:max-w-[70%] mx-auto">
              <div className="max-w-[60%] font-smalltech text-[18px] font-bold grid grid-cols-4 gap-5 pt-10">
                <p>Security Engineering</p>
                <p>Software Engineering</p>
                <p>Cloud Engineering</p>
                <p>Networking Engineering</p>
              </div>
              <div className="flex  py-20">

                <div className="max-w-[50%]">
                  <p className="font-bignote text-[25px] pt-10 pb-5">Expertise</p>
                  <p className="font-bignote text-[60px] pb-10 leading-[70px]">Security <br></br> Engineering</p>
                  <h1 className=" text-left pb-6 text-[25px] font-smalltech leading-[35px]">
                    Security is powerful. It determines how we experience life, and the ways we connect, communicate, and learn. That’s why great design is about more than just beauty or delight.That’s why great design is about more than just beauty or delight. It’s defining the collective future of businesses, customers, and society – and doing it with intention
                  </h1>
                  <div className=" grid grid-cols-2 gap-12">
                    <button
                      // onClick={() => navigate(item.url)}
                      className="font-bigtech text-lg text-gray border-gray-300 my-3 min-w-[200px] border sm:border-2 p-2 2xl:p-4 hover:bg-fuchsia-300  hover:text-white duration-300 ease-in  "
                    >
                      View Projects
                    </button>
                    <button
                      // onClick={() => navigate(item.url)}
                      className="font-bigtech text-lg border-fuchsia-300 text-gray my-3 min-w-[200px] border sm:border-2 p-2 2xl:p-4 hover:bg-fuchsia-300 duration-300 ease-in"
                    >
                      View Articles
                    </button>
                  </div>
                </div>
                <img src={Test2} className="min-w-[45%] ml-10" />

              </div>

            </div>
            {/* <div className="">
              <div className="flex max-w-[80%] gap-10 2xl:max-w-[70%] mx-auto py-20">
                <img src={Test1} className="min-w-[45%] mr-20" />
                <div className="max-w-[50%]">
                  <p className="font-bignote text-[25px] pt-10 pb-5">Expertise</p>
                  <p className="font-bignote text-[60px] pb-10 leading-[70px]">Software <br></br> Engineering</p>
                  <h1 className=" text-left pb-6 text-[25px] font-smalltech leading-[35px]">
                    Software is powerful. It determines how we experience life, and the ways we connect, communicate, and learn. That’s why great design is about more than just beauty or delight.That’s why great design is about more than just beauty or delight. It’s defining the collective future of businesses, customers, and society – and doing it with intention
                  </h1>
                  <div className=" grid grid-cols-2 gap-12">
                    <button
                      // onClick={() => navigate(item.url)}
                      className="font-bigtech text-lg text-gray border-gray-300 my-3 min-w-[200px] border sm:border-2 p-2 2xl:p-4 hover:bg-fuchsia-300  hover:text-white duration-300 ease-in  "
                    >
                      View Projects
                    </button>
                    <button
                      // onClick={() => navigate(item.url)}
                      className="font-bigtech text-lg border-fuchsia-300 text-gray my-3 min-w-[200px] border sm:border-2 p-2 2xl:p-4 hover:bg-fuchsia-300 duration-300 ease-in"
                    >
                      View Articles
                    </button>
                  </div>
                </div>


              </div>

            </div>
            <div className="bg-slate-100">
              <div className="flex max-w-[80%] gap-10 2xl:max-w-[70%] mx-auto py-20">

                <div className="max-w-[50%]">
                  <p className="font-bignote text-[25px] pt-10 pb-5">Expertise</p>
                  <p className="font-bignote text-[60px] pb-10 leading-[70px]">Cloud <br></br> Engineering</p>
                  <h1 className=" text-left pb-6 text-[25px] font-smalltech leading-[35px]">
                    Cloud is powerful. It determines how we experience life, and the ways we connect, communicate, and learn. That’s why great design is about more than just beauty or delight.That’s why great design is about more than just beauty or delight. It’s defining the collective future of businesses, customers, and society – and doing it with intention
                  </h1>
                  <div className=" grid grid-cols-2 gap-12">
                    <button
                      // onClick={() => navigate(item.url)}
                      className="font-bigtech text-lg text-gray border-gray-300 my-3 min-w-[200px] border sm:border-2 p-2 2xl:p-4 hover:bg-fuchsia-300  hover:text-white duration-300 ease-in  "
                    >
                      View Projects
                    </button>
                    <button
                      // onClick={() => navigate(item.url)}
                      className="font-bigtech text-lg border-fuchsia-300 text-gray my-3 min-w-[200px] border sm:border-2 p-2 2xl:p-4 hover:bg-fuchsia-300 duration-300 ease-in"
                    >
                      View Articles
                    </button>
                  </div>
                </div>
                <img src={Test3} className="min-w-[45%] ml-10" />

              </div>

            </div>
            <div className="">
              <div className="flex max-w-[80%] gap-10 2xl:max-w-[70%] mx-auto py-20">
                <div className="flex justify-start min-w-[45%] mr-20">
                  <img src={Test4} className="" />
                </div>
                <div className="max-w-[60%]">
                  <p className="font-bignote text-[25px] pt-10 pb-5">Expertise</p>
                  <p className="font-bignote text-[60px] pb-10 leading-[70px]">Network <br></br> Engineering</p>
                  <h1 className=" text-left pb-6 text-[25px] font-smalltech leading-[35px]">
                    Network is powerful. It determines how we experience life, and the ways we connect, communicate, and learn. That’s why great design is about more than just beauty or delight.That’s why great design is about more than just beauty or delight. It’s defining the collective future of businesses, customers, and society – and doing it with intention
                  </h1>
                  <div className=" grid grid-cols-2 gap-12">
                    <button
                      // onClick={() => navigate(item.url)}
                      className="font-bigtech text-lg text-gray border-gray-300 my-3 min-w-[200px] border sm:border-2 p-2 2xl:p-4 hover:bg-fuchsia-300  hover:text-white duration-300 ease-in  "
                    >
                      View Projects
                    </button>
                    <button
                      // onClick={() => navigate(item.url)}
                      className="font-bigtech text-lg border-fuchsia-300 text-gray my-3 min-w-[200px] border sm:border-2 p-2 2xl:p-4 hover:bg-fuchsia-300 duration-300 ease-in"
                    >
                      View Articles
                    </button>
                  </div>
                </div>


              </div>

            </div> */}

            {/* <div className="bg-slate-200  ">

              <div className="grid grid-cols-2 py-10 max-w-[80%] gap-10 2xl:max-w-[70%] mx-auto"> */}

            {/* <img src={Proto6} className="max-w-[300px] max-h-[300px]" /> */}
            {/* <div className="">
                  <p className="font-popreg text-[30px] ">SECURITY ENGINEERING</p>
                  <h1 className=" text-left pb-6 text-[20px] font-lvreg">
                    Software is powerful. It determines how we experience life, and the ways we connect, communicate, and learn. That’s why great design is about more than just beauty or delight. It’s defining the collective future of businesses, customers, and society – and doing it with intention.
                  </h1>
                </div>
                <div>
                  <p className="font-popreg text-[30px] ">SOFTWARE DEVELOPMENT</p>
                  <h1 className=" text-left pb-6 text-[20px] font-lvreg">
                    Software is powerful. It determines how we experience life, and the ways we connect, communicate, and learn. That’s why great design is about more than just beauty or delight. It’s defining the collective future of businesses, customers, and society – and doing it with intention.
                  </h1>
                </div>

              </div>
            </div> */}
            {/* section 4  */}
            {/* <div className=" bg-slate-200 ">
            <div className="grid grid-cols-2 py-10 max-w-[80%]  2xl:max-w-[70%] mx-auto">
              
              <img src={Proto8} className="max-w-[300px] max-h-[300px] ml-[100px]" />
            </div>
          </div> */}
            {/* section 5  */}
            {/* <div className="bg-slate-200  ">
              <div className="grid grid-cols-2 py-10 max-w-[80%] gap-10 2xl:max-w-[70%] mx-auto"> */}

            {/* <img src={Proto7} className="max-w-[300px] max-h-[300px]" /> */}
            {/* <div className="">
                  <p className="font-popreg text-[30px] ">CLOUD ENGINEERING</p>
                  <h1 className=" text-left pb-6 text-[20px] font-lvreg">
                    Software is powerful. It determines how we experience life, and the ways we connect, communicate, and learn. That’s why great design is about more than just beauty or delight. It’s defining the collective future of businesses, customers, and society – and doing it with intention.
                  </h1>
                </div>
                <div className="">
                  <p className="font-popreg text-[30px] ">NETWORK ENGINEERING</p>
                  <h1 className=" text-left pb-6 text-[20px] font-lvreg">
                    Software is powerful. It determines how we experience life, and the ways we connect, communicate, and learn. That’s why great design is about more than just beauty or delight. It’s defining the collective future of businesses, customers, and society – and doing it with intention.
                  </h1>
                </div>

              </div>
            </div> */}
            {/* section 6  */}
            {/* <div className=" bg-slate-200 ">
            <div className="grid grid-cols-2 py-10 max-w-[80%]  2xl:max-w-[70%] mx-auto ">

              <div className="">
                <p className="font-popreg text-[30px] ">NETWORK ENGINEERING</p>
                <h1 className=" text-left pb-6 text-[20px] font-lvreg">
                  Software is powerful. It determines how we experience life, and the ways we connect, communicate, and learn. That’s why great design is about more than just beauty or delight. It’s defining the collective future of businesses, customers, and society – and doing it with intention.
                </h1>
              </div>
              <div className="max-w-[300px] max-h-[300px] flex justify-center ml-[100px]">
                <img src={Proto6} />
              </div>


            </div>
          </div> */}
          </div>


      
          {/* certification section   */}

          <div className="min-h-[500px] max-w-[80%]  2xl:max-w-[70%] mx-auto">
            <h1 className="border-y font-bold text-xl lg:text-4xl text-center mb-16 font-smalltech py-6">
              CERTIFICATIONS AND QUALIFICATIONS
            </h1>
            <div className="grid grid-cols-6">
              <img src={Cert1} className="max-w-[200px]" />
              <img src={Cert2} className="max-w-[200px]" />
              <img src={Cert3} className="max-w-[200px]" />
              <img src={Cert4} className="max-w-[200px]" />
              <img src={Cert5} className="max-w-[200px]" />
              <img src={Cert6} className="max-w-[200px]" />
            </div>
          </div>
          {/* projects section   */}
          <div className="min-h-[500px] max-w-[80%]  2xl:max-w-[70%] mx-auto">
            <h1 className="border-y font-bold text-xl lg:text-4xl text-center mb-16 font-smalltech py-4">
              PROJECTS
            </h1>
            <div className="grid grid-cols-3 gap-10 mb-[120px] text-center">
              <div>
                <img src={Proj1} className="min-h-[300px]" />
                <p className="font-bignote mt-8 mb-3 text-[20px]">Vulnerability Scanner</p>
                <p className="font-smalltech text-[20px]">This vulnerability scanner provides in-depth insight on the state of a security infrastructure</p>
                <div className="flex justify-center">
                  <button
                    // onClick={() => navigate(item.url)}
                    className="mt-5 font-bigtech text-lg text-gray border-fuchsia-300 my-3 min-w-[200px] border sm:border-2 p-2 2xl:p-2 hover:bg-fuchsia-300  hover:text-white duration-300 ease-in  "
                  >
                    View Project
                  </button>
                </div>

              </div>
              <div>
                <img src={Proj2} className="min-h-[300px]" />
                <p className="font-bignote mt-8 mb-3 text-[20px]">Assets Management Tool</p>
                <p className="font-smalltech text-[20px]">Get your assets under control with this cloud-based asset management and tracking platform.

                </p>
                <button
                  // onClick={() => navigate(item.url)}
                  className="mt-5 font-bigtech text-lg text-gray border-fuchsia-300 my-3 min-w-[200px] border sm:border-2 p-2 2xl:p-2 hover:bg-fuchsia-300  hover:text-white duration-300 ease-in  "
                >
                  View Project
                </button>
              </div>
              <div>
                <img src={Proj3} className="min-h-[300px]" />
                <p className="font-bignote mt-8 mb-3 text-[20px]">Incident Response Tool</p>
                <p className="font-smalltech text-[20px]">This tool helps you Effectively & Efficiently Respond To Breaches Against Cyberattacks</p>
                <button
                  // onClick={() => navigate(item.url)}
                  className="mt-5 font-bigtech text-lg text-gray border-fuchsia-300 my-3 min-w-[200px] border sm:border-2 p-2 2xl:p-2 hover:bg-fuchsia-300  hover:text-white duration-300 ease-in  "
                >
                  View Project
                </button>
              </div>


            </div>
          </div>

          {/* Video section   */}

          <div className="min-h-[500px] max-w-[80%]  2xl:max-w-[70%] mx-auto">
            <h1 className="border-y font-bold text-xl lg:text-4xl text-center mb-16 font-smalltech py-4">
              VIDEOS
            </h1>
            <div className="grid grid-cols-3 gap-10">
              <div>
                <iframe width="400" height="315" src="https://www.youtube.com/embed/jRWNRJlqMqE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <p className="font-bignote mt-8 mb-3 text-[20px]">BlackTechieGirl's Introduction</p>
                <p className="font-smalltech text-[20px]">In this vidoe I introduced myself and discussed my goals and ambitions.</p>


              </div>
              <div>
                <iframe width="400" height="315" src="https://www.youtube.com/embed/lh-0wPmVT2k" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <p className="font-bignote mt-8 mb-3 text-[20px]">Understanding TCP/IP Communication</p>
                <p className="font-smalltech text-[20px]">In this vidoe I gave great detail on the TCP/IP communication process.</p>

              </div>
              <div>
                <iframe width="400" height="315" src="https://www.youtube.com/embed/lh-0wPmVT2k" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <p className="font-bignote mt-8 mb-3 text-[20px]">Latest AWS Security Features</p>
                <p className="font-smalltech text-[20px]">In this vidoe I discussed some of the latest AWS Security Features.</p>

              </div>

            </div>

            <div className="flex justify-center my-10">
              <button
                // onClick={() => navigate(item.url)}
                className="mt-5 font-smalltech text-[20px] text-gray border-fuchsia-300 my-3 min-w-[300px] border sm:border-2 p-2 2xl:p-4 px-8 hover:bg-fuchsia-300  hover:text-white duration-300 ease-in  "
              >
                Visit Youtube Channel
              </button>
            </div>
          </div>
          {/* Experience section   */}

          <div className="min-h-[500px] max-w-[80%]  2xl:max-w-[70%] mx-auto">
            <h1 className="border-y font-bold text-xl lg:text-4xl text-center mb-16 font-smalltech py-4">
              EXPERIENCE GALLERY
            </h1>
            <div className="grid grid-cols-3">
              <div>
                <img src={Exp1} className="w-[400px] h-[300px]" />
                <p className="font-bignote mt-8 mb-3 text-[20px]">Open Source Festival 2022</p>
              </div>
              <div>
                <img src={Exp2} className="w-[400px] h-[300px]" />
                <p className="font-bignote mt-8 mb-3 text-[20px]">She Codes Software Hackhaton 2020</p>
              </div>
              <div>
                <img src={Exp3} className="w-[400px] h-[300px]" />
                <p className="font-bignote mt-8 mb-3 text-[20px]">Esentry Cybersecurity Hackhaton 2021</p>
              </div>


            </div>
            <div className="flex justify-center my-10">
              <button
                // onClick={() => navigate(item.url)}
                className="mt-5 font-smalltech text-[20px] text-gray border-x-indigo-500 border-y-fuchsia-500  my-3 min-w-[300px] border sm:border-2 p-2 2xl:p-4 px-8 hover:bg-gradient-to-r from-indigo-800 via-purple-800 to-fuchsia-600 hover:border-0  hover:text-white duration-300 ease-in  "
              >
                View More Pictures
              </button>
            </div>
          </div>
          <div className="max-w-[80%]  2xl:max-w-[70%] mx-auto mb-20">
            <h1 className="border-y font-bold text-xl lg:text-4xl text-center mb-16 font-smalltech py-4">
              GET UPDATED WITH MY LATEST BLOGS
            </h1>
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
                        <h1 className="text-xl font-bignote">{item.text}</h1>
                      </button>
                      <p className="font-smalltech text-[20px] ">I think the first realisation that I was getting old was when I implemented a system to store physical</p>
                    </div>
                  </div>

                );
              })}
            </div>
            <div className="flex justify-center my-10">
              <button
                // onClick={() => navigate(item.url)}
                className="mt-5 font-smalltech text-[20px] text-gray border-fuchsia-300 my-3 min-w-[300px] border sm:border-2 p-2 2xl:p-4 px-8 hover:bg-fuchsia-300  hover:text-white duration-300 ease-in  "
              >
                Visit Blog Page
              </button>
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
        <p className="leading-7">Your one stop shop to all your beauty needs.</p>
        <p className="leading-7">Let's help you redefine, You deserve a flawless skin.</p>
      </div>
      <div className="md:col-span-2 flex md:justify-center my-5">
        <ul>
          <li><b>INFORMATION</b></li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Privacy Policy</li>
          <li>Terms and Condition</li>
          <li>Terms and Condition</li>
        </ul>
      </div>
      <div className="md:col-span-2 flex md:justify-center my-5">
        <ul>
          <li><b>MY ACCOUNT</b></li>
          <li>Account</li>
          <li>My Cart</li>
          <li>My Wishlist</li>
          <li>Checkout</li>
          <li>Returns and Refunds</li>
        </ul>
      </div>
      <div className="md:col-span-2 flex md:justify-center my-5">
        <ul>
          <li><b>CONTACT</b></li>
          <li>Newsletter</li>
          <li>Stores</li>
          <li>Privacy Policy</li>
          <li>Terms and Condition</li>
        </ul>
      </div>
    </div>
   
    <p className="font-smalltech text-center text-white py-10">Redefine© 2022. All Rights Reserved.</p>

        </div>
 
    </div>
    </div>
  );
}

export default App;
