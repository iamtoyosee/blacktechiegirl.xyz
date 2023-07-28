import React from "react";
import App from "./App.js";
import BlogPage from "./Components/blogpage/blog.js";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const PageRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<App />} />
        <Route path="/blog" exact element={<BlogPage />} />
      </Routes>
    </Router>
  );
};

export default PageRoute;
