import React, { forwardRef } from "react";

const About = forwardRef((ref) => {
  const images = [
    "https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1741884484357-e2ce2d35c4a9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=1147&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <div ref={ref} id="about" className="bg-gradient-to-br from-violet-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 flex flex-col lg:flex-row items-center gap-10">

        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-bold mb-5 text-center lg:text-left">
            Our Story
          </h2>

          <p className="leading-relaxed text-base sm:text-lg text-center lg:text-left">
            Vjeera is one of the most admired talent transformational and
            reskilling organisations enabling sustainable business and
            organisational culture impact. An{" "}
            <span className="text-violet-800 font-bold">
              ISO 9001:2015
            </span>{" "}
            certified company, its mission is to improve business productivity
            and enhance leadership development across the organisation.

            <br />
            <br />

            It is providing 360-degree training solutions from entry-level to
            senior management. It imparts highly engaging corporate training,
            workshops and coaching services with a clear focus on results while
            developing holistic learning for the participants.
          </p>
        </div>

        {/* Image Gallery */}
        <div className="w-full lg:w-1/2 overflow-x-auto scroll-smooth">
          <div className="flex gap-4">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`About ${index + 1}`}
                className="flex-shrink-0 w-72 sm:w-80 lg:w-72 h-56 sm:h-64 object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
});

export default About;