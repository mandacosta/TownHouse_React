import React from "react";
import { Landing } from "./pages/Landing/landing";
import { ButtonStyle } from "./styles/button";
import { GlobalStyle } from "./styles/globalSyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <ButtonStyle />
      <Landing />
    </>
  );
}

export default App;
