import React from "react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/navabar";
import Content from "../Content/content";
import { format } from "date-fns";

const Bloghome = () => {
  const productRef = useRef(null);
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [favBlog, setFavBlog] = useState();


  function getRandomItems(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  }
  

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
          item.tags.includes("Security")
        );

        // const limitedBlogs = filteredBlogs.slice(0, 2);
        const limitedBlogs = getRandomItems(filteredBlogs, 2);


        const fav = data.data.filter((item) => item.tags.includes("Favorite"));
        console.log(fav[0].content);
        setFavBlog(fav[0]);
        setPosts(limitedBlogs);
        setLoading(false);
      } catch (error) {
        setError("An error occurred while fetching posts");
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);
  return (
    <div>
      {loading ? (
        <div>loading</div>
      ) : (
        <div className="lg:grid lg:grid-cols-5 gap-20">
          <div className="lg:col-span-3  border-2 p-4 lg:p-6 mb-4">
            <div
              className="cursor-pointer"
              onClick={() => navigate("/blog/" + favBlog._id)}
            >
              <img
                src={favBlog.cover}
                alt="product "
                className="h-[500px] w-full object-cover  cursor-pointer object-center"
                onClick={() => navigate(favBlog.url)}
              />
                     <p className="text-gray-400 pt-6 p-2 text-xl font-lvreg ">
             ⭐ Featured Blog of the Day ⭐
            </p>
              <div className=" top-[50%] w-full">
                <p className="font-bignote my-2 lg:my-6 lg:text-3xl lg:tracking-wide lg:leading-10">
                  {favBlog.title}
                </p>

                <h1 className="lg:text-xl font-bignote">{favBlog.text}</h1>
                <p className="font-smalltech lg:text-[20px] ">
                  {favBlog.summary}
                </p>
                <div className="flex justify-between mt-2">
                  <p className="text-gray-400 ">
                    {" "}
                    {format(new Date(favBlog.createdAt), "MMM d, yyyy")} • 13
                    min read
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-5 col-span-2">
            {posts.map((item, index) => {
              return (
                <div
                  className="cursor-pointer border-2 p-4 lg:p-6"
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
                    <p className="font-smalltech lg:text-[20px] text-ellipsis">
                      {item.summary}
                    </p>
                    <div className="flex justify-between">
                      <p className="text-gray-400 ">
                        {" "}
                        {format(new Date(item.createdAt), "MMM d, yyyy")} • 13
                        min read
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Bloghome;
