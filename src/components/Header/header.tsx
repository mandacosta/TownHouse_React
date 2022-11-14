import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

import { Link } from "react-router-dom";

import { StyledHeader } from "./styleHeader";

export const Header = () => {
  const { user } = useContext(AuthContext);
  const Logo = require("../../img/background.png");

  return (
    <StyledHeader>
      <div className="container">
        <div className="container_logo">
          <img src={Logo} alt="Logo da TownHouse" />
          <h1 className="mainTitle">TOWN HOUSE</h1>
        </div>
        {user?.isSyndic ? (
          <nav>
            <Link to={"/syndic_dash"} className="headline">
              Home
            </Link>
            <Link to={"/syndic_dash/reservas"} className="headline">
              Reservas
            </Link>
            <Link to={"/syndic_dash/resident_delete"} className="headline">
              Usuários
            </Link>
            <Link to={"/syndic_dash/profile"}>Perfil</Link>
          </nav>
        ) : (
          <nav>
            <Link to={"/resident_dash"}>Mural</Link>
            <Link to={"/resident_dash/reservas"}>Reservas</Link>
            <Link to={"/resident_dash/profile"}>Perfil</Link>
          </nav>
        )}
      </div>
    </StyledHeader>
  );
};
