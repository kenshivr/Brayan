import { create } from 'zustand';
import { type Themes } from '@src/types/theme';

interface ThemeState {
  isDark: boolean;
  selectedPalette: keyof Themes;
  themes: Themes;
  toggleTheme: () => void;
  setIsDark: (value: boolean) => void;
  setPalette: (palette: keyof Themes) => void;
  applyTheme: () => void;
}

export const useThemeStore = create<ThemeState>((set, get) => ({
  isDark: false,
  selectedPalette: 'stoneMist',
  themes: {
    stoneMist: {
      firstColor: "#E3E6D8",
      secondColor: "#BAC1C5",
      thirdColor: "#ABA7A6",
      fourthColor: "#958B8C",
      fifthColor: "#7B737D",
    },
    midnightRose: {
      firstColor: "#BF7A8D",
      secondColor: "#7A4CC5",
      thirdColor: "#3F458A",
      fourthColor: "#29243E",
      fifthColor: "#11121D",
    },
    steelDepths: {
      firstColor: "#9BA8AB",
      secondColor: "#4A5C6A",
      thirdColor: "#253745",
      fourthColor: "#11212D",
      fifthColor: "#06141B",
    },
    antiqueInk: {
      firstColor: "#DCE0E8",
      secondColor: "#8EA1AE",
      thirdColor: "#685652",
      fourthColor: "#6B212C",
      fifthColor: "#27363F",
    },
    plumOcean: {
      firstColor: "#DED1C6",
      secondColor: "#A77693",
      thirdColor: "#174871",
      fourthColor: "#133B5E",
      fifthColor: "#0F2D4D",
    },
  },
  toggleTheme: () => {
    set((state) => {
      const newIsDark = !state.isDark;
      return { isDark: newIsDark };
    });
    get().applyTheme();
  },
  setIsDark: (value) => {
    set({ isDark: value });
    get().applyTheme();
  },
  setPalette: (palette) => {
    set({ selectedPalette: palette });
    get().applyTheme();
  },
  applyTheme: () => {
    const { isDark, themes, selectedPalette } = get();
    const root = document.documentElement;
    const palette = themes[selectedPalette];

    const entries = Object.entries(palette) as [keyof typeof palette, string][];

    const colorPairs = isDark ? entries : [...entries].reverse();

    colorPairs.forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });
  },
}));
