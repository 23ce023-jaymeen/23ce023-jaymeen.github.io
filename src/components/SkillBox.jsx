import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const SkillBox = ({ category, items }) => {
  const { isDark } = useContext(ThemeContext);

  return (
    <div
      className={`p-6 md:p-8 rounded-2xl transition-all duration-300 ${isDark ? "bg-slate-800/50 border border-slate-700/50 hover:border-slate-600/80 hover:shadow-lg hover:shadow-rose-500/10" : "bg-gray-100 border border-gray-200 hover:border-rose-300 hover:shadow-lg hover:shadow-rose-400/10"}`}
    >
      <h3
        className={`text-lg md:text-xl font-bold mb-6 ${isDark ? "text-rose-400" : "text-rose-600"}`}
      >
        {category}
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {items.map((item, index) => {
          const skillName = typeof item === "string" ? item : item.name;
          const skillLogo = typeof item === "object" ? item.logo : null;

          return (
            <div
              key={index}
              className={`flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-300 group cursor-pointer ${
                isDark
                  ? "bg-slate-700/50 border border-slate-600/50 hover:border-rose-500/50 hover:shadow-lg hover:shadow-rose-500/20"
                  : "bg-white border border-gray-200 hover:border-rose-400 hover:shadow-lg hover:shadow-rose-400/20"
              }`}
            >
              {skillLogo && (
                <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mb-2">
                  <img
                    src={skillLogo}
                    alt={skillName}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              )}
              <span
                className={`text-sm md:text-base font-medium text-center ${isDark ? "text-gray-300" : "text-gray-700"}`}
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
