import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/navabar";
import Content from "../Content/content";

const Article = () => {
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
        <h1 className="font-bignote text-[35px] lg:text-[60px] font-bold text-center my-10 lg:my-20">
          {" "}
          Let's Learn Something New !
        </h1>
      </div>
      <div className="max-w-[90%]  2xl:max-w-[70%] mx-auto mb-20">
       <Content />
      </div>
    </div>
  );
};

export default Article;
