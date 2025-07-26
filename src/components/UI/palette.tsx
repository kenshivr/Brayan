import { type Themes } from "@src/types/theme";

// export const themes: Themes = {
//   stoneMist: {
//     firstColor: "#7B737D",
//     secondColor: "#958B8C",
//     thirdColor: "#ABA7A6",
//     fourthColor: "#BAC1C5",
//     fifthColor: "#E3E6D8",
//   },
//   midnightRose: {
//     firstColor: "#11121D",
//     secondColor: "#29243E",
//     thirdColor: "#3F458A",
//     fourthColor: "#7A4CC5",
//     fifthColor: "#BF7A8D",
//   },
//   steelDepths: {
//     firstColor: "#06141B",
//     secondColor: "#11212D",
//     thirdColor: "#253745",
//     fourthColor: "#4A5C6A",
//     fifthColor: "#9BA8AB",
//   },
//   antiqueInk: {
//     firstColor: "#27363F",
//     secondColor: "#6B212C",
//     thirdColor: "#685652",
//     fourthColor: "#8EA1AE",
//     fifthColor: "#DCE0E8",
//   },
//   plumOcean: {
//     firstColor: "#0F2D4D",
//     secondColor: "#133B5E",
//     thirdColor: "#174871",
//     fourthColor: "#A77693",
//     fifthColor: "#DED1C6",
//   },
// };

export const themes: Themes = {
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
};

export const changeTheme = (theme: string) => {
  const root = document.documentElement;

  root.style.setProperty("--first-color", themes[theme].firstColor);
  root.style.setProperty("--second-color", themes[theme].secondColor);
  root.style.setProperty("--third-color", themes[theme].thirdColor);
  root.style.setProperty("--fourth-color", themes[theme].fourthColor);
  root.style.setProperty("--fifth-color", themes[theme].fifthColor);
};
