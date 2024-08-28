import React from "react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/navabar";
import { format } from "date-fns";
import infinityLoader from "../../assets/infinity.svg";
import { ButtonBox } from "../Button/button";

const Content = ({ filterString }) => {
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
          item.tags.includes(filterString)
        );
        console.log(filteredBlogs);

        if (filterString) {
          setPosts(filteredBlogs);
        } else {
          setPosts(data.data);
        }
        setLoading(false);
      } catch (error) {
        setError("An error occurred while fetching posts");
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading)
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 duration-700 ease-in mb-10">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="cursor-pointer w-[90%] mx-auto">
            <div className="h-[200px] w-full bg-gray-300 animate-pulse rounded-sm"></div>
            <div className="top-[50%] w-full mt-6">
              <div className="h-5 bg-gray-300 rounded-full animate-pulse lg:text-xl w-full mb-3"></div>
              <div className="h-4 bg-gray-300 rounded-full animate-pulse lg:text-[20px] w-5/6 mb-3"></div>
              <div className="flex justify-between">
                <div className="h-3 bg-gray-300 rounded-full animate-pulse w-1/2"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  if (error) return <div>{error}</div>;

  return (
    <div
      ref={productRef}
      class=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 duration-700 ease-in mb-10"
    >
      {posts.map((item, index) => {
        return (
          <div
            className={filterString === 'project' ? "cursor-pointer text-center ":" cursor-pointer"}
            onClick={() => navigate("/blog/" + item._id)}
          >
            <img
              src={item.cover}
              alt="product "
              className="h-[250px] w-full object-cover  cursor-pointer object-center"
              onClick={() => navigate(item.url)}
            />
            <div className=" top-[50%] w-full">
              <p className="font-bignote mt-6 lg:text-xl line-clamp-2">
                {item.title}
              </p>

              <h1 className="lg:text-xl font-bignote line-clamp-2">
                {item.text}
              </h1>
              <p className="font-smalltech lg:text-[20px] line-clamp-2 ">
                {item.summary}
              </p>

              {filterString === 'project' ? (
                <div className="flex justify-center mt-4 lg:mt-10">
                  <a
                    href="https://github.com/iamtoyosee/DNS-Analyzer/tree/main"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ButtonBox text="View Project" />
                  </a>
                </div>
              ) : (
                <div className="flex justify-between mt-1">
                  <p className="text-gray-400 ">
                    {" "}
                    {format(new Date(item.createdAt), "MMM d, yyyy")} • 13 min
                    read
                  </p>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Content;
