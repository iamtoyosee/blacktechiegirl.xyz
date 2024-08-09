import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose} from "react-icons/ai";
import Logo from "../../assets/infini.png"
const Navbar = () => {
    const navigate = useNavigate()
    const [showMenu, setShowMenu] = useState(false);

    const token = localStorage.getItem("authToken");

    const logout = () => {
      localStorage.removeItem("authToken");
    }



    return(
        <div className="fixed top-0 w-full overscroll-none z-50">
              <div
        className={
          showMenu
            ? "  translate-x-0 duration-500 ease-out"
            : "  -translate-x-52"
        }
      >
        {showMenu ? (
          <div
            className={`h-[100vh] fixed top-0 w-full bg-black text-white font-smalltech`}
          >
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
                  setShowMenu(false)
                  navigate("/")}}
              >
                Home
              </li>
              <li
                className="py-4 px-5  cursor-pointer"
                onClick={() => {
                  setShowMenu(false)
                  navigate("/about")}}
              >
                About
              </li>
              <li
                className="py-4 px-5  cursor-pointer"
                onClick={() => {
                  setShowMenu(false)
                  navigate("/projects")}}
              >
                Projects
              </li>
              <li
                className="py-4 px-5  cursor-pointer"
                onClick={() => {
                  setShowMenu(false)
                  navigate("/")}}
              >
                Youtube
              </li>
              <li
                className="py-4 px-5  cursor-pointer"
                onClick={() => {
                  setShowMenu(false)
                  navigate("/blog")}}
              >
                Blog
              </li>
              <li
                className="py-4 px-5  cursor-pointer"
                onClick={() => {
                  setShowMenu(false)
                  navigate("/category/sunscreen")}}
              >
                Contact
              </li>



            </ul>
          </div>
        ) : null}
      </div>
            <nav className="dark:bg-black">
                <div className=" max-w-[90%] 2xl:max-w-[70%] flex flex-wrap items-center justify-between mx-auto py-4">
                    <a  className="flex items-center">
                        <p className='text-white font-bold text-2xl cursor-pointer' onClick={() => navigate("/")} >                <img src={Logo} className="" />
                        </p>
                    </a>
                    <button  onClick={() => setShowMenu(!showMenu)} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border lg:text-[18px]  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
                            <li>
                                <a href="#" className="block p-2 ml-3 mr-4 font-smalltech text-white border-b-2 border-b-fuchsia-800" onClick={() => navigate("/")}>Home</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pl-3 pr-4 font-smalltech text-white  " onClick={() => navigate("/about")}>About</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pl-3 pr-4 font-smalltech text-white  "onClick={() => navigate("/projects")}>Projects</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pl-3 pr-4 font-smalltech text-white  "onClick={() => navigate("/blog")}>Blog</a>
                            </li>
                            {token ?  <li>
                                <a href="#" className="block py-2 pl-3 pr-4 font-smalltech text-white  "onClick={() => logout()}>Logout</a>
                            </li>: null}
                           
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}


export default Navbar;