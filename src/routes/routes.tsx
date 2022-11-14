import { Route, Routes } from "react-router-dom";
import { ProtectedSyndic } from "../context/protectedSyndic";
import { IssuesProviderComponent } from "../context/providers/issuesProvider";
import { ProtectedRoutes } from "../context/providers/protectedRoutes";
import { ReservationProviderComponent } from "../context/providers/reservationProvider";
import { ResidentListProvider } from "../context/providers/residentListProvider";
import { Landing } from "../pages/Landing/landing";
import { Login } from "../pages/Login/login";
import { ProfileOutlet } from "../pages/ProfileOutlet/profileOutlet";
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
        <Route element={<ProtectedSyndic />}>
          <Route path="/syndic_dash" element={<SyndicDash />}>
            <Route index element={<IssuesProviderComponent />} />
            <Route
              path="/syndic_dash/reservas"
              element={<ReservationProviderComponent />}
            />
            <Route
              path="/syndic_dash/resident_delete"
              element={<ResidentListProvider />}
            />
            <Route path="/syndic_dash/profile" element={<ProfileOutlet />} />
          </Route>
        </Route>

        <Route path="/resident_dash" element={<ResidentDash />}>
          <Route index element={<IssuesProviderComponent />} />
          <Route
            path="/resident_dash/reservas"
            element={<ReservationProviderComponent />}
          />
          <Route path="/resident_dash/profile" element={<ProfileOutlet />} />
        </Route>
      </Route>
    </Routes>
  );
};
