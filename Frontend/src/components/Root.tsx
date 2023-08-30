import Header from "./pieces/Header";
import { Outlet } from "react-router-dom";
import { Globalstyles } from "./pieces/GlobalStyle";
import { ThemeProvider } from "styled-components";
export default function Root() {
  const colors = {
    green: {
      light : "#0A5C36",
      lightplus: "#0F5132",
      middle:"#14452f",
      middleplus:"#18392b",
      dark:"#1d2e28"
    },
    white:'white',
    black:"black"
  }
  return (
    <ThemeProvider theme={colors}>
     <Header/>
     <Globalstyles/>
     <Outlet />
    </ThemeProvider>
  )
}
