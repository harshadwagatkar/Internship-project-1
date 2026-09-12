import { Link } from "react-router-dom";
import React from 'react'

const Signin = () => {
    


  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-100 via-white to-purple-50 flex items-center justify-center px-4 py-10">
      {/* Sign in */}
        <div className="w-full max-w-2xl rounded-xl bg-gradient-to-br from-purple-100 via-white to-violet-50 px-6 sm:px-10 lg:px-14 py-10 sm:py-14">

          <div className="max-w-md mx-auto">


            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 ">
                Sign In
              </h2>

              <p className="text-gray-500 mt-2">
                Sign in to get started
              </p>
            </div>

            <form className="space-y-5">

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
                    placeholder="Enter your password"
                    className="w-full pl-5 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-violet-100"
                  />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-violet-500 text-white font-semibold transition-all duration-300 hover:bg-violet-600 hover:shadow-lg hover:shadow-violet-200 hover:-translate-y-0.5"
              >
                Login
              </button>
            </form>


            <p className="text-center text-sm text-gray-500 mt-7">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="font-semibold text-violet-600 hover:text-purple-600"
              >
                Sign Up
              </Link>
            </p>

          </div>
        </div>
    </div>
  )
}

export default Signin
