import React from "react";
import App from "./App.js";
import BlogPage from "./Components/blogpage/blog.js";
import About from "./Components/AboutPage/about.js";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Project from "./Components/Projectpage/projects.js";
import Article from "./Components/Articlespage/articles.js";
import Pics from "./Components/PicturePage/picspage.js";
import Login from "./Components/Login/login.js";
import RegistrationPage from "./Components/Register/register.js"
import Admin from "./Components/Admin/about.js";
import ProtectedRoute from "./prot.js";


const PageRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<App />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" exact element={<RegistrationPage />} />
        <Route path="/admin" exact element={<ProtectedRoute element={Admin} />} />
        <Route path="/admin/:postid" exact element={<Admin />} />
        <Route path="/blog/:postid" exact element={<BlogPage />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/projects" exact element={<Project />} />
        <Route path="/blog" exact element={<Article />} />
        <Route path="/pictures" exact element={<Pics/>} />
      </Routes>
    </Router>
  );
};

export default PageRoute;
