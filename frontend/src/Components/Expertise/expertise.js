import React from 'react'

const Expertise = () => {
  return (
    <div className=" pt-5 bg-slate-100 py-[100px]">
    <div className="max-w-[90%] 2xl:max-w-[70%] mx-auto ">
      <div className="lg:max-w-[60%] font-smalltech text-[17px] md:text-[22px]  flex py-[50px] opacity-0 duration-700 ease-in">
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

      <div ref={textRef} className="lg:flex text-center lg:text-left  opacity-0 duration-700 ease-in ">
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
  )
}

export default Expertise