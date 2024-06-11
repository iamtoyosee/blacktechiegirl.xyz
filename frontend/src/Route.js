import React from "react";
import App from "./App.js";
import BlogPage from "./Components/blogpage/blog.js";
import About from "./Components/AboutPage/about.js";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Project from "./Components/Projectpage/projects.js";
import Article from "./Components/Articlespage/articles.js";
import Pics from "./Components/PicturePage/picspage.js";


const PageRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<App />} />
        <Route path="/admin" exact element={<App />} />
        <Route path="/blog/:blogid" exact element={<BlogPage />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/projects" exact element={<Project />} />
        <Route path="/blog" exact element={<Article />} />
        <Route path="/pictures" exact element={<Pics/>} />
      </Routes>
    </Router>
  );
};

export default PageRoute;
