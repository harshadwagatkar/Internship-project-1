import React, { forwardRef } from "react";
import { BookOpenText, GraduationCap, Handshake } from "lucide-react";

const Hero = forwardRef((ref) => {
  return (
    <div ref={ref} id="home" className="bg-gradient-to-br from-violet-200 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">

        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="leading-tight text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Best{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent italic">
              HR Proofessional
            </span>
            <br />
            Training Services
          </h1>

          <p className="text-base sm:text-lg text-gray-600 max-w-lg mx-auto lg:mx-0">
            Empowering Talent. Transforming Business Culture. At Vjeera, we
            deliver 360-degree talent transformation and reskilling solutions
            designed to elevate leadership, enhance youth employability, and
            drive sustainable corporate productivity.
            <br />
            From entry-level professional certifications to executive education
            programs in partnership with premium institutes, our
            results-focused corporate training and expert consulting empower
            individuals and organizations to build holistic learning
            environments and unlock limitless opportunities.
          </p>

          {/* Icons */}
          <div className="flex justify-center lg:justify-between gap-4 sm:gap-6 lg:gap-0 mt-10 max-w-md mx-auto lg:mx-0">
            <div className="px-6 sm:px-8 lg:px-10 py-2 rounded-full bg-violet-500 transition-all duration-300 hover:shadow-[0_20px_45px_rgba(139,92,246,0.35)] hover:-translate-y-1">
              <GraduationCap color="white" size={30} />
            </div>

            <div className="px-6 sm:px-8 lg:px-10 py-2 rounded-full bg-violet-500 transition-all duration-300 hover:shadow-[0_20px_45px_rgba(139,92,246,0.35)] hover:-translate-y-1">
              <BookOpenText color="white" size={30} />
            </div>

            <div className="px-6 sm:px-8 lg:px-10 py-2 rounded-full bg-violet-500 transition-all duration-300 hover:shadow-[0_20px_45px_rgba(139,92,246,0.35)] hover:-translate-y-1">
              <Handshake color="white" size={30} />
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 p-2 sm:p-4 lg:p-5 overflow-hidden">
          <img
            src="https://plus.unsplash.com/premium_photo-1683120730432-b5ea74bd9047?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="HR Training"
            className="w-full rounded-2xl object-cover"
          />
        </div>
      </div>
    </div>
  );
});

export default Hero;