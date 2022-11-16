import React, { useContext, useState } from "react";
import { UserContext } from "../../context/userContextL";
import { Loading } from "../../components/Loading/loading";
import {
  Main,
  StyledCenterDiv,
  StyledCenterDivModal,
  StyledCenterDivModalInternal,
  StyledDivInput,
  StyledModal,
} from "./removeProfileStyle";
import { GiTrashCan } from "react-icons/gi";
import TextField from "@mui/material/TextField";
import { ThemeComponent } from "../../components/ThemeProviderMUI/themeProvider";

export const ResidentDeleteOutlet = () => {
  const { currentUser, userList, openModal, closeModal, deleteUser, loading } =
    useContext(UserContext);

  const [search, setSearch] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value);
  };

  const searchedUser = userList.filter(
    (x) =>
      x.aptNumber.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
      x.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <Main>
      <StyledCenterDiv>
        <StyledDivInput>
          <h2 className="subTitle">Remover perfis</h2>
          <ThemeComponent primary={true}>
            <TextField
              onChange={handleChange}
              label="Pesquisa por texto 🔍"
              fullWidth
            />
          </ThemeComponent>
        </StyledDivInput>

        <ul>
          {search.length >= 1 ? (
            searchedUser.length >= 1 ? (
              searchedUser.map((x) => {
                return x.isSyndic === false ? (
                  <li key={x.id}>
                    <div>
                      <h3>{x.name}</h3>
                      <p>Apartamento: {x.aptNumber}</p>
                    </div>
                    <div>
                      <GiTrashCan
                        onClick={() => openModal(x.id, x.name, x.aptNumber)}
                      />
                    </div>
                  </li>
                ) : null;
              })
            ) : (
              <p>
                Não foi possível encontrar um usuário com esses dados. Tente
                novamente!
              </p>
            )
          ) : (
            userList.map((x) => {
              return x.isSyndic === false ? (
                <li key={x.id}>
                  <div>
                    <h3>{x.name}</h3>
                    <p>Apartamento: {x.aptNumber}</p>
                  </div>
                  <div>
                    <GiTrashCan
                      onClick={() => openModal(x.id, x.name, x.aptNumber)}
                    />
                  </div>
                </li>
              ) : null;
            })
          )}
        </ul>
      </StyledCenterDiv>
      {currentUser !== null ? (
        <StyledModal>
          <StyledCenterDivModal>
            <StyledCenterDivModalInternal>
              <div>
                <strong>
                  <p>Tem certeza que deseja excluir esse perfil?</p>
                </strong>
              </div>
              <span>Nome do morador:</span>
              <p>{currentUser.userName}</p>
              <span>N° do apartamento:</span>
              <p>{currentUser.userApartament}</p>
            </StyledCenterDivModalInternal>
            <section>
              <button className="btn cancel" onClick={() => closeModal()}>
                Cancelar
              </button>
              <button
                className="btn primary submit"
                onClick={() => deleteUser(currentUser.userId)}
              >
                Deletar
              </button>
            </section>
          </StyledCenterDivModal>
        </StyledModal>
      ) : null}

      <Loading loading={loading} />
    </Main>
  );
};
