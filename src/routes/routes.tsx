import { Route, Routes } from "react-router-dom";
import { Landing } from "../pages/Landing/landing";
import { Login } from "../pages/Login/login";
import { Register } from "../pages/Register/register";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};
