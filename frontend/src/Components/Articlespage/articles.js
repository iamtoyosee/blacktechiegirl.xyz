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

const Article = () => {
  const productRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
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
      <div className="mt-28 mb-10 lg:mt-40 lg:mb-24">
        <h1 className="font-bignote text-[30px] lg:text-[60px] font-bold text-center my-10 lg:my-20">
          {" "}
          Let's Learn Something New !😁
        </h1>
      </div>
      <div className="max-w-[90%]  2xl:max-w-[70%] mx-auto mb-20">
        <div
          ref={productRef}
          class=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 duration-700 ease-in mb-10"
        >
          {categoryObj.map((item, index) => {
            return (
              <div className="">
                <img
                  src={item.imgUrl}
                  alt="product "
                  className="h-[250px] w-full object-cover object-top cursor-pointer "
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
                  <p className="font-smalltech lg:text-[20px] ">
                    I think the first realisation that I was getting old was
                    when I implemented a system to store physical
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Article;
