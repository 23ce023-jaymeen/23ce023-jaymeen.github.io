import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const SkillBox = ({ category, items }) => {
  const { isDark } = useContext(ThemeContext);

  return (
    <div
      className={`p-6 md:p-8 rounded-2xl transition-all duration-300 backdrop-blur-sm ${
        isDark
          ? "bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/70 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/20"
          : "bg-gradient-to-br from-white to-gray-50 border border-gray-300 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-400/30"
      }`}
    >
      <div className="flex items-center gap-2 mb-8">
        <div
          className={`w-1 h-6 rounded-full ${
            isDark
              ? "bg-gradient-to-b from-cyan-400 to-indigo-500"
              : "bg-gradient-to-b from-cyan-500 to-indigo-600"
          }`}
        />
        <h3
          className={`text-xl md:text-2xl font-bold tracking-tight ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          {category}
        </h3>
        <span
          className={`ml-auto text-xs md:text-sm font-semibold px-3 py-1 rounded-full ${
            isDark
              ? "bg-slate-700/80 text-cyan-300"
              : "bg-cyan-100 text-cyan-700"
          }`}
        >
          {items.length} skills
        </span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {items.map((item, index) => {
          const skillName = typeof item === "string" ? item : item.name;
          const skillLogo = typeof item === "object" ? item.logo : null;

          return (
            <div
              key={index}
              className={`aspect-square flex flex-col items-center justify-center p-4 md:p-6 rounded-2xl transition-all duration-300 group cursor-pointer transform hover:-translate-y-1 ${
                isDark
                  ? "bg-gradient-to-br from-slate-700/80 to-slate-800/60 border border-slate-600/60 hover:border-cyan-500/60 hover:shadow-xl hover:shadow-cyan-500/30"
                  : "bg-gradient-to-br from-gray-50 to-white border border-gray-300 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-400/30"
              }`}
            >
              {skillLogo && (
                <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mb-3 p-2 rounded-xl transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-cyan-500/20 group-hover:to-indigo-500/20">
                  <img
                    src={skillLogo}
                    alt={skillName}
                    className="w-full h-full object-contain group-hover:scale-125 transition-transform duration-300 drop-shadow-sm"
                  />
                </div>
              )}
              <span
                className={`text-sm md:text-base font-semibold text-center group-hover:text-cyan-300 transition-colors duration-300 ${
                  isDark ? "text-gray-200" : "text-gray-800"
                }`}
              >
                {skillName}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillBox;
