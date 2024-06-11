import React from "react";
import Navbar from "../Navbar/navabar";
import Me from "../../../src/assets/aminat.jpg";
import { useEffect } from "react";
import Exp1 from "../../assets/exp3.jpg";
import Exp2 from "../../assets/exp2.jpeg";
import Exp3 from "../../assets/exp1.jpeg";

const Pics = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navbar />

      <div className=" m-48">
        <div className="grid lg:grid-cols-3">
          <div>
            <img src={Exp1} className="w-[400px] lg:h-[300px]" />
            <p className="font-bignote my-4 lg:mt-8 lg:mb-3 text-[20px]">
              Open Source Festival 2022
            </p>
          </div>
          <div>
            <img src={Exp2} className="w-[400px] lg:h-[300px]" />
            <p className="font-bignote my-4 lg:mt-8 lg:mb-3 text-[20px]">
              She Codes Software Hackhaton 2020
            </p>
          </div>
          <div>
            <img src={Exp3} className="w-[400px] lg:h-[300px]" />
            <p className="font-bignote mt-8 mb-3 text-[20px]">
              Esentry Cybersecurity Hackhaton 2021
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pics;
