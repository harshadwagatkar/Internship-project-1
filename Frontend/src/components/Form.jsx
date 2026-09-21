import { Contact } from "lucide-react";
import React, { forwardRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { serverUrl } from "../App";

const Form = forwardRef((prop, ref) => {
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    if(isAuthenticated) {
      setFormData((prev) => ({
        ...prev, 
        name : user.username || "",
        email : user.email || ""
      }))
    }
  }, [isAuthenticated, user])


  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev, 
      [e.target.name] : e.target.value
    }))
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isAuthenticated) {
      navigate("/signin");
      return;
    }

    try {
      const response = await axios.post(
        serverUrl + "/api/user/submit-feedback",
        formData,
        {
          withCredentials: true,
        },
      );

      if (response.data.success) {
        console.log(response.data);

        setFormData({
          name: user?.username || "",
          email: user?.email || "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        console.log("Feedback form not submitted...");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      ref={ref}
      id="contact"
      className="bg-gradient-to-br from-violet-50 via-white to-purple-50 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col p-5">
            <span className="w-fit flex items-center gap-2 bg-violet-100 text-violet-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Contact size={16} />
              Contact Us
            </span>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Let's talk about your next <br />
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent italic ml-3">
                Batch
              </span>
            </h1>
            <p className="text-gray-600 mb-10">
              Have a question about a course, corporate workship, or placement
              support ? Send us a message and our team will get back to you.
            </p>

            <span className="font-semibold text-sm text-blue-700">ADDRESS</span>
            <p className="text-gray-600 mb-10">
              R-22 Pencil Chowk, Baramati, Pune
            </p>

            <span className="font-semibold text-sm text-blue-700">PHONE</span>
            <p className="text-gray-600 mb-10">+1234567890</p>
          </div>

          <div className="flex flex-col p-5 bg-fuchsia-50 rounded-sm">
            <form
              className="flex flex-col w-full gap-2"
              onSubmit={handleSubmit}
            >
              <label htmlFor="" className="text-sm text-gray-600">
                NAME
              </label>
              <input
                onChange={handleChange}
                type="text"
                value={formData.name}
                name="name"
                placeholder="Enter name"
                className="outline-none p-2 bg-violet-100 border border-gray-300 rounded-sm mb-4"
              />
              <label htmlFor="" className="text-sm text-gray-600">
                EMAIL
              </label>
              <input
                onChange={handleChange}
                type="email"
                value={formData.email}
                name="email"
                placeholder="Enter email"
                className="outline-none p-2 bg-violet-100 border border-gray-300 rounded-sm mb-4"
              />
              <label htmlFor="" className="text-sm text-gray-600">
                PHONE
              </label>
              <input
                onChange={handleChange}
                name="phone"
                value={formData.phone}
                type="phone"
                placeholder="Enter number"
                className="outline-none p-2 bg-violet-100 border border-gray-300 rounded-sm mb-4"
              />
              <label htmlFor="" className="text-sm text-gray-600">
                SUBJECT
              </label>
              <input
                onChange={handleChange}
                name="subject"
                value={formData.subject}
                type="text"
                placeholder="Subject"
                className="outline-none p-2 bg-violet-100 border border-gray-300 rounded-sm mb-4"
              />
              <label htmlFor="" className="text-sm text-gray-600">
                MESSAGE
              </label>
              <textarea
                onChange={handleChange}
                name="message"
                value={formData.message}
                type="text"
                placeholder="Tell us how we can help"
                className="outline-none p-2 bg-violet-100 border border-gray-300 rounded-sm mb-5"
              />

              <button
                className="bg-violet-500 py-3 px-6 rounded-sm text-white hover:shadow-xl hover:scale-98 transition-all duration-200"
                type="submit"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
});

// About.displayName = "About";
export default Form;
