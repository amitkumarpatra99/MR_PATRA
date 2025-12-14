import React, { useState } from "react";
import { experiences } from "../../constants"; // Import your data
import { ArrowRight } from "lucide-react";


const Experience = () => {


  return (
    <section
      id="experience"
      className=" pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-transparent dark:bg-skills-gradient clip-path-custom-2 relative" >
      {/* Section Title */}
      <div className="text-center mb-16">
        <p className="text-gray-400 text-sm tracking-[3px] uppercase">
          <span className="text-teal-600">Explore</span> My
        </p>
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white cursor-pointer hover:scale-105 transform transition-transform duration-300">EXPER
          <span className="text-teal-500">IENCE</span></h2>
        <div className="w-32 h-[3px] rounded-full mx-auto mb-3 mt-3  bg-gradient-to-r from-[#2351A8] via-[#4FB7B3] to-[#2CB67D] shadow-[0_0_10px_#4FB7B3]"></div>

      </div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-gradient-to-r from-[#2351A8] via-[#4FB7B3] to-[#2CB67D] shadow-[0_0_10px_#4FB7B3] h-full"></div>


        {/* Experience Entries */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"}`}>

            {/* Timeline Circle */}
            <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-2 border-[#4FB7B3] shadow-[0_0_10px_#4FB7B3] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10 lg:hidden">
              <img
                src={experience.img}
                alt={experience.company}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Content Section */}
            <div
              className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl border border-white/60 dark:border-[#4FB7B3] backdrop-blur-md shadow-lg shadow-slate-200/50 dark:shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
                } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105 hover:shadow-[#4FB7B3] hover:-translate-y-2 bg-white dark:bg-transparent`}
              style={{}}>

              {/* Dark mode background handled via class `dark:bg-gradient-to-b` if needed, or keeping transparent/custom */}
              <div className="absolute inset-0 rounded-2xl -z-10 bg-white dark:bg-gradient-to-b dark:from-[#042C33] dark:to-[#0E1314] opacity-100"></div>

              {/* Flex container for image and text */}
              <div className="flex items-center space-x-6">
                {/* Company Logo/Image */}
                <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Role, Company Name, and Date */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white">
                      {experience.role}
                    </h3>
                    <h4 className="text-md sm:text-sm mt-1 text-gray-600 dark:text-gray-300">
                      {experience.company}
                    </h4>
                  </div>
                  {/* Date at the bottom */}
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                    <span className="mr-1 text-slate-700 dark:text-slate-300 font-semibold"> Duration: </span>{experience.date}</p>
                </div>
              </div>

              <p className="mt-4 text-slate-600 dark:text-slate-300"><span className="text-slate-700 dark:text-slate-300 font-semibold m-1 mr-1">Project:</span>{experience.project}</p>

              <div className="mt-4">
                <ul className="flex flex-wrap mt-2">
                  <span className="text-slate-700 dark:text-slate-300 font-semibold mr-2">Skill:</span>
                  {experience.skills.map((skill, index) => (
                    <li
                      key={index}
                      className="inline-block  bg-[#173130] text-xs font-semibold text-[#4FB7B3] rounded-full px-2 py-1 mr-2 mb-2  hover:scale-105 transition-all duration-300 cursor-pointer">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              <a href={experience.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-0.5 px-5 py-2.5 mt-5 rounded-full font-medium text-teal-600 dark:text-white bg-teal-50 dark:bg-[#071e22]/80 backdrop-blur-xl border border-teal-200 dark:border-[#4FB7B3]/40 shadow-sm dark:shadow-[0_0_12px_rgba(79,183,179,0.25)] hover:bg-teal-100 dark:hover:bg-[#0b2e33]/80 transition-all duration-300 w-36">
                Certificate <ArrowRight size={18} />
              </a>

            </div>
          </div>
        ))}
      </div>


    </section >
  );
};

export default Experience;
