import { useContext } from "react";
import { ExternalLink } from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";

const AchievementBox = ({ achievement }) => {
  const { isDark } = useContext(ThemeContext);

  return (
    <div
      className={`p-6 md:p-8 rounded-2xl transition-all duration-300 flex gap-6 ${
        isDark
          ? "bg-slate-800/30 border border-slate-700/50 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20"
          : "bg-white border border-gray-200 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/20"
      }`}
    >
      {/* Logo */}
      {achievement.logo && (
        <div
          className={`w-24 md:w-28 h-24 md:h-28 flex-shrink-0 rounded-xl p-2 flex items-center justify-center ${
            isDark
              ? "bg-gradient-to-br from-cyan-900/40 to-indigo-900/40"
              : "bg-gradient-to-br from-cyan-100 to-indigo-50"
          }`}
        >
          <img
            src={achievement.logo}
            alt={achievement.title}
            className="w-full h-full object-contain"
          />
        </div>
      )}

      {/* Content */}
      <div className="flex-1">
        <h3
          className={`text-lg md:text-xl font-bold mb-1 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          {achievement.title}
        </h3>
        <p
          className={`text-sm md:text-base mb-3 ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {achievement.description}
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <span
            className={`text-sm font-medium ${
              isDark ? "text-gray-500" : "text-gray-600"
            }`}
          >
            {achievement.date}
          </span>
          {achievement.credentialId && (
            <span
              className={`text-xs px-2 py-1 rounded-lg ${
                isDark
                  ? "bg-cyan-900/50 text-cyan-300"
                  : "bg-cyan-100 text-cyan-700"
              }`}
            >
              ID: {achievement.credentialId}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default AchievementBox;
