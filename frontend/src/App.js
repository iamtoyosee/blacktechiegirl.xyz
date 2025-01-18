import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Components/Navbar/navabar";
import Proto1 from "./assets/blogimage1.avif";
import Proto2 from "./assets/blogimage2.avif";
import Proto3 from "./assets/blogimage3.avif";
import Proj1 from "./assets/dnsanalyze.png";
import Proj2 from "./assets/scanner.webp";
import Proj3 from "./assets/project3.png";
import Test1 from "./assets/test.svg";
import Test2 from "./assets/test2.svg";
import Test3 from "./assets/test3.svg";
import Test4 from "./assets/test4.svg";
import { Button, ButtonBox } from "./Components/Button/button";
import ExperienceGallery from "./Components/ExpCarousel/experience";
import running from "./assets/running.gif";
import Footer from "./Components/Footer/Footer";
import Cert from "./Components/CertPage/cert";
import Content from "./Components/Content/content";
import Bloghome from "./Components/BlogHome/bloghome";

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
      note: "As a security engineer, I am skilled in developing novel tactics, techniques, and procedures. My proficiency lies in the realms of penetration testing and vulnerability assessments, coupled with a deep comprehension of fundamental security principles encompassing cryptography, encryption, as well as authentication and authorization techniques.",
    },
    {
      imgUrl: Test1,
      url: "/blog",
      text: "Software",
      note: "Armed with a solid two-year track record of developing applications using a diverse toolkit of languages including Rust, Python, and JavaScript, along with proficiency in both backend and frontend technologies, I am always eager to contribute to the creation of cutting-edge security technologies. Leveraging this expertise, I am primed to deliver top-tier cybersecurity solutions. ",
    },
    {
      imgUrl: Test3,
      url: "/blog",
      text: "Cloud",
      note: "As a cloud engineer, I am adept at designing and deploying scalable, highly available, and fault-tolerant systems on AWS. My expertise encompasses a wide range of cloud computing principles, with a deep understanding of key AWS services such as EC2, S3, Lambda, and RDS, as well as advanced networking, security, and compliance best practices.",
    },
    {
      imgUrl: Test4,
      url: "/blog",
      text: "Network",
      note: "As a certified CCNA network engineer, I have a deep understanding of networking principles and technologies, I strive to ensure optimal network performance, security, and reliability. My expertise includes routing and switching, network troubleshooting, and implementing network security measures. I am committed to staying updated with the latest networking trends and technologies.",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="h-[400px] md:h-[500px] lg:h-screen bg-black flex justify-center items-center pt-10">
      <h1 className="max-w-[90%] 2xl:max-w-[70%] mx-auto font-bignote text-[clamp(2.5rem, 5vw, 6rem)] lg:leading-[1.2] text-white text-left font-bold">
      Think like an attacker, Build like a defender.
        </h1>
      </div>
      <div className=" ">
        {/* section 2  */}
        <>
          <div className="py-20 max-w-[90%]  2xl:max-w-[70%] mx-auto">
            <div>
              <h1 className=" font-worksans font-bold text-left text-[25px] md:text-[30px] py-4">
                Toyosi Usman is a security +<br></br>software engineer.
              </h1>
              <h1 className=" hidden lg:block text-left font-smalltech text-[18px] leading-8 md:leading-10 md:text-[20px] xl:text-[25px] pb-6 lg:max-w-[90%] xl:max-w-[80%]">
                A highly determined and dedicated individual whose primary drive
                is growth. With over three years of experience in Application
                Security Engineering, I possess a strong track record of
                building reliable and secure applications. I develop secure
                applications by thinking like an attacker and building like a
                defender. With multiple cybersecurity certifications, I bring
                deep technical expertise to the table.
              </h1>
              <h1 className="  lg:hidden text-left font-smalltech text-[18px] leading-8 md:leading-10 md:text-[20px] xl:text-[25px] pb-6 lg:max-w-[90%] xl:max-w-[80%]">
                A highly determined and dedicated individual whose primary drive
                is growth. With over three years of experience in Application
                Security Engineering, I possess a strong track record of
                building reliable and secure applications.
              </h1>
              <h1 className=" text-left font-smalltech text-[18px] leading-8 md:leading-10 md:text-[20px] xl:text-[25px] pb-6 lg:max-w-[90%] xl:max-w-[80%]">
                I am an advocate for synergy, a co-creator in projects that
                redefine norms. Together, we possess the power to shape the
                future of technology. Let's Connect and Ignite Transformation
                ✨🚀
              </h1>
            </div>
            <div className=" grid grid-cols-2 gap-5 lg:gap-20 my-10 md:max-w-[80%] xl:max-w-[50%]">
              <button
                className="font-smalltech md:text-[20px] text-gray  py-2 md:py-4 border  hover:border-2 border-black duration-300 ease-in  "
                onClick={() => navigate("/about")}
              >
                Contact Me
              </button>
              <button
                className="font-smalltech md:text-[20px] text-gray  py-2 md:py-4 border border-gray-400 hover:border-2   duration-300 ease-in  "
                onClick={() => navigate("/about")}
              >
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

                  <h1 className=" text-center md:text-left pb-6 text-[18px] leading-8 md: md:text-[22px] font-smalltech md:leading-[35px]">
                    {expertise[expertState].note}
                  </h1>
                  <div className=" grid grid-cols-2 lg:gap-20  lg:max-w-[80%] mt-10 ">
                    <Button
                      text="View Projects"
                      onClick={() => navigate("/projects")}
                    />
                    <ButtonBox
                      text="View Articles"
                      onClick={() => navigate("/blog")}
                    />
                  </div>
                </div>
                <img
                  src={expertise[expertState].imgUrl}
                  className="min-w-[45%] ml-40 hidden lg:block"
                />
              </div>
            </div>
          </div>

             {/* Blog section   */}
             <div className="max-w-[90%]  2xl:max-w-[70%] mx-auto mb-20">
            <div className="my-16">
              <h1 className=" font-bold text-2xl lg:text-4xl text-center font-smalltech py-4  md:mt-20 border-y">
                LEARN SOMETHING NEW
              </h1>
            </div>
              
              <Bloghome/>

            <div className="flex justify-center my-10">
              <div className="flex justify-center mt-10">
                <ButtonBox text="Visit Blog Page" />
              </div>
            </div>
          </div>

          <Cert />

          {/* projects section   */}

          <div className=" max-w-[90%]  2xl:max-w-[70%] mx-auto">
            <div className="my-16 lg:my-32">
              <h1 className="border-y font-bold text-xl lg:text-4xl text-center mb-16 font-smalltech py-4">
                PROJECTS
              </h1>
            </div>

            <Content filterString={'project'}/>
{/* 
            <div className="grid lg:grid-cols-3 gap-10 mb-[120px] text-center">
              <div>
                <img src={Proj1} className="h-[250px] w-full" />
                <p className="font-bignote mt-8 md:mb-3 text-[18px] lg:text-[20px]">
                  Advanced DNS Analyzer
                </p>
                <p className="font-smalltech text-[18px] lg:text-[20px]">
                  This DNS analyzer provides in-depth insight on the state of a
                  DNS infrastructure using AI & ML.
                </p>
                <div className="flex justify-center mt-4 lg:mt-10">
                  <a
                    href="https://github.com/iamtoyosee/DNS-Analyzer/tree/main"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ButtonBox text="View Project" />
                  </a>
                </div>
              </div>
              <div>
                <img src={Proj2} className="h-[250px] w-full" />
                <p className="font-bignote mt-8 md:mb-3 text-[18px] lg:text-[20px]">
                  Black Sniffer
                </p>
                <p className="font-smalltech text-[18px] lg:text-[20px]">
                  command-line tool written in Rust for scanning open ports on a
                  specified target IP address.
                </p>
                <div className="flex justify-center mt-4 lg:mt-10">
                  <a
                    href="https://github.com/iamtoyosee/Black_Sniffer"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ButtonBox text="View Project" />
                  </a>{" "}
                </div>
              </div>
              <div>
                <img src={running} className="h-[250px] w-full" />
                <p className="font-bignote mt-8 md:mb-3 text-[18px] lg:text-[20px]">
                  Inside Out
                </p>
                <p className="font-smalltech text-[18px] lg:text-[20px]">
                  A command-line tool for performing quick conversions between
                  different data formats..
                </p>
                <div className="flex justify-center mt-4 lg:mt-10">
                  <a
                    href="https://github.com/iamtoyosee/Inside_Out"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ButtonBox text="View Project" />
                  </a>{" "}
                </div>
              </div>
            </div> */}
          </div>

          {/* Video section   */}

          <div className=" max-w-[90%]  2xl:max-w-[70%] mx-auto">
            <div className="my-16 lg:my-32">
              <h1 className="border-y font-bold text-xl lg:text-4xl text-center mb-16 font-smalltech py-4">
                VIDEOS
              </h1>
            </div>

            <div className="grid lg:grid-cols-3 gap-10 text-center">
              <div>
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/LHsnPNAR3dc?si=jys0R4H-fpiUah9p"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>

                <p className="font-bignote mt-8 md:mb-3 lg:text-[20px]">
                  Google Developer Student Lead
                </p>
                <p className="font-smalltech lg:text-[20px] mb-4">
                  In this video I introduced myself and discussed my goals and
                  ambitions as a GDSC lead.
                </p>
              </div>
              <div className=" items-center">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/34-cJyWhsbU?si=kGZkNb14s_ML2i5Q"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
                <p className="font-bignote mt-8 md:mb-3 lg:text-[20px]">
                  BEST EDR SOLUTIONS
                </p>
                <p className="font-smalltech lg:text-[20px] mb-4">
                  This quick presentation gives an oversight on two great EDR
                  solutions.
                </p>
              </div>
              <div>
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/eIjuVYvFDWc?si=yeZmyiJcfck1wlRI"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
                <p className="font-bignote mt-8 md:mb-3 lg:text-[20px]">
                  101 Checkout CRM Software
                </p>
                <p className="font-smalltech lg:text-[20px]">
                  In this vidoe I discussed some of the latest features of 101
                  checkout.
                </p>
              </div>
            </div>

            <div className="flex justify-center my-10">
              <div className="flex justify-center mt-10">
                <a
                  href="https://www.youtube.com/@user-rr1vx4vc8s"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ButtonBox text="Youtube Channel" />
                </a>
              </div>
            </div>
          </div>
          {/* Experience section   */}

          <ExperienceGallery />

       
        </>
      </div>

      <Footer />
    </div>
  );
}

export default App;
