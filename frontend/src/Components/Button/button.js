import React from "react";

export const Button = ({ text }) => {
  return (
    <div>
                
      <button className="font-smalltech md:text-[20px] text-gray min-w-[150px] md:min-w-[250px] py-2 md:py-4  bg-gradient-to-r from-indigo-800 via-purple-800 to-fuchsia-600 hover:border-0  text-white duration-300 ease-in  ">
        {text}
      </button>
    </div>
  );
};

export const ButtonBox =({text})=>{
    return(
        <div>
             <button className="font-smalltech md:text-[20px] text-gray border-x-indigo-500 border-y-fuchsia-500 min-w-[150px]  md:min-w-[250px]  py-[7px] md:py-4 border sm:border    hover:bg-gradient-to-r from-indigo-800 via-purple-800 to-fuchsia-600 hover:border-0  hover:text-white duration-300 ease-in  ">
        {text}
      </button>
        </div>
    )
}
