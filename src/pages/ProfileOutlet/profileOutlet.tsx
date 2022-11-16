import React, { useContext } from "react";
import { MdLogout } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { AuthContext } from "../../context/authContext";
import { StyledContainerInfo } from "./styleProfileOutlet";
import { useNavigate } from "react-router-dom";

export const ProfileOutlet = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <StyledContainerInfo>
      <div className="container">
        <div className="name">
          <div className="icon">
            <IoMdPerson className="person_icon" />
          </div>
          <p>{user?.name}</p>
        </div>
        <span>Informações:</span>
        <div className="info">
          <p className="info_line">
            <span>Email:</span> <span className="data">{user?.email}</span>
          </p>
          <p className="info_line">
            <span>Contato:</span> <span className="data">{user?.contact}</span>
          </p>
          <p className="info_line">
            <span>Apt:</span> <span className="data">{user?.aptNumber}</span>
          </p>
        </div>
        <div className="logout">
          <p>Sair</p>
          <MdLogout className="logout_icon" onClick={handleLogout} />
        </div>
      </div>
    </StyledContainerInfo>
  );
};
