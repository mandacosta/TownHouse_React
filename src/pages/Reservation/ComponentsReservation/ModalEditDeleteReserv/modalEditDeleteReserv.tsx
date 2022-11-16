import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { ReservationContext } from "../../../../context/reservationContext";
import { schemaReservation } from "../../../../validations/newReservation";
import TextField from "@mui/material/TextField";
import { ThemeComponent } from "../../../../components/ThemeProviderMUI/themeProvider";
import { StyledModal } from "../../../../styles/styleModal";

interface IModalProps {
  setEditDelModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalEditDeleteReserv = ({ setEditDelModalOpen }: IModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schemaReservation),
  });
  const { reservation, editReservation, area, deleteReservation } =
    useContext(ReservationContext);

  async function onSubmitEdit(title_data: any) {
    setEditDelModalOpen(false);
    if (reservation) {
      await editReservation(area, title_data, reservation?.id);
    }
  }

  async function handleDelete() {
    setEditDelModalOpen(false);
    if (reservation) {
      await deleteReservation(area, reservation?.id);
    }
  }

  return (
    <>
      <StyledModal>
        <div className="modal_container">
          <form
            onSubmit={handleSubmit(onSubmitEdit)}
            className="form_edit_reserv"
          >
            <p className="error">
              {errors.title ? `${errors.title.message}` : ``}
            </p>
            <ThemeComponent primary={true}>
              <TextField
                {...register(`title`)}
                label="Título do evento"
                defaultValue={reservation?.title}
              />
            </ThemeComponent>

            <div className="btn_container">
              <span
                className="btn cancel"
                onClick={() => setEditDelModalOpen(false)}
              >
                Cancelar
              </span>
              <button
                className="btn primary submit"
                type="submit"
                disabled={!isDirty || !isValid}
              >
                Editar
              </button>
            </div>
          </form>

          <button className="btn primary submit exclude" onClick={handleDelete}>
            Excluir reserva ?
          </button>
        </div>
      </StyledModal>
    </>
  );
};
