import React, { useState } from 'react';

function CommentForm({ addComment }) {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && comment) {
      addComment(name, comment);
      setName('');
      setComment('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        className="w-full p-2 border border-gray-300 rounded mb-2"
        required
      />
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Enter a constructive comment"
        className="w-full p-2 border border-gray-300 rounded mb-2"
        rows="4"
        required
      />
      <button
        type="submit"
        className="bg-gradient-to-r from-indigo-800 via-purple-800 to-fuchsia-600 text-white py-2 px-4 mt-8 rounded hover:bg-blue-600"
      >
        Add a Comment
      </button>
    </form>
  );
}

export default CommentForm;
