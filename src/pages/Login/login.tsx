import React, { useState } from "react";
import { StyledForm, StyledPage } from "../../styles/styled_Login_Register";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { PasswordInput } from "../../components/PasswordInput/passwordInput";
import { TextInput } from "../../components/TextInput/textInput";
import { ThemeComponent } from "../../components/ThemeProviderMUI/themeProvider";
import { Link } from "react-router-dom";

export const schemaLogin = yup.object({
  email: yup
    .string()
    .required("Email não pode estar em branco")
    .email("Deve ser um e-mail válido"),
  password: yup.string().required("Senha não pode estar em branco"),
});

export const Login = () => {
  const [showPassWord, setShowPassWord] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({ mode: "onChange", resolver: yupResolver(schemaLogin) });

  const onSubmit = (data: any) => console.log(data);
  return (
    <ThemeComponent primary={true}>
      <StyledPage>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
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
  );
};
