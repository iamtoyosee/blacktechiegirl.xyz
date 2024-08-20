import React from "react";
import Navbar from "../Navbar/navabar";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button } from "../Button/button";
import { useEffect, useRef, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import AWS from "aws-sdk"; // Import AWS SDK
import Dropdown from "../Dropdown/dropdown";

// Initialize AWS SDK
AWS.config.update({
  accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID, // Replace with your AWS Access Key
  secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY, // Replace with your AWS Secret Key
  region: "us-east-1", // Replace with your AWS region
});
const s3 = new AWS.S3(); // Create an S3 instance


console.log(process.env.REACT_APP_ACCESS_KEY_ID)

const toolbarOptions = [
  ["bold", "italic", "underline", "strike"], // toggled buttons
  ["blockquote", "code-block"],
  ["link", "image", "video", "formula"],
  [{ header: 1 }, { header: 2 }],
  [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
  [{ script: "sub" }, { script: "super" }],
  [{ indent: "-1" }, { indent: "+1" }],
  [{ direction: "rtl" }],
  [{ size: ["small", false, "large", "huge"] }],
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ color: [] }, { background: [] }],
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
  const quillRef = useRef(null);

  const token = localStorage.getItem("authToken");
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [files, setFiles] = useState(""); // Set initial files state to null
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tags, setTags] = useState("");
  const [tagsArray, setTagsArray] = useState([]); // State to store tags

  const navigate = useNavigate();
  const { postid } = useParams();

  const handleImageInsert = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      if (file) {
        const imageUrl = await uploadImageToS3(file);
        console.log(imageUrl);
        if (imageUrl) {
          const quill = quillRef.current.getEditor();
          const range = quill.getSelection();
          console.log("Index", range?.index);

          quill.insertEmbed(range?.index, "image", imageUrl);
        }
      }
    };
  };

  // const modules = {
  //   toolbar: {
  //     container: toolbarOptions,
  //     handlers: {
  //       image:  handleImageInsert,
  //     },
  //   },
  //   syntax: true,
  // };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: toolbarOptions,
        handlers: {
          image: handleImageInsert,
        },
      },
      syntax: true, // Ensure that you have a syntax module configured if you need syntax highlighting
    }),
    []
  );

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
          setFiles(postData.data.cover);
          setTagsArray(postData.data.tags);
          console.log(postData.data);
          setLoading(false);
        } catch (error) {
          setError("An error occurred while fetching data");
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [postid]);

  const uploadImageToS3 = async (file) => {
    const params = {
      Bucket: "btgs3imagebucket", // Replace with your S3 bucket name
      Key: file.name, // The file name to use in S3
      Body: file, // The file object
      ContentType: file.type, // The content type of the file (e.g., image/jpeg)
    };

    try {
      const data = await s3.upload(params).promise();
      return data.Location; // This is the URL of the uploaded image in S3
    } catch (error) {
      console.error("Error uploading image:", error);
      return null;
    }
  };

  const handleImage = async (ev) => {
    const imageFile = ev.target.files;
    console.log(imageFile);
    const newimgurl = await uploadImageToS3(imageFile[0]);
    console.log(newimgurl);
    setFiles(newimgurl);
  };

  const handleTags = (ev) => {
    ev.preventDefault()
    setTagsArray((prevTagsArray) => [...prevTagsArray, tags]); // Update state properly
    console.log(tagsArray);
    setTags("");
  };

  const removeTag = (index, ev) => {
    ev.preventDefault()
    setTagsArray((currentTags) =>
      currentTags.filter((_, idx) => idx !== index)
    );
  };

  const createNewPost = async (ev) => {
    ev.preventDefault();

    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("cover", files);
    data.set("author", "blacktechiegirl");
    // Append each tag as a separate entry
    tagsArray.forEach((tag) => {
      data.append("tags[]", tag);
    });
    setError("");
    setSuccess("");

    console.log(data);
    try {
      const response = await fetch("http://localhost:8080/post", {
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
      setSuccess("Post created successfully");
      navigate("/blog");
    } catch (err) {
      setError("Failed to connect to the server. Please try again later.");
    }
  };

  const EditPost = async (ev) => {
    ev.preventDefault();

    // if (!files || files.length === 0) {
    //   setError("Please upload an image");
    //   return;
    // }
    console.log(files);
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("cover", files);
    data.set("author", "blacktechiegirl");
// Append each tag as a separate entry
tagsArray.forEach(tag => {
  data.append("tags[]", tag);
});
    setError("");
    setSuccess("");

    try {
      const response = await fetch(
        `https://api.blacktechiegirl.com/post/${postid}`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`, // Include the token here
          },
          body: data,
        }
      );

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
          className="m-4 border-2 rounded-sm p-4"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
        />
        <input
          className="m-4 border-2 rounded-sm p-4"
          type="text"
          placeholder="Summary"
          value={summary}
          onChange={(ev) => setSummary(ev.target.value)}
        />

        <div>
          {tagsArray.length > 0 && (
            <div className="flex flex-wrap gap-2 ml-4">
              {tagsArray.map((item, index) => (
                <div
                  key={index}
                  className="bg-black text-white flex items-center px-2 py-1 rounded-lg text-md font-medium"
                >
                  {item}
                  <button
                    onClick={(ev) => removeTag(index, ev)}
                    className="bg-black text-white px-3 rounded-full text-sm font-medium"
                  >
                    &#10005; {/* Unicode X symbol */}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex">
          <input
            className="m-4 border-2 rounded-sm p-4 w-[90%]"
            type="text"
            placeholder="Enter Tags"
            value={tags}
            onChange={(ev) => setTags(ev.target.value)}
          />
          <button
            className="my-4 bg-black rounded-sm p-4 w-[7%] text-white"
            onClick={(ev) => handleTags(ev)}
          >
            Add
          </button>
        </div>

        <p className="mx-4 font-bold">Current Image</p>
        <img src={files} className="w-[300px] mx-4 py-4" />
        <input
          className="m-4 border-2 rounded-sm p-4"
          type="file"
          onChange={(ev) => handleImage(ev)}
        />
        <ReactQuill
          ref={quillRef}
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
