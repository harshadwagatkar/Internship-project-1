import React, { forwardRef } from "react";
import { 
  Users, 
  FileText, 
  BarChart3, 
  Briefcase, 
  Calendar, 
  Award,
  ArrowRight,
  Building2,
  Scale,
  GraduationCap,
  Sparkles,
  TrendingUp,
  FileCheck,
  UserCheck,
  ClipboardCheck,
  BookOpen,
  Database,
  Cloud,
  GanttChart,
  Presentation,
  UserCog,
  Activity,
  Network
} from "lucide-react";

const CoursesPage = forwardRef((ref) => {
  const courseCategories = [
    {
      id: "talent-acquisition",
      title: "Talent Acquisition",
      icon: Users,
      color: "from-violet-500 to-indigo-500",
      bgColor: "bg-violet-50",
      borderColor: "border-violet-100",
      hoverBg: "hover:bg-violet-50/50",
      courses: [
        { name: "Recruitment & Selection", icon: UserCheck },
        { name: "Portal Training", icon: Cloud },
        { name: "Personality & Psychometric Test", icon: ClipboardCheck },
        { name: "Effective Onboarding", icon: Users },
        { name: "Competency Based Interviews", icon: Users },
      ]
    },
    {
      id: "payroll-compliance",
      title: "Payroll",
      icon: Scale,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-100",
      hoverBg: "hover:bg-blue-50/50",
      courses: [
        { name: "Statutory Compliance", icon: FileCheck },
        { name: "Practical Advanced Excel", icon: FileText },
        { name: "System Training", icon: Database },
        { name: "Labour Law", icon: Scale },
        { name: "Payroll Input", icon: FileText },
      ]
    },
    {
      id: "strategic-hrm",
      title: "Strategic HRM",
      icon: TrendingUp,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-100",
      hoverBg: "hover:bg-purple-50/50",
      courses: [
        { name: "Training & Development", icon: Presentation },
        { name: "HR Policies", icon: FileText },
        { name: "HR Business Partner", icon: UserCog },
        { name: "Basics of HR Analytics", icon: Activity },
        { name: "SAP HCM Overview", icon: Network },
      ]
    }
  ];

  return (
    <div ref={ref} id="courses" className="bg-gradient-to-br from-violet-50 via-white to-purple-50 min-h-screen">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles size={16} />
            Our Programs
          </span>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            HR Generalist
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent italic ml-3">
              Programme
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive HR training designed to build practical skills and 
            confidence. Equip your HR team to solve real workplace challenges.
          </p>
        </div>
      </div>

      {/* Course Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {courseCategories.map((category, index) => (
            <div
              key={category.id}
              className={`${category.bgColor} rounded-3xl p-8 border ${category.borderColor} 
                transition-all duration-500 hover:shadow-xl hover:shadow-${category.bgColor}/50 
                ${category.hoverBg} hover:-translate-y-2 relative overflow-hidden group`}
            >
              {/* Decorative Gradient Blob */}
              <div className={`absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-br ${category.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Category Header */}
              <div className="flex items-start gap-4 mb-6 relative z-10">
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${category.color} shadow-lg shadow-${category.color.split(' ')[1]}/20`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">
                    {category.title}
                  </h2>
                  <span className={`inline-flex items-center gap-1 text-sm font-medium bg-white/60 px-3 py-1 rounded-full ${category.bgColor}`}>
                    <GraduationCap size={14} />
                    {category.courses.length} Modules
                  </span>
                </div>
              </div>

              {/* Courses List */}
              <ul className="space-y-3 relative z-10">
                {category.courses.map((course, idx) => (
                  <li
                    key={idx}
                    className={`flex items-center gap-3 p-3 rounded-xl bg-white/60 backdrop-blur-sm 
                      border ${category.borderColor} transition-all duration-300
                      hover:bg-white hover:shadow-md hover:shadow-${category.bgColor}/30 
                      cursor-pointer group/item`}
                  >
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color} bg-opacity-10`}>
                      <course.icon className={`w-4 h-4 text-${category.color.split(' ')[0].replace('from-', '')}`} />
                    </div>
                    <span className="text-gray-700 font-medium text-sm flex-1">
                      {course.name}
                    </span>
                    <ArrowRight className={`w-4 h-4 text-gray-300 group-hover/item:text-${category.color.split(' ')[0].replace('from-', '')} transition-colors`} />
                  </li>
                ))}
              </ul>

              {/* Footer Link */}
              <div className="mt-8 pt-6 border-t border-white/50 relative z-10">
                <button className={`w-full py-3 rounded-xl bg-gradient-to-r ${category.color} text-white font-medium 
                  shadow-lg shadow-${category.color.split(' ')[1]}/20 hover:shadow-xl hover:shadow-${category.color.split(' ')[1]}/30 
                  transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2`}>
                  <Award size={18} />
                  View All Modules
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-violet-100 via-indigo-50 to-purple-100 rounded-3xl p-12 text-center border border-violet-200/50 shadow-lg shadow-violet-200/30">
          <h3 className="text-3xl font-bold text-gray-900 mb-3">
            Ready to Build Your HR Career?
          </h3>
          <p className="text-gray-600 max-w-xl mx-auto mb-6">
            Join our comprehensive HR Generalist Programme and transform your 
            career with practical, industry-ready skills.
          </p>
          <button className="bg-violet-500 text-white px-10 py-4 rounded-2xl font-semibold 
            shadow-lg shadow-indigo-200/50 hover:shadow-xl hover:shadow-indigo-300/50 
            transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] 
            flex items-center gap-3 mx-auto">
            <BookOpen size={20} />
            Enroll Now
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
});

export default CoursesPage;