import React from "react";

const Courses = () => {
  return (
    <div className="bg-[linear-gradient(rgba(255,255,255,0.9),rgba(255,255,255,0.9)),url('https://images.unsplash.com/photo-1579389083078-4e7018379f7e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat bg-center bg-cover h-screen flex">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-5">Our Courses</h2>
        <div className="w-7xl h-full bg-red-200">
          <div>
            <h4>Something</h4>
            <img src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <br />
          </div>
        </div>
      </div>
    </div>

  );
};

export default Courses;
// bg-[url('url')] bg-no-repeat bg-center bg-cover
// url : "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
