import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./context/authContext";
import { RoutesMain } from "./routes/routes";
import { ButtonStyle } from "./styles/button";
import { GlobalStyle } from "./styles/globalSyles";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <ButtonStyle />
      <ToastContainer />

      <AuthProvider>
        <RoutesMain />
      </AuthProvider>
    </>
  );
}

export default App;
