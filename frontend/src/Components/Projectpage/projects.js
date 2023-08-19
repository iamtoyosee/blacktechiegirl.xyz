import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/navabar";
import Proto1 from "../../assets/blogimage1.avif";
import Proto2 from "../../assets/blogimage2.avif";
import Proto3 from "../../assets/blogimage3.avif";
import Proto4 from "../../assets/cyber1 (1).jpg";
import Proto5 from "../../assets/cyber1 (2).jpg";
import Proto6 from "../../assets/cyber1 (3).jpg";
import Proto7 from "../../assets/cyber1 (4).jpg";
import Proto8 from "../../assets/cyber1 (5).jpg";

const Project = () => {
  const productRef = useRef(null);
  const navigate = useNavigate();
  const categoryObj = [
    {
      imgUrl: Proto1,
      url: "/blog",
      text: "Domain Name System Researcher",
    },
    {
      imgUrl: Proto2,
      url: "/blog",
      text: "Interactive Packet Manipulation Tool",
    },
    {
      imgUrl: Proto3,
      url: "/blog",
      text: "Weaponization Techniques",
    },
    {
      imgUrl: Proto4,
      url: "/blog",
      text: "Over-Engineering my Storage",
    },
    {
      imgUrl: Proto5,
      url: "/blog",
      text: "Red-Team Capstone Challenge",
    },
    {
      imgUrl: Proto6,
      url: "/blog",
      text: "Weaponization Techniques",
    },
    {
      imgUrl: Proto7,
      url: "/blog",
      text: "Over-Engineering my Storage",
    },
    {
      imgUrl: Proto2,
      url: "/blog",
      text: "Red-Team Capstone Challenge",
    },
    {
      imgUrl: Proto8,
      url: "/blog",
      text: "Weaponization Techniques",
    },
  ];
  return (
    <div>
      <Navbar />
      <h1 className="font-bignote text-[60px] font-bold text-center my-20">
        {" "}
        Creativity at its peak !
      </h1>
      <div className="max-w-[80%]  2xl:max-w-[70%] mx-auto mb-20">

        <div
          ref={productRef}
          class="  duration-700 ease-in mb-10"
        >
          {categoryObj.map((item, index) => {
            return (
              <div className="border-y grid grid-cols-2 gap-12 py-20">
                <img
                  src={item.imgUrl}
                  alt="product "
                  className="h-[330px] min-w-[80%] object-cover object-top cursor-pointer "
                  onClick={() => navigate(item.url)}
                />
                <div className=" top-[50%] w-full">
                  <button
                    className=""
                    // onClick={() => navigate(item.url)}
                    // className="font-smalltech hover:font-bigtech text-lg  hover:border-[#d6a419] text-gray my-6 min-w-[200px] border sm:border-2 p-2 2xl:p-4 hover:bg-white  duration-300 ease-in w-[50%] mx-auto"
                  >
                    <h1 className="text-xl mb-4 font-bignote">{item.text}</h1>
                  </button>
                  <p className="font-smalltech text-[20px] ">
                  This is a powerful interactive packet manipulation libary written in Python.This tool has multiple security features and wonderful contributors. Scapy is able to forge or decode packets of a wide number of protocols, send them on the wire, capture them, match requests and replies, and much more. I think the first realisation that I was getting old was
                    when I implemented a system to store physical
                  </p>
                  <div className=" grid grid-cols-2 gap-20 my-10 max-w-[80%]">
                <button className="font-smalltech text-[18px] text-gray  min-h-[50px] border  hover:border-2 border-black duration-300 ease-in  ">
                  View Project
                </button>
                <button className="font-smalltech text-[18px] text-gray  min-h-[50px]  border border-gray-400 hover:border-2   duration-300 ease-in  ">
                  View on Github
                </button>
              </div>
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </div>
  );
};

export default Project;
