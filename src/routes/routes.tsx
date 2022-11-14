import { Route, Routes } from "react-router-dom";
import { ProtectedRoutes } from "../context/providers/protectedRoutes";
import { Landing } from "../pages/Landing/landing";
import { Login } from "../pages/Login/login";
import { Register } from "../pages/Register/register";
import { ResidentDash } from "../pages/ResidentDash/residentDash";
import { SyndicDash } from "../pages/SyndicDash/syndicDash";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route element={<ProtectedRoutes />}>
        <Route path="/syndic_dash" element={<SyndicDash />} />
        <Route path="/resident_dash" element={<ResidentDash />} />
      </Route>
    </Routes>
  );
};
