import React from "react";
import Navbar from "../Navbar/navabar";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button } from "../Button/button";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const toolbarOptions = [
  ["bold", "italic", "underline", "strike"], // toggled buttons
  ["blockquote", "code-block"],
  ["link", "image", "video", "formula"],

  [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
  [{ script: "sub" }, { script: "super" }], // superscript/subscript
  [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  [{ direction: "rtl" }], // text direction

  [{ size: ["small", false, "large", "huge"] }], // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ font: [] }],
  [{ align: [] }],

  ["clean"], // remove formatting button
  ["code-block"], // add code block button
];
const formats = [
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "color",
  "background",
  "script",
  "header",
  "blockquote",
  "code-block",
  "indent",
  "list",
  "direction",
  "align",
  "link",
  "image",
  "video",
  "formula",
  "code-block", // Enable code block format
];

const Admin = () => {
  const token = localStorage.getItem("authToken");
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [files, setFiles] = useState("");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const { postid } = useParams();

  const modules = {
    toolbar: toolbarOptions,
    syntax: true,
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    if (postid) {
      const fetchData = async () => {
        try {
          const postResponse = await fetch(
            `https://api.blacktechiegirl.com/post/${postid}`
          );

          if (!postResponse.ok) {
            throw new Error("Network response was not ok for post");
          }

          const postData = await postResponse.json();

          setTitle(postData.data.title);
          setContent(postData.data.content);
          setSummary(postData.data.summary);
          setFiles("");
          console.log(postData.data);
          setLoading(false);
        } catch (error) {
          setError("An error occurred while fetching data");
          setLoading(false);
        }
      };

      fetchData();
    }
  }, []);

  const createNewPost = async (ev) => {
    ev.preventDefault();
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("file", files[0]);
    data.set("author", "blacktechiegirl");
    data.set("tags", ["Security"]);

    console.log(files);

    setError("");
    setSuccess("");

    try {
      const response = await fetch("https://api.blacktechiegirl.com/post", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`, // Include the token here
        },
        body: data,
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message || "Something went wrong");
        return;
      }
      setSuccess("Awesome");
      navigate("/blog");
    } catch (err) {
      setError("Failed to connect to the server. Please try again later.");
    }
  };

  const EditPost = async (ev) => {
    ev.preventDefault();

    if (!files || files.length === 0) {
      setError("Please upload an image");
      alert(error); // Ensure this logs correctly
      return;
    }

    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("file", files[0]); // Ensure file is being uploaded correctly
    data.set("author", "blacktechiegirl");
    data.set("tags", JSON.stringify(["Security"])); // Ensure tags are sent correctly

    console.log("Files:", files);

    // Clear previous messages
    setError("");
    setSuccess("");

    try {
      const response = await fetch(
        `https://api.blacktechiegirl.com/post/${postid}`,
        {
          method: "PATCH",
          headers: {
            // 'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`, // Include the token here
          },
          body: data,
        }
      );

      console.log({ token });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message || "Something went wrong");
        return;
      }

      setSuccess("Post updated successfully");
      navigate("/blog");
    } catch (err) {
      setError("Failed to connect to the server. Please try again later.");
    }
  };

  return (
    <div>
      <Navbar />
      <form
        className="mt-32 flex flex-col mx-[10%]"
        onSubmit={postid ? EditPost : createNewPost}
      >
        <input
          className="m-4 border-2 rounded-sm p-4 "
          type="title"
          placeholder={"Title"}
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
        />
        <input
          className="m-4 border-2 rounded-sm p-4 "
          type="summary"
          placeholder={"Summary"}
          value={summary}
          onChange={(ev) => setSummary(ev.target.value)}
        />

        <input
          className="m-4 border-2 rounded-sm p-4 "
          type="file"
          onChange={(ev) => setFiles(ev.target.files)}
        />
        <ReactQuill
          className="my-4 p-4 h-[300px]"
          formats={formats}
          value={content}
          modules={modules}
          onChange={(newValue) => setContent(newValue)}
        />

        {postid ? (
          <button className="mt-20 mx-4 py-4 bg-black rounded-md text-white text-xl font-bignote">
            Edit Post
          </button>
        ) : (
          <button className="mt-20 mx-4 py-4 bg-black rounded-md text-white text-xl font-bignote">
            Create Post
          </button>
        )}
      </form>
    </div>
  );
};

export default Admin;
