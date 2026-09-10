import { LucideRocket, TimerIcon } from "lucide-react";
import React, { forwardRef } from "react";

const NextBatch = forwardRef((ref) => {
  const batches = [
    {
      title: "HR Generalist Training Course",
      date: "10th Aug",
    },
    {
      title: "HR Analytics Training",
      date: "14th Aug",
    },
  ];

  return (
    <div ref={ref} id="courses" className="bg-gradient-to-br from-violet-50 via-white to-purple-50">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-8 text-center">
        <span className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
          <TimerIcon size={16} />
          Next Batches
        </span>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Next Batch Schedule
        </h1>

        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Admission opens
        </p>
      </div>

      {/* Batch Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 flex flex-col gap-5">
        {batches.map((item, index) => (
          <div
            key={index}
            className="w-full p-5 sm:p-6 lg:p-9 bg-indigo-100 border-l-[5px] border-indigo-500 rounded-md flex flex-col sm:flex-row gap-4 sm:gap-5 sm:items-center transition-all duration-300 hover:shadow-lg"
          >
            <div className="flex justify-center sm:block">
              <LucideRocket size={28} />
            </div>

            <div className="text-center sm:text-left">
              <h5 className="text-lg sm:text-xl font-semibold">
                {item.title}
              </h5>

              <p className="text-sm text-gray-600 mt-1">
                Next batch starts{" "}
                <span className="font-semibold">{item.date}</span> : Sat: 6 PM –
                9 PM &amp; Sun: 2 PM – 5 PM
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default NextBatch;