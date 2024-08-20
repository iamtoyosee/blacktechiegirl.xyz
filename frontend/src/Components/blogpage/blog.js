import React from "react";
import Navbar from "../Navbar/navabar";
// import Proto1 from "../../assets/blogimage1.avif";
import Proto6 from "../../assets/proto6.jpg";
import Proto1 from "../../assets/cyber1 (5).jpg";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentForm from "./commentform";
import CommentList from "./commentlist";
import { useNavigate } from "react-router-dom";
import hljs from "highlight.js";
import 'highlight.js/styles/github.css'; 
import css from "highlight.js/lib/languages/css";



const BlogPage = () => {
  const { postid } = useParams();
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    document.querySelectorAll("pre.ql-syntax").forEach((block) => {
      hljs.highlightBlock(block);

      block.classList.add('bg-gray-100', 'rounded', 'p-4', 'overflow-x-auto');

    });





    window.scrollTo(0, 0);
    const fetchData = async () => {
      try {
        const postResponse = await fetch(
          `https://api.blacktechiegirl.com/post/${postid}`
        );
        // const commentResponse = await fetch(
        //   `https://api.blacktechiegirl.com/comment/${postid}`
        // );

        if (!postResponse.ok) {
          throw new Error("Network response was not ok for post");
        }

        // if (!commentResponse.ok) {
        //   throw new Error("Network response was not ok for comments");
        // }

        const postData = await postResponse.json();
        // const commentData = await commentResponse.json();

        setPosts(postData.data);
        // setComments(commentData.data);
        console.log('newerror')
        console.log(postData.data);
        setLoading(false);
      } catch (error) {
        setError("An error occurred while fetching data");
        setLoading(false);
      }
    };

    fetchData();
  }, [posts.content]);

  const handleDeleteClick = async () => {
    if (!token) {
      alert("You need to be logged in to delete this post.");
      return;
    }

    try {
      const response = await fetch(`https://api.blacktechiegirl.com/post/${posts._id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete post");
      }

      alert("Post deleted successfully");
      navigate("/blog"); // Redirect to the home page or blog list page
    } catch (error) {
      console.error("Error deleting post:", error);
      alert("Error deleting post. Please try again later.");
    }
  };


  const handleEditClick =() =>{
    navigate(`/admin/${posts._id}`)
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const token = localStorage.getItem("authToken");

  return (
    <div>
      {" "}
      <Navbar />
      <div className="w-[90%] max-w-[1000px]  mx-auto py-10">
        <div className="px-3 mt-16">
          <div className="flex justify-between">
            <p className="text-gray-400 font-bold pt-[50px] pb-2 text-xl ">
              category
            </p>
            {token && (
              <div className="flex">
                <p className="text-gray-400 font-lvreg pt-[50px] pb-2 text-xl mx-5 cursor-pointer bor"                   onClick={handleEditClick}
                >
                  Edit Post
                </p>

                <p
                  className="text-gray-400 font-lvreg pt-[50px] pb-2 text-xl cursor-pointer"
                  onClick={handleDeleteClick}
                >
                  Delete Post
                </p>
              </div>
            )}
          </div>

          <h1 className="font-bignote text-[30px] md:text-[60px]  old ">
            {posts.title}
          </h1>
        </div>
        <div className="">
          <div className="flex my-5 px-3">
            <img
              src={Proto6}
              className="h-[100px]  w-[100px] rounded-full  object-cover object-center border-2 p-1 border-[#d6a419] duration-500 ease-in"
            />
            <div className="m-5">
              <p className="font-lvreg font-bold text-2xl">BlackTechieGirl</p>
              <p className="text-gray-400 ">Jun 22, 2023 • 13 min read</p>
            </div>
          </div>
          <img
            src={ posts.cover}
            alt="product "
            className="h-[600px] mb-8  w-full object-cover object-center cursor-pointer "
          />
        </div>

        <div className=" font-smalltech text-2xl">
          <main class="container mx-auto">
            <div
              dangerouslySetInnerHTML={{ __html: posts.content }}
              className="mb-48"
            />
            <CommentList comments={comments} />
          </main>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
