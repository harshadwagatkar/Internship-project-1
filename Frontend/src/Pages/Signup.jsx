import React from "react";
import { User, Mail, Lock, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";

const SignUp = () => {


  
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-100 via-white to-purple-50 flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">

        <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-violet-100 via-white to-purple-100 px-12 py-14">

          <div className="max-w-md">
            <div className="w-14 h-14 rounded-2xl bg-violet-500 flex items-center justify-center mb-6">
              <UserPlus size={30} color="white" />
            </div>

            <h1 className="text-4xl font-bold text-gray-900 leading-tight">
              Start Your
              <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Learning Journey
              </span>
            </h1>

            <p className="text-gray-600 mt-5 leading-relaxed">
              Create your account and explore professional HR training,
              certifications, and learning opportunities with Vjeera.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-violet-500"></div>
                <span className="text-gray-600">
                  Professional HR Training
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-violet-500"></div>
                <span className="text-gray-600">
                  Industry-focused Certifications
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-violet-500"></div>
                <span className="text-gray-600">
                  Career Growth Opportunities
                </span>
              </div>
            </div>
          </div>
        </div>


        {/* Sign up */}
        <div className="px-6 sm:px-10 lg:px-14 py-10 sm:py-14">

          <div className="max-w-md mx-auto">


            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 ">
                Create Account
              </h2>

              <p className="text-gray-500 mt-2">
                Sign up to get started
              </p>
            </div>

            <form className="space-y-5">

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Username
                </label>

                
                  <input
                    type="text"
                    placeholder="Enter your username"
                    className="w-full pl-5 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-violet-100"
                  />
              
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full pl-5 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-violet-100"
                  />
              </div>


              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>



                  <input
                    type="password"
                    placeholder="Create a password"
                    className="w-full pl-5 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-violet-100"
                  />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-violet-500 text-white font-semibold transition-all duration-300 hover:bg-violet-600 hover:shadow-lg hover:shadow-violet-200 hover:-translate-y-0.5"
              >
                Create Account
              </button>
            </form>


            <p className="text-center text-sm text-gray-500 mt-7">
              Already have an account?{" "}
              <Link
                to="/signin"
                className="font-semibold text-violet-600 hover:text-purple-600"
              >
                Sign In
              </Link>
            </p>

          </div>
        </div>

      </div>
    </div>
  );
};

export default SignUp;