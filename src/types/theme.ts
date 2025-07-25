// types/theme.ts
export type ColorPalette = {
  firstColor: string;
  secondColor: string;
  thirdColor: string;
  fourthColor: string;
  fifthColor: string;
};

export type Theme = {
  name: string;
  light: ColorPalette;
  dark: ColorPalette;
};
