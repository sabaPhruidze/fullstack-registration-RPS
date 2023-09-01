import Header from "./pieces/Header";
import { useState, createContext } from "react";
import { Outlet } from "react-router-dom";
import { Globalstyles } from "./pieces/GlobalStyle";
import { ThemeProvider } from "styled-components";

interface Colors {
  green: {
    light: string;
    lightplus: string;
    middle: string;
    middleplus: string;
    dark: string;
    neon: string;
  };
  white: string;
  black: string;
  neonRed: string;
}
export const startContext = createContext<any>(null);
export default function Root() {
  const [loginS, setLoginS] = useState<boolean>(false);
  const colors: Colors = {
    green: {
      light: "#11c772",
      lightplus: "#0F5132",
      middle: "#14452f",
      middleplus: "#18392b",
      dark: "#1d2e28",
      neon: "#39ff14",
    },
    white: "white",
    black: "black",
    neonRed: "#FF1F1F",
  };
  return (
    <startContext.Provider value={{ loginS, setLoginS }}>
      <ThemeProvider theme={colors}>
        <Header />
        <Globalstyles />
        <Outlet />
      </ThemeProvider>
    </startContext.Provider>
  );
}
