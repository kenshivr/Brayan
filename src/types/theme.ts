// types/theme.ts

export type Theme = {
  firstColor: string;
  secondColor: string;
  thirdColor: string;
  fourthColor: string;
  fifthColor: string;
};

export type Themes = Record<string, Theme>