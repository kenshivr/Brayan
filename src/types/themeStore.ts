import type { Themes } from './theme';

export interface ThemeState {
    isDark: boolean;
    selectedPalette: keyof Themes;
    themes: Themes;
    toggleTheme: () => void;
    setIsDark: (value: boolean) => void;
    setPalette: (palette: keyof Themes) => void;
    applyTheme: () => void;
    addTheme: (name: string, palette: Themes[string]) => void;
}
