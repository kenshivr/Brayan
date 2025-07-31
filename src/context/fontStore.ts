import { create } from 'zustand';

export type FontKey =
  | 'agneos_outline'
  | 'agneos_regular'
  | 'aventi'
  | 'quloon'
  | 'slabion'
  | 'falling';

interface FontState {
  activeFont: FontKey;
  setFont: (font: FontKey) => void;
}

export const useFontStore = create<FontState>((set) => ({
  activeFont: 'slabion',
  setFont: (font) => {
    document.documentElement.style.setProperty('--font-FontText', font);
    set({ activeFont: font });
  },
}));