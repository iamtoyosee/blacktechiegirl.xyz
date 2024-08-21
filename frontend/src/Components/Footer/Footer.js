import React from "react";
import Logo from "../../assets/infini.png"


const Footer = () => {

    return(
        
      <div className="bg-black">
      <div>
        <div className="border-t pt-16 border-[#efebe8] font-smalltech md:grid md:grid-cols-10 w-[90%] 2xl:w-[80%] mx-auto lg:mt-18 lg:text-lg text-white">
          <div className="col-span-4">
            <p className="font-bignote text-3xl mb-3"> <img src={Logo} className="mt-2 w-12" /></p>
            <p className="leading-7">
              Welcome to my personal portfolio, where creativity meets technology.
              Explore my projects, skills, and experience, and let's connect to build something amazing together.
            </p>
            <p className="leading-7 mt-2">
              Let's collaborate and bring your ideas to life.
            </p>
          </div>
          <div className="md:col-span-2 flex md:justify-center my-5">
            <ul>
              <li><b>ABOUT</b></li>
              <li>About Me</li>
              <li>Contact</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="md:col-span-2 flex md:justify-center my-5">
            <ul>
              <li><b>PROJECTS</b></li>
              <li>Portfolio</li>
              <li>GitHub</li>
              <li>Case Studies</li>
            </ul>
          </div>
          <div className="md:col-span-2 flex md:justify-center my-5">
            <ul>
              <li><b>FOLLOW</b></li>
              <li>LinkedIn</li>
              <li>Twitter</li>
              <li>GitHub</li>
            </ul>
          </div>
        </div>
    
        <p className="font-smalltech text-center text-white mt-10">
          © 2024 My Portfolio. All Rights Reserved.
        </p>
      </div>
    </div>
    )
}

export default Footer;