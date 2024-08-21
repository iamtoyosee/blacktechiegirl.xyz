import React from "react";
import { Button } from "../Button/button";
import CommentForm from "./commentform";
function CommentList({ comments }) {
  if (comments.length === 0) {
    return (
      <div className="text-center my-16  py-8  shadow-2xl">
        <p className="text-2xl lg:text-4xl font-bignote md:my-4">Start the conversation</p>
        <p className="mt-1 md:my-8 ">No need to sign up, Tell me what you think !</p>
        <div className="m-8 md:mx-24">
          <CommentForm />
        </div>
      </div>
    );
  }

  return (
    <div>
      {comments.map((comment, index) => (
        <div key={index} className="border border-gray-300 p-2 mb-2 rounded">
          <strong>{comment.name}</strong>: <p>{comment.comment}</p>
        </div>
      ))}

      <div className="m-8 mx-24">
        <CommentForm />
      </div>
    </div>
  );
}

export default CommentList;
