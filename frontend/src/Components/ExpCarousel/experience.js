import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Exp1 from "../../assets/googleio.jpeg";
import Exp2 from "../../assets/reinvent.PNG";
import Exp3 from "../../assets/exp1.jpeg";
import Exp4 from "../../assets/blackhat.jpeg";
import Exp5 from "../../assets/Defcon1.jpeg";
import Exp6 from "../../assets/ABW cohort.jpg";
import Exp7 from "../../assets/iocali.jpg";
import Exp8 from "../../assets/blackhatwide.jpg";
import Exp9 from "../../assets/iluvaws.jpg";
import Exp10 from "../../assets/philly.jpg";
import Exp11 from "../../assets/techequity.jpg";
import Exp12 from "../../assets/ep3.jpg";
import Exp13 from "../../assets/reinf.jpg";
import Exp14 from "../../assets/exp2.jpeg";
import Exp15 from "../../assets/STF2025.jpg";


import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { ButtonBox } from "../Button/button";
import './exp.css'; // Assuming you save the custom styles in this file

const images = [
  { src: Exp4, alt: "Black Hat USA 2024", caption: "Black Hat USA 2024" },
  { src: Exp5, alt: "Defcon Uncancelled 2024", caption: "Defcon Engage 2024" },
  { src: Exp1, alt: "Google I/O 2024", caption: "Google I/O 2024 Shoreline CA" },
  { src: Exp2, alt: "AWS Reinvent 2023", caption: "AWS Reinvent 2023 Las Vegas" },
  { src: Exp15, alt: "Palo Alto Networks 2025", caption: "Palo Alto Networks STF competition 2025" },
  { src: Exp3, alt: "Esentry Hackathon 2021", caption: "Esentry Cybersecurity Hackathon 2021" },
  { src: Exp13, alt: "Esentry Hackathon 2021", caption: "AWS RE:Inforce 2024" },
  { src: Exp6, alt: "Defcon Uncancelled 2024", caption: "ABW Cohort 2024" },
  { src: Exp7, alt: "Defcon Uncancelled 2024", caption: "North America Connect" },
  { src: Exp8, alt: "Defcon Uncancelled 2024", caption: "BlackHat USA" },
  { src: Exp9, alt: "Defcon Uncancelled 2024", caption: "I love AWS" },
  { src: Exp10, alt: "Defcon Uncancelled 2024", caption: "AWS RE:Inforce Philadelphia" },
  { src: Exp11, alt: "Defcon Uncancelled 2024", caption: "Tech Equity Collective" },
  { src: Exp14, alt: "Defcon Uncancelled 2024", caption: "Infoprive Tech Gathering" },
  { src: Exp12, alt: "Defcon Uncancelled 2024", caption: "Open Source Festival 2022" },
];

const ExperienceGallery = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="max-w-[90%] 2xl:max-w-[70%] mx-auto relative">
      <div className="my-8 lg:my-32">
        <h1 className="border-y font-bold text-xl lg:text-4xl text-center font-smalltech py-4 mb-20 mt-20">
          JOURNEY INTO DISCOVERY
        </h1>
      </div>

      <Swiper
        className="lg:w-[90%]"
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center">
              <img
                src={image.src}
                className="h-[250px] w-full object-cover object-center"
                alt={image.alt}
              />
              <p className="font-popreg font-bold my-4 lg:mt-8 mb-20 text-[20px] text-center">
                {image.caption}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom navigation buttons */}
      <div className="absolute top-1/2 transform -translate-y-1/2 left-4 z-10 cursor-pointer" ref={prevRef}>
        <AiOutlineArrowLeft size={30} className="text-gray-600 hidden md:block" />
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 right-4 z-10 cursor-pointer " ref={nextRef}>
        <AiOutlineArrowRight size={30} className="text-gray-600 hidden md:block" />
      </div>

      <div className="flex justify-center my-10">
        <ButtonBox text="View More Pictures" />
      </div>
    </div>
  );
};

export default ExperienceGallery;
