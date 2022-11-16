import { ReservationOutlet } from "../../pages/Reservation/reservation";
import { ReservationProvider } from "../reservationContext";

export const ReservationProviderComponent = () => {
  return (
    <ReservationProvider>
      <ReservationOutlet />
    </ReservationProvider>
  );
};
