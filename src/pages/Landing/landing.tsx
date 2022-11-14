import React from "react";
import { Link } from "react-router-dom";
import { StyledMain } from "./styleLanding";

export const Landing = () => {
  const image = require("../../img/background.png");
  return (
    <StyledMain>
      <div className="container">
        <h1 className="mainTitle">TOWN HOUSE</h1>
        <p className="subTitle">
          Um jeito fácil de trazer harmonia para a vida em condomínio
        </p>
        <p className="subTitle">Vamos lá ?</p>
        <div className="btn-container">
          <Link className="btn primary" to="/login">
            LOGIN
          </Link>
          <Link className="btn secondary" to="/register">
            CADASTRO
          </Link>
        </div>
      </div>
      <img src={image} alt="logo" />
    </StyledMain>
  );
};
