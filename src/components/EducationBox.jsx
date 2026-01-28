import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const EducationBox = ({ education }) => {
  const { isDark } = useContext(ThemeContext);

  return (
    <div
      className={`p-6 md:p-8 rounded-2xl transition-all duration-300 ${isDark ? "bg-slate-800/50 border border-slate-700/50 hover:border-slate-600 hover:shadow-lg hover:shadow-slate-700/50" : "bg-gray-50 border border-gray-200 hover:border-gray-300 hover:shadow-lg hover:shadow-gray-400/20"}`}
    >
      <div className="flex items-center justify-between gap-6">
        {/* Logo */}
        {education.logo && (
          <a
            href={education.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0"
          >
            <img
              src={education.logo}
              alt={education.name}
              className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-blue-500 hover:opacity-80 transition-opacity"
            />
          </a>
        )}

        {/* Content */}
        <div className="flex-1">
          <a
            href={education.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-lg md:text-xl font-bold hover:underline ${isDark ? "text-white" : "text-gray-900"}`}
          >
            {education.name}
          </a>
          <p
            className={`text-sm md:text-base ${isDark ? "text-gray-400" : "text-gray-600"}`}
          >
            {education.program}
          </p>
        </div>

        {/* Duration & Grade */}
        <div className="flex flex-col items-end gap-2 flex-shrink-0">
          <span
            className={`text-sm md:text-base font-semibold ${isDark ? "text-gray-400" : "text-gray-700"}`}
          >
            {education.duration}
          </span>
          <span
            className={`text-sm md:text-base font-bold px-3 py-1 rounded-lg ${isDark ? "bg-slate-700 text-rose-300" : "bg-rose-100 text-rose-700"}`}
          >
            {education.grade}
          </span>
        </div>
      </div>
    </div>
  );
};

export default EducationBox;
