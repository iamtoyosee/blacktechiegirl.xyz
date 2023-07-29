import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar/navabar';
import Proto1 from "./assets/blogimage1.avif";
import Proto2 from "./assets/blogimage2.avif";
import Proto3 from "./assets/blogimage3.avif";
import Proto4 from "./assets/cyber1 (1).jpg";
import Proto5 from "./assets/cyber1 (2).jpg";
import Proto6 from "./assets/cyber1 (3).jpg";
import Proto7 from "./assets/cyber1 (4).jpg";
import Proto8 from "./assets/cyber1 (5).jpg";


function App() {
  const productRef = useRef(null);
  const navigate = useNavigate()
  const categoryObj = [
    {
      imgUrl: Proto1,
      url: "/blog",
      text: "Over-Engineering my Document Storage",
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
    {
      imgUrl: Proto8,
      url: "/blog",
      text: "Building My DNS Scanner",
    },
    {
      imgUrl: Proto4,
      url: "/blog",
      text: "In-depth of a vulnerability scanner",
    },
    {
      imgUrl: Proto5,
      url: "/blog",
      text: "My favorite hacking techniques",
    },
    {
      imgUrl: Proto6,
      url: "/blog",
      text: "Building My DNS Scanner",
    },
    {
      imgUrl: Proto1,
      url: "/blog",
      text: "In-depth of a vulnerability scanner",
    },
    {
      imgUrl: Proto7,
      url: "/blog",
      text: "My favorite hacking techniques",
    },
    {
      imgUrl: Proto8,
      url: "/blog",
      text: "Over-Engineering my Document Storage",
    },
    {
      imgUrl: Proto2,
      url: "/blog",
      text: "Red-Team Capstone Challenge",
    },
    {
      imgUrl: Proto5,
      url: "/blog",
      text: "Weaponization Techniques",
    },
  ];
  return (
    <div className="App ">
      <Navbar />
      <div className='h-[350px] md:h-[600px] lg:h-[800px]  xl:h-[750px] bg-black flex justify-center items-center px-2'>
        <h1 className='font-bignote text-[40px] md:text-[65px] lg:text-[125px] 2xl:max-w-[60%]   lg:leading-[150px] text-white text-left font-bold'>I AM THAT BLACK TECHIE GIRL</h1>
      </div>
      {/* section 3 skincare category */}
      <>
        <div className=" max-w-[90%] 2xl:max-w-[60%] mx-auto duration-700 flex"
        >
          <div>

            <h1 className=" font-bigtech text-left  text-[30px] md:text-[80px] py-4">Toyosi Usman is a <br></br>
              security + software engineer.</h1>
            <h1 className=" text-left font-lvreg text-[20px] md:text-[30px] pb-6">
              Software is powerful. It determines how we experience life, and the ways we connect, communicate, and learn. That’s why great design is about more than just beauty or delight. It’s defining the collective future of businesses, customers, and society – and doing it with intention.
            </h1></div>
  
            
            </div>

        <h1 className="border-y font-bold text-xl lg:text-4xl text-center mb-16 font-smalltech py-4">
          GET UPDATED WITH OUR LATEST BLOGS
        </h1>
        <div
          ref={productRef}
          class=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[90%] 2xl:max-w-[60%] mx-auto duration-700 ease-in"
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
                    <h1 className="text-2xl font-bigtech">{item.text}</h1>
                  </button>
                  <p className=" ">I think the first realisation that I was getting old was when I implemented a system to store physical</p>
                </div>
              </div>
            );
          })}
        </div>
      </>

    </div>
  );
}

export default App;
