const colors = {
  dark: "#17161a",
  incognito: "#333",
  white: "#fff",
  background_white: "#f5f5f7",
  background_dark: "#292729",
  primary: "#ffa01b",
  green: "green",
  success: "#60bd4f",
  red: "#e25549",
  redSecondary: "#c4151c",
  blue: "#51a7e1",
  greyLight: "#e4e5e9",
  greyMedium: "#a7a8ad",
  greySemiDark: "#93a2b1",
  greyDark: "#6f737e",
  greyBlue: "#747b91",
  loginLine: "#f56a2c",
}

const spacing = {
  xxs: ".25rem",
  xs: ".5rem",
  sm: ".75rem",
  md: "1.25rem",
  lg: "2rem",
  xl: "3.25rem",
  xxl: "5.25rem",
}

const fonts = {
  size: {
    XXXS: ".5rem",
    XXS: ".625rem",
    XS: ".75rem",
    SM: ".9375rem",
    P0: "1rem",
    P1: "1.125rem",
    P2: "1.25rem",
    P3: "1.5rem",
    P4: "2.25rem",
    P5: "3rem",
    P6: "3.75rem",
  },
  weights: {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    heavy: 800,
  },
  families: {
    stylish: `"Amatic SC", cursive`,
    openSans: `"Open Sans", sans-serif`,
    
  }
}
const gridUnit = 8
const borderRadius = {
  subtle: 1,
  round: ".3125rem",
  extraRound: ".9375rem",
  circle: "50%",
}
const shadows = {
  subtle: "0px -6px 8px -2px rgba(0, 0, 0, 0.1)",
  medium: "-8px 8px 20px 0px rgb(0 0 0 / 20%)",
  strong: "0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset",
  orangeHighLight: "0 0 8px 0 rgb(255 154 35 / 100%)",
  basket: "0px 0px 20px rgba(0, 0, 0, 0.2) inset",
  cardBasket: "-4px 4px 15px 0 rgb(0 0 0 / 20%)",
}

export const theme = {
  colors,
  fonts,
  gridUnit,
  borderRadius,
  shadows,
  spacing,
}
