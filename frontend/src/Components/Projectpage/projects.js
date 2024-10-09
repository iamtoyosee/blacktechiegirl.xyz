import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/navabar";


const Project = () => {
  const productRef = useRef(null);
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://api.blacktechiegirl.com/post");

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        const filteredBlogs = data.data.filter((item) =>
          item.tags.includes("project")
        );
        console.log(data.data)
        setPosts(filteredBlogs);

        setLoading(false);
      } catch (error) {
        setError("An error occurred while fetching posts");
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);
;
  return (
    <div>
      <Navbar className="" />
      <div className="mt-28  mb-5 md:mb-10 lg:mt-40 lg:mb-24">
        <h1 className="font-bignote text-[40px] lg:text-[60px] font-bold text-center">
          {" "}
          Creativity at its peak !
        </h1>
      </div>
      <div className="max-w-[90%]  2xl:max-w-[70%] mx-auto mb-20">
        <div ref={productRef} class="  duration-700 ease-in mb-10">
          {posts.map((item, index) => {
            return (
              <div className="border-y lg:grid grid-cols-2 gap-12  py-10 md:py-20">
                <img
                  src={item.cover}
                  alt="product "
                  className="h-[330px] w-full lg:max-w-lg object-cover  cursor-pointer object-center "
                />
                <div className=" top-[50%] w-full lg:min-h-[330px]">
                  <div
                    className="lg:h-[70%]"
                    // onClick={() => navigate(item.url)}
                    // className="font-smalltech hover:font-bigtech text-lg  hover:border-[#d6a419] text-gray my-6 min-w-[200px] border sm:border-2 p-2 2xl:p-4 hover:bg-white  duration-300 ease-in w-[50%] mx-auto"
                  >
                    <h1 className="mt-10 lg:mt-0 text-xl lg:text-2xl mb-4 font-bignote text-left">
                      {item.title}
                    </h1>

                    <p className="font-smalltech text-[18px] lg:text-[20px]  ">
                  {item.summary}
                              </p>
                  </div>
                  
                  <div className=" grid grid-cols-2 gap-5 lg:gap-20 lg:max-w-[80%] py-10">
                    <button
                      className="font-smalltech text-[18px] text-gray py-2 lg:py-4 border border-black  hover:bg-black hover:text-white duration-300 ease-in  "
                      onClick={() => item.category != "undefined"? window.location.href = item.category: navigate(`/blog/${item._id}`)}
                    >
                      View Project
                    </button>
                    <button className="font-smalltech text-[18px] text-gray py-2  lg:py-4  border border-black  hover:bg-black hover:text-white  duration-300 ease-in  "
                      onClick={() =>  window.location.href = item.github }

                    >
                      View on Github
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
