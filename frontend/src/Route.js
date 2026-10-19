import React from "react";
import App from "./App.js";
// TODO(blog): re-enable when blog data is restored
// import BlogPage from "./Components/blogpage/blog.js";
import About from "./Components/AboutPage/about.js";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Project from "./Components/Projectpage/projects.js";
// TODO(blog): re-enable when blog data is restored
// import Article from "./Components/Articlespage/articles.js";
import Pics from "./Components/PicturePage/picspage.js";
// TODO(blog): login/register/admin need the backend API. Re-enable together with the blog.
// import Login from "./Components/Login/login.js";
// import RegistrationPage from "./Components/Register/register.js"
// import Admin from "./Components/Admin/createpost.js";
// import ProtectedRoute from "./prot.js";


const PageRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<App />} />
        {/* TODO(blog): <Route path="/login" exact element={<Login />} /> */}
        {/* TODO(blog): <Route path="/register" exact element={<RegistrationPage />} /> */}
        {/* TODO(blog): <Route path="/admin" exact element={<ProtectedRoute element={Admin} />} /> */}
        {/* TODO(blog): <Route path="/admin/:postid" exact element={<Admin />} /> */}
        {/* TODO(blog): <Route path="/blog/:postid" exact element={<BlogPage />} /> */}
        <Route path="/about" exact element={<About />} />
        <Route path="/projects" exact element={<Project />} />
        {/* TODO(blog): <Route path="/blog" exact element={<Article />} /> */}
        <Route path="/pictures" exact element={<Pics/>} />
      </Routes>
    </Router>
  );
};

export default PageRoute;
