import React from "react";
import { StyledMain } from "./styleLanding";

export const Landing = () => {
  const image = require("../../img/background.png");
  return (
    <StyledMain>
      <div>
        <h1 className="mainTitle">TOWN HOUSE</h1>
        <p className="subTitle">
          Um jeito fácil de trazer harmonia para a vida em condomínio
        </p>
        <a className="btn primary" href="#">
          INICIAR
        </a>
      </div>
      <img src={image} alt="logo" />
    </StyledMain>
  );
};
