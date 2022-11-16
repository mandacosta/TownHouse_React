import React, { useContext, useState } from "react";
import { StyledForm, StyledPage } from "../../styles/styled_Login_Register";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { PasswordInput } from "../../components/PasswordInput/passwordInput";
import { TextInput } from "../../components/TextInput/textInput";
import { ThemeComponent } from "../../components/ThemeProviderMUI/themeProvider";
import { Link } from "react-router-dom";
import { schemaLogin } from "../../validations/login_register";
import { AuthContext } from "../../context/authContext";
import { Loading } from "../../components/Loading/loading";

export const Login = () => {
  const [showPassWord, setShowPassWord] = useState(false);
  const { loginUser, loading } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({ mode: "onChange", resolver: yupResolver(schemaLogin) });

  const onSubmit = handleSubmit((data) => {
    const dataLogin = {
      email: data.email,
      password: data.password,
    };
    console.log(dataLogin);
    loginUser(dataLogin);
  });

  return (
    <>
      <Loading loading={loading} />
      <ThemeComponent primary={true}>
        <StyledPage>
          <StyledForm onSubmit={onSubmit}>
            <h1>TOWN HOUSE</h1>
            <TextInput
              register={register}
              dataName="email"
              errors={errors.email?.message}
              label="Email"
            />

            <PasswordInput
              showPassWord={showPassWord}
              setShowPassWord={setShowPassWord}
              register={register}
              dataName="password"
              errors={errors.password?.message}
              label="Senha"
            />

            <button
              className="btn primary submit"
              type="submit"
              disabled={!isDirty || !isValid}
            >
              Enviar
            </button>
            <div className="container_link">
              <span className="subTitle">
                {" "}
                Ou, clique <Link to="/register">aqui</Link> para se cadastrar!
              </span>
            </div>
          </StyledForm>
        </StyledPage>
      </ThemeComponent>
    </>
  );
};
