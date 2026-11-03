import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { serverUrl } from "../App";
import { clearUser } from "../redux/slices/authSlice";
 
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [logoutTitle, setLogoutTitle] = useState("Login")

  const {user, isAuthenticated} = useSelector((state) => state.auth)
  useEffect(() => {
    setLogoutTitle(isAuthenticated ? "Logout" : "Login")
  }, [isAuthenticated])


  const navLinks = [
    { label: "Home", id: "home" },
    { label: "About Us", id: "about" },
    { label: "Vision and Values", id: "vision" },
    { label: "Program Objective", id: "program-objective" },
    {label : "Courses", id:"courses"},
    { label: "Contact Us", id: "contact" },
    // {label : isAuthenticated ? "Logout" : "Login", id : "auth"}
  ];


  const handleScroll = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -20; 
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setIsOpen(false);
  };


  const handleAuth = async(e) => {
    e.preventDefault()
    setIsOpen(false)

    if(!isAuthenticated) {
      navigate("/signin")
      return
    }

    const loadingToastId = toast.loading("Logging out...")

    try {
      const response = await axios.get(
        serverUrl + "/api/auth/logout",
        {withCredentials : true}
      )

      if(response.data.success) {
        dispatch(clearUser())
        toast.update(loadingToastId, {
          render : "Logged out successfully",
          type : "success",
          isLoading : false,
          autoClose : 2000,
        })
        navigate("/")

      } else {
        toast.update(loadingToastId, {
          render: response.data.message || "Logout failed",
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
      }

    } catch (error) {
      console.log(error);
      toast.update(loadingToastId, {
        render:
          error.response?.data?.message ||
          "Something went wrong while logging out",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Vijeera HR
          </h1>
          <span className="text-xs sm:text-sm font-medium text-gray-500">
            Professional HR Academy
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex justify-between w-2/3">
          {navLinks.map((link) => (
            <a
              key={link.id}
              // href={`#${link.id}`}
              onClick={(e) => handleScroll(e, link.id)}
              className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200 whitespace-nowrap cursor-pointer"
            >
              {link.label}
            </a>
          ))}


          <a
            onClick={handleAuth}
            className={`font-medium transition-colors duration-200 whitespace-nowrap cursor-pointer ${
              isAuthenticated
                ? "text-red-600 hover:text-red-700"
                : "text-indigo-600 hover:text-purple-600"
            }`}
          >
            {/* {isAuthenticated ? "Logout" : "Login"} */}
            {logoutTitle}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-700"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t shadow-md">
          <div className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleScroll(e, link.id)}
                className="text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;