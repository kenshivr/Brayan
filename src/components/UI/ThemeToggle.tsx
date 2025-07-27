import { FaMoon, FaSun } from "react-icons/fa";
import { useThemeStore } from "@src/context/themeStore";

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useThemeStore();

  return (
    <div
      onClick={toggleTheme}
      className="fixed top-3 right-3 z-50 w-[60px] h-[34px] rounded-full transition-colors duration-500"
      style={{
        background: isDark
          ? `linear-gradient(to right, var(--color-firstColor), var(--color-fifthColor))`
          : `linear-gradient(to right, var(--color-fifthColor), var(--color-firstColor))`,
      }}
    >
      <div
        style={{ color: 'red' }}
        className={`absolute top-[6px] h-[22px] w-[22px] rounded-full transition-all duration-500
          ${isDark ? "left-[6px]" : "left-[28px]"}`}
      />
      {isDark ? (
        <FaMoon
          style={{ color: "var(--color-firstColor)" }}
          className="absolute top-1/2 right-[10px] -translate-y-1/2"
          size={11}
        />
      ) : (
        <FaSun
          style={{ color: "var(--color-firstColor)" }}
          className="absolute top-1/2 left-[10px] -translate-y-1/2"
          size={11}
        />
      )}
    </div>
  );
}
