import React from "react"
import SectionHeader from "../SectionHeader/SectionHeader"
import Reveal from "../Reveal/Reveal";
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
    <section>
      <div className="max-w-[1240px] mx-auto px-6 py-24 text-center">
        <Reveal>
          <SectionHeader eyebrow="CERTIFICATIONS" title="Certifications & qualifications" center className="mb-14" />
        </Reveal>
        <Reveal delay={100}>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-10 items-center justify-items-center">
            <img src={Cert1} alt="OSCP" className="h-[120px] md:h-[150px] w-auto object-contain blur-sm" />
            <img src={Cert2} alt="CCNP Security" className="h-[120px] md:h-[150px] w-auto object-contain" />
            <img src={Cert3} alt="CCNA" className="h-[120px] md:h-[150px] w-auto object-contain" />
            <img src={Cert4} alt="AWS Solutions Architect Associate" className="h-[120px] md:h-[150px] w-auto object-contain" />
            <img src={Cert5} alt="AWS Developer Associate" className="h-[120px] md:h-[150px] w-auto object-contain" />
            <img src={Cert6} alt="Fortinet NSE 4" className="h-[120px] md:h-[150px] w-auto object-contain" />
          </div>
        </Reveal>
        <a
          href="https://www.credly.com/users/aminat-usman/badges"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-14 inline-flex items-center min-h-[48px] px-6 rounded-full border border-zinc-300 font-body font-semibold text-base transition hover:border-zinc-900"
        >
          View Certificates
        </a>
      </div>
    </section>
  );
};

export default Cert;
