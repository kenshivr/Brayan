import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  const applyTheme = (isDark: boolean) => {
    const root = document.documentElement;

    if (isDark) {
      root.style.setProperty('--color-darkBrown', '#3B2F2F');
      root.style.setProperty('--color-peachTint', '#FFD6AF');

      root.style.setProperty('--color-softBeige', '#F6E3CE');
      root.style.setProperty('--color-charcoalBlack', '#1F1F1F');

      root.style.setProperty('--color-blushPink', '#F7B2B7');
      root.style.setProperty('--color-slateGray', '#6E6E6E');

      root.style.setProperty('--color-hazelBrown', '#6D4C41');
      root.style.setProperty('--color-softOrange', '#FF8A65');

      root.style.setProperty('--color-boneWhite', '#FAF9F6');
      root.style.setProperty('--color-neutralBrown', '#8D6E63');
    } else {
      root.style.setProperty('--color-peachTint', '#3B2F2F');
      root.style.setProperty('--color-darkBrown', '#FFD6AF');

      root.style.setProperty('--color-charcoalBlack', '#F6E3CE');
      root.style.setProperty('--color-softBeige', '#6D4C41');

      root.style.setProperty('--color-slateGray', '#F7B2B7');
      root.style.setProperty('--color-blushPink', '#6E6E6E');

      root.style.setProperty('--color-softOrange', '#6D4C41');
      root.style.setProperty('--color-hazelBrown', '#FF8A65');

      root.style.setProperty('--color-neutralBrown', '#FAF9F6');
      root.style.setProperty('--color-boneWhite', '#1F1F1F');

      // posible root.style.setProperty('--color-boneWhite', '#F7B2B7'); // blushPink
      
      // posible root.style.setProperty('--color-boneWhite', '#FF8A65'); // softOrange
      
      // posible root.style.setProperty('--color-boneWhite', '#C95B52'); // warmRed

    }
  };

  useEffect(() => {
    applyTheme(isDark);
  }, [isDark]);

  return (
    <div
      onClick={() => setIsDark(prev => !prev)}
      className={`fixed top-3 right-4 z-50 w-[50px] h-[28px] rounded-full cursor-pointer transition-colors duration-500
    ${isDark
          ? 'bg-gradient-to-r from-green-400 to-lime-300'
          : 'bg-gradient-to-r from-yellow-300 to-amber-400'
        }`}
    >
      <div
        className={`absolute top-[2px] h-[24px] w-[24px] rounded-full bg-black transition-all duration-500
          ${isDark ? 'left-[2px]' : 'left-[24px]'}`}
      />
      {isDark ? (
        <FaMoon className="absolute top-1/2 right-[8px] -translate-y-1/2 text-black" size={11} />
      ) : (
        <FaSun className="absolute top-1/2 left-[8px] -translate-y-1/2 text-black" size={11} />
      )}
    </div>
  );
};