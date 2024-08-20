import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/navabar";
import { format } from "date-fns";

const Article = () => {
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
        console.log(data);
        setPosts(data.data);
        setLoading(false);
      } catch (error) {
        setError("An error occurred while fetching posts");
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <Navbar />
      <div className="mt-28 mb-10 lg:mt-40 lg:mb-24">
        <h1 className="font-bignote text-[30px] lg:text-[60px] font-bold text-center my-10 lg:my-20">
          {" "}
          Let's Learn Something New !😁
        </h1>
      </div>
      <div className="max-w-[90%]  2xl:max-w-[70%] mx-auto mb-20">
        <div
          ref={productRef}
          class=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 duration-700 ease-in mb-10"
        >
          {posts.map((item, index) => {
            return (
              <div
                className="cursor-pointer"
                onClick={() => navigate("/blog/" + item._id)}
              >
                <img
                  src={item.cover}
                  alt="product "
                  className="h-[250px] w-full object-cover  cursor-pointer object-center"
                  onClick={() => navigate(item.url)}
                />
                <div className=" top-[50%] w-full">
                  <p className="font-bignote mt-6 lg:text-xl">{item.title}</p>

                  <h1 className="lg:text-xl font-bignote">{item.text}</h1>
                  <p className="font-smalltech lg:text-[20px] ">
                    {item.summary}
                  </p>
                  <div className="flex justify-between">
                    <p className="text-gray-400 ">
                      {" "}
                      {format(new Date(item.createdAt), "MMM d, yyyy")} • 13 min
                      read
                    </p>
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

export default Article;
