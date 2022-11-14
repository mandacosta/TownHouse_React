import { RoutesMain } from "./routes/routes";
import { ButtonStyle } from "./styles/button";
import { GlobalStyle } from "./styles/globalSyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <ButtonStyle />

      <RoutesMain />
    </>
  );
}

export default App;
