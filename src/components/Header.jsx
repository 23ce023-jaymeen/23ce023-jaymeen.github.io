import { Link } from "react-router-dom";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useState, useContext } from "react";
import { menus } from "../data/menuData";
import { ThemeContext } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`sticky top-0 z-50 backdrop-blur-xl border-b ${
        isDark
          ? "bg-slate-900/80 border-slate-800"
          : "bg-white/80 border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.1 }}>
          <Link
            to="/"
            className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(56,189,248,0.6)]"
          >
            JD
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {menus.map((menu, index) => (
            <motion.div
              key={index}
              whileHover="hover"
              className="relative"
            >
              <Link
                to={menu.href}
                className={`font-medium ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {menu.name}
              </Link>

              {/* Animated underline */}
              <motion.span
                variants={{
                  hover: { width: "100%" },
                  initial: { width: 0 }
                }}
                initial="initial"
                transition={{ duration: 0.3 }}
                className="absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-cyan-400 to-indigo-500"
              />
            </motion.div>
          ))}

          {/* Theme Toggle */}
          <motion.button
            whileHover={{ rotate: 15, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className={`p-2 rounded-xl ${
              isDark
                ? "bg-slate-800 text-yellow-400"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
        </nav>

        {/* Mobile Buttons */}
        <div className="md:hidden flex items-center gap-3">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className={`p-2 rounded-xl ${
              isDark
                ? "bg-slate-800 text-yellow-400"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 rounded-xl ${
              isDark
                ? "bg-slate-800 text-gray-300"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className={`md:hidden overflow-hidden ${
              isDark ? "bg-slate-900/90" : "bg-white/90"
            } border-t`}
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {menus.map((menu, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <Link
                    to={menu.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium ${
                      isDark
                        ? "text-gray-300 hover:text-cyan-300"
                        : "text-gray-700 hover:text-cyan-500"
                    }`}
                  >
                    {menu.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
