import React, { forwardRef } from "react";

const Vision = forwardRef((ref) => {
  return (
    <div ref={ref} id="vision" className="bg-gradient-to-br from-violet-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-10">
          Vision and Values
        </h2>

        <p className="leading-relaxed text-base sm:text-lg text-gray-700">
          Vjeera reskilling institute works extensively in the area of skill
          enhancement and youth employability. Hundreds of young professionals
          every year accelerate their careers by undertaking its wide range of
          certification programmes. These programmes are delivered through a
          100% practical approach by an experienced team of industry experts.
          <br />
          <br />
          Vjeera has successfully partnered with Times Group through which it
          provides executive education for working professionals from premium
          management institutes.
          <br />
          <br />
          Vjeera provides consulting in the area of Sales, Marketing, Business
          Development, Inside Sales, Sales Excellence through experts with
          decades of experience across sectors and industries.
        </p>

        <h3 className="mt-8 text-lg sm:text-xl font-bold text-violet-800">
          Vjeera focuses on 5 key areas of development:
        </h3>

        <ul className="list-disc pl-6 mt-4 space-y-2 text-base sm:text-lg text-gray-700">
          <li>Corporate Training</li>
          <li>One-on-One and Team Coaching</li>
          <li>Sales and Leadership Consulting Services</li>
          <li>Certification Programs for Young Professionals</li>
          <li>Executive Education Programs from Premium Institutes</li>
        </ul>

        <p className="mt-8 leading-relaxed text-base sm:text-lg text-gray-700">
          Vjeera training programs and its alumni of the reskilling center have
          been widely recognized across various respected forums and
          organizations.
        </p>
      </div>
    </div>
  );
});

export default Vision;