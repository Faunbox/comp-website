import { createTheme } from "@nextui-org/react";

export const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {
      bgc: "#243d2e",
      text: "#dbcfc6",
      footer: "#2d4d38",
      card: "#43402e"
    },
  },
});

export const lightTheme = createTheme({
  type: "light",
  theme: {
    colors: {
      bgc: "#bea994",
      text: "#43402e",
      footer: "#aa947e",
      card: "#dbcfc6"
    },
  },
});
