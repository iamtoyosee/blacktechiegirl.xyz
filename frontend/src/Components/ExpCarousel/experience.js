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
import Exp16 from "../../assets/Most Outstanding.jpeg";


import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import SectionHeader from "../SectionHeader/SectionHeader";
import Reveal from "../Reveal/Reveal";
import './exp.css'; // Assuming you save the custom styles in this file

const images = [
  { src: Exp4, alt: "Black Hat USA 2024", caption: "Black Hat USA 2024" },
  { src: Exp5, alt: "Defcon Uncancelled 2024", caption: "Defcon Engage 2024" },
  { src: Exp1, alt: "Google I/O 2024", caption: "Google I/O 2024 Shoreline CA" },
  { src: Exp2, alt: "AWS Reinvent 2023", caption: "AWS Reinvent 2023 Las Vegas" },
  { src: Exp15, alt: "Palo Alto Networks 2025", caption: "Palo Alto Networks STF competition 2025" },
  { src: Exp3, alt: "Esentry Hackathon 2021", caption: "Esentry Cybersecurity Hackathon 2021" },
  { src: Exp13, alt: "Esentry Hackathon 2021", caption: "AWS RE:Inforce 2024" },
  { src: Exp16, alt: "Esentry Hackathon 2021", caption: "Most Outstanding Student Award" },
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
  const navigate = useNavigate();

  return (
    <section className="bg-cream">
      <div className="max-w-[1240px] mx-auto px-6 py-24">
        <Reveal className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <SectionHeader eyebrow="EXPERIENCE" title="Moments that shaped me" />
          {/* Custom navigation buttons */}
          <div className="flex gap-2.5">
            <button
              ref={prevRef}
              type="button"
              aria-label="Previous photo"
              className="w-12 h-12 rounded-full border border-zinc-300 bg-white text-zinc-900 flex items-center justify-center transition hover:border-zinc-900"
            >
              <AiOutlineArrowLeft size={18} />
            </button>
            <button
              ref={nextRef}
              type="button"
              aria-label="Next photo"
              className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center transition hover:bg-accent"
            >
              <AiOutlineArrowRight size={18} />
            </button>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <Swiper
            className="experience-swiper"
            spaceBetween={24}
            slidesPerView={1.15}
            breakpoints={{
              640: { slidesPerView: 1.6 },
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
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={700}
            modules={[Navigation, Pagination, Autoplay]}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <figure className="m-0 flex flex-col gap-3.5">
                  <img
                    src={image.src}
                    className="w-full aspect-[4/5] object-cover object-center rounded-2xl"
                    alt={image.caption}
                    loading="lazy"
                  />
                  <figcaption className="font-body text-base font-medium text-zinc-800">
                    {image.caption}
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </Reveal>

        <div className="flex justify-center mt-10">
          <button
            type="button"
            onClick={() => navigate("/pictures")}
            className="min-h-[48px] px-6 rounded-full border border-zinc-300 font-body font-semibold text-base transition hover:border-zinc-900"
          >
            View More Pictures
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExperienceGallery;
