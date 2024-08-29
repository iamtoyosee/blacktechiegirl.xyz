import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import Logo from "../../assets/infini.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const token = localStorage.getItem("authToken");

  const logout = () => {
    localStorage.removeItem("authToken");
    navigate("/"); // Optionally redirect after logout
  };

  return (
    <div className="fixed top-0 w-full overscroll-none z-50 bg-black">
      <div
        className={
          showMenu
            ? "translate-x-0 duration-500 ease-out"
            : "-translate-x-52"
        }
      >
        {showMenu ? (
          <div className="h-[100vh] fixed top-0 w-full bg-black text-white font-smalltech">
            <p
              className="font-bigtech absolute right-5 top-2 cursor-pointer"
              onClick={() => setShowMenu(false)}
            >
              <AiOutlineClose />
            </p>
            <ul className="p-10">
              <li
                className="py-4 px-5 cursor-pointer"
                onClick={() => {
                  setShowMenu(false);
                  navigate("/");
                }}
              >
                Home
              </li>
              <li
                className="py-4 px-5 cursor-pointer"
                onClick={() => {
                  setShowMenu(false);
                  navigate("/about");
                }}
              >
                About
              </li>
              <li
                className="py-4 px-5 cursor-pointer"
                onClick={() => {
                  setShowMenu(false);
                  navigate("/projects");
                }}
              >
                Projects
              </li>
              <li
                className="py-4 px-5 cursor-pointer"
                onClick={() => {
                  setShowMenu(false);
                  navigate("/youtube");
                }}
              >
                Youtube
              </li>
              <li
                className="py-4 px-5 cursor-pointer"
                onClick={() => {
                  setShowMenu(false);
                  navigate("/blog");
                }}
              >
                Blog
              </li>
              {token ? (
                <li
                  className="py-4 px-5 text-white cursor-pointer"
                  onClick={logout}
                >
                  Logout
                </li>
              ) : null}
            </ul>
          </div>
        ) : null}
      </div>
      <nav className="bg-black">
        <div className="max-w-[90%] 2xl:max-w-[70%] flex flex-wrap items-center justify-between mx-auto py-4">
          <a className="flex items-center">
            <img
              src={Logo}
              className="w-12 lg:w-16 cursor-pointer"
              alt="Logo"
              onClick={() => navigate("/")}
            />
          </a>
          <button
            onClick={() => setShowMenu(!showMenu)}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border lg:text-[18px] md:flex-row md:space-x-8 md:mt-0 md:border-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "block p-2 ml-3 mr-4 font-smalltech text-white border-b-2 border-b-fuchsia-800"
                      : "block p-2 ml-3 mr-4 font-smalltech text-white"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 pl-3 pr-4 font-smalltech text-white border-b-2 border-b-fuchsia-800"
                      : "block py-2 pl-3 pr-4 font-smalltech text-white"
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 pl-3 pr-4 font-smalltech text-white border-b-2 border-b-fuchsia-800"
                      : "block py-2 pl-3 pr-4 font-smalltech text-white"
                  }
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 pl-3 pr-4 font-smalltech text-white border-b-2 border-b-fuchsia-800"
                      : "block py-2 pl-3 pr-4 font-smalltech text-white"
                  }
                >
                  Blog
                </NavLink>
              </li>
              {token ? (
                <li>
                  <NavLink
                    to="/"
                    className="block py-2 pl-3 pr-4 font-smalltech text-white"
                    onClick={logout}
                  >
                    Logout
                  </NavLink>
                </li>
              ) : null}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
