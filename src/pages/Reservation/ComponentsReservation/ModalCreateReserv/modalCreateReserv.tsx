import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { TextInput } from "../../../../components/TextInput/textInput";
import { ThemeComponent } from "../../../../components/ThemeProviderMUI/themeProvider";
import { AuthContext } from "../../../../context/authContext";
import { ReservationContext } from "../../../../context/reservationContext";
import { StyledModal } from "../../../../styles/styleModal";
import { schemaReservation } from "../../../../validations/newReservation";
interface IModalProps {
  setIsCreateModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedDay: any; //por enquanto
  area: any;
}
export const ModalCreateReserv = ({
  setIsCreateModalOpen,
  selectedDay,
  area,
}: IModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schemaReservation),
  });
  const { user } = useContext(AuthContext);
  const { createReservation } = useContext(ReservationContext);
  function translatePlace(area: string) {
    let local = "";
    if (area === "pool") {
      local = " Piscina";
    } else if (area === "saloon") {
      local = " Salão de Festas";
    } else if (area === "grill") {
      local = " Churrasqueira";
    }
    return local;
  }
  function changeName() {
    return translatePlace(area);
  }
  async function onSubmit(data: any) {
    setIsCreateModalOpen(false);
    const dataReservation = {
      ...data,
      user: user,
      reserved_date: selectedDay,
    };
    const dataDate = {
      ...selectedDay,
    };
    await createReservation(area, dataDate, dataReservation);
  }
  return (
    <>
      <StyledModal>
        <form onSubmit={handleSubmit(onSubmit)}>
          <p className="subTitle black">
            {selectedDay?.day}/{selectedDay?.month}/{selectedDay?.year} -
            {changeName()}
          </p>
          <ThemeComponent primary={true}>
            <TextInput
              register={register}
              errors={errors.title?.message}
              label="Nome do evento"
              dataName="title"
            />
          </ThemeComponent>

          <div className="btn_container">
            <span
              className="btn cancel"
              onClick={() => setIsCreateModalOpen(false)}
            >
              Cancelar
            </span>

            <button
              type="submit"
              className="btn primary submit"
              disabled={!isDirty || !isValid}
            >
              Reservar
            </button>
          </div>
        </form>
      </StyledModal>
    </>
  );
};
