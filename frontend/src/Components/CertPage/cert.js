import React from "react";
import Navbar from "../Navbar/navabar";
import Me from "../../../src/assets/aminat.jpg";
import { useEffect } from "react";
import Cert1 from "../../assets/oscp.png";
import Cert2 from "../../assets/ccnp_security.png";
import Cert3 from "../../assets/ccna_600.png";
import Cert4 from "../../assets/aws saa.png";
import Cert5 from "../../assets/aws-dva.png";
import Cert6 from "../../assets/NSE-4-badge-2.png";
import { ButtonBox } from "../Button/button";


const Cert = () => {



  return (
    <div>
  {/* certification section   */}
  <div className="">
            <div className=" max-w-[90%]  2xl:max-w-[70%] mx-auto">
              <div className="my-16 lg:my-32">
                <h1 className="border-y font-bold text-xl lg:text-4xl text-center font-smalltech py-4 ">
                  CERTIFICATIONS AND QUALIFICATIONS
                </h1>
              </div>

              <div className="flex justify-center items-center">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                  <img src={Cert1} className="lg:max-w-[200px] blur-sm z-0" />
                  <img src={Cert2} className="lg:max-w-[200px]" />
                  <img src={Cert3} className="lg:max-w-[200px]" />
                  <img src={Cert4} className="lg:max-w-[200px]" />
                  <img src={Cert5} className="lg:max-w-[200px]" />
                  <img src={Cert6} className="lg:max-w-[200px]" />
                </div>
              </div>
              <div className="flex justify-center mt-20">
                <a
                  href="https://www.credly.com/users/aminat-usman/badges"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ButtonBox text="View Certificates" />
                </a>
              </div>
            </div>
          </div>

      
    </div>
  );
};

export default Cert;
