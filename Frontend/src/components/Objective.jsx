import React, { forwardRef } from "react";
import {
  BadgeCheck,
  BookOpenText,
  BriefcaseBusiness,
  Handshake,
  Target,
  Users,
} from "lucide-react";

const Objective = forwardRef((ref) => {
  const leftItems = [
    {
      title: "Practical HR Training",
      description:
        "Build job-ready skills through hands-on learning in core HR functions.",
      icon: Target,
    },
    {
      title: "Career-Focused Learning",
      description:
        "Align every session with real workplace expectations and hiring needs.",
      icon: BriefcaseBusiness,
    },
    {
      title: "Teamwork & Communication",
      description:
        "Strengthen collaboration, employee interaction, and professional confidence.",
      icon: Users,
    },
  ];

  const rightItems = [
    {
      title: "Industry-Relevant Knowledge",
      description:
        "Gain exposure to HR practices that are useful in modern organizations.",
      icon: BookOpenText,
    },
    {
      title: "Professional Growth",
      description:
        "Prepare for HR roles with structured guidance and practical exposure.",
      icon: BadgeCheck,
    },
    {
      title: "Job Readiness",
      description:
        "Develop the confidence and skills needed to succeed in HR interviews.",
      icon: Handshake,
    },
  ];

  return (
    <div ref={ref} id="program-objective" className="bg-gradient-to-br from-violet-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Program Objective
          </h2>

          <p className="text-base sm:text-lg text-gray-500">
            To Enable HR Practical Training and Job-Focused Knowledge in the HR
            Domain
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Left Column */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            {leftItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="flex items-start gap-4 rounded-2xl border border-violet-100 bg-white/80 p-4 sm:p-5 shadow-sm shadow-violet-100"
                >
                  <div className="rounded-2xl bg-violet-600 p-3 text-white shadow-md flex-shrink-0">
                    <Icon size={20} className="sm:w-[22px] sm:h-[22px]" />
                  </div>

                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold text-gray-900">
                      {item.title}
                    </h4>

                    <p className="mt-1 text-sm sm:text-base leading-relaxed text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            {rightItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="flex items-start gap-4 rounded-2xl border border-violet-100 bg-white/80 p-4 sm:p-5 shadow-sm shadow-violet-100"
                >
                  <div className="rounded-2xl bg-violet-600 p-3 text-white shadow-md flex-shrink-0">
                    <Icon size={20} className="sm:w-[22px] sm:h-[22px]" />
                  </div>

                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold text-gray-900">
                      {item.title}
                    </h4>

                    <p className="mt-1 text-sm sm:text-base leading-relaxed text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
});

export default Objective;