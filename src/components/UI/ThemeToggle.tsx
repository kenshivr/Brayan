import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  const applyTheme = (isDark: boolean) => {
    const root = document.documentElement;

    if (isDark) {
      root.style.setProperty("--color-darkBrown", "#3B2F2F");
      root.style.setProperty("--color-peachTint", "#FFD6AF");

      root.style.setProperty("--color-softBeige", "#F6E3CE");
      root.style.setProperty("--color-charcoalBlack", "#1F1F1F");

      root.style.setProperty("--color-blushPink", "#F7B2B7");
      root.style.setProperty("--color-slateGray", "#6E6E6E");

      root.style.setProperty("--color-hazelBrown", "#6D4C41");
      root.style.setProperty("--color-softOrange", "#FF8A65");

      root.style.setProperty("--color-boneWhite", "#FAF9F6");
      root.style.setProperty("--color-neutralBrown", "#8D6E63");
    } else {
      root.style.setProperty("--color-peachTint", "#3B2F2F");
      root.style.setProperty("--color-darkBrown", "#FFD6AF");

      root.style.setProperty("--color-charcoalBlack", "#F6E3CE");
      root.style.setProperty("--color-softBeige", "#6D4C41");

      root.style.setProperty("--color-slateGray", "#F7B2B7");
      root.style.setProperty("--color-blushPink", "#6E6E6E");

      root.style.setProperty("--color-softOrange", "#6D4C41");
      root.style.setProperty("--color-hazelBrown", "#FF8A65");

      root.style.setProperty("--color-neutralBrown", "#FAF9F6");
      root.style.setProperty("--color-boneWhite", "#1F1F1F");
    }
  };

  useEffect(() => {
    applyTheme(isDark);
  }, [isDark]);

  return (
    <div
      onClick={() => setIsDark((prev) => !prev)}
      className={`fixed top-3 right-3 z-50 w-[60px] h-[34px] rounded-full cursor-pointer transition-colors duration-500
    ${
      isDark
        ? "bg-gradient-to-r from-darkBrown to-charcoalBlack"
        : "bg-gradient-to-r from-charcoalBlack to-darkBrown"
    }`}
    >
      <div
        className={`absolute top-[6px] h-[22px] w-[22px] rounded-full bg-boneWhite transition-all duration-500
          ${isDark ? "left-[6px]" : "left-[28px]"}`}
      />
      {isDark ? (
        <FaMoon
          className="absolute top-1/2 right-[10px] -translate-y-1/2 text-boneWhite"
          size={11}
        />
      ) : (
        <FaSun
          className="absolute top-1/2 left-[10px] -translate-y-1/2 text-boneWhite"
          size={11}
        />
      )}
    </div>
  );
}
