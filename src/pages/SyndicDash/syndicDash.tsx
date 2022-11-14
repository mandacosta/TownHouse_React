import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/header";
import { Navbar } from "../../components/Navbar/navbar";
import { StyledMain } from "../../styles/styled_Dash";

export const SyndicDash = () => {
  return (
    <StyledMain>
      <Header />
      <section className="outlet">
        <Outlet />
      </section>
      <Navbar />
    </StyledMain>
  );
};
