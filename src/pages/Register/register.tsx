import React, { useContext, useState } from "react";
import { StyledForm, StyledPage } from "../../styles/styled_Login_Register";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { PasswordInput } from "../../components/PasswordInput/passwordInput";
import { TextInput } from "../../components/TextInput/textInput";
import { ThemeComponent } from "../../components/ThemeProviderMUI/themeProvider";
import { Link } from "react-router-dom";
import { registerSchema } from "../../validations/login_register";
import { IUser } from "../../services/userServices/login";
import { AuthContext } from "../../context/authContext";

export interface IRegisterForm extends IUser {
  confirmPassword: string;
}

export const Register = () => {
  const [showPassWord, setShowPassWord] = useState(false);
  const [showPassWordConf, setShowPassWordConf] = useState(false);
  const { registerUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({ mode: "onChange", resolver: yupResolver(registerSchema) });

  const onSubmit = handleSubmit((data) => {
    const formData = {
      name: data.name,
      email: data.email,
      password: data.password,
      aptNumber: data.aptNumber,
      contact: data.contact,
      isSyndic: false,
    };
    registerUser(formData);
  });

  return (
    <ThemeComponent primary={false}>
      <StyledPage>
        <StyledForm onSubmit={onSubmit}>
          <h1>TOWN HOUSE</h1>
          <TextInput
            register={register}
            dataName="name"
            errors={errors.name?.message}
            label="Nome"
          />
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

          <PasswordInput
            showPassWord={showPassWordConf}
            setShowPassWord={setShowPassWordConf}
            register={register}
            dataName="confirmPassword"
            errors={errors.confirmPassword?.message}
            label="Confirmar Senha"
          />

          <TextInput
            register={register}
            dataName="aptNumber"
            errors={errors.aptNumber?.message}
            label="Apatamento"
          />
          <TextInput
            register={register}
            dataName="contact"
            errors={errors.contact?.message}
            label="Número para contato"
          />

          <button
            className="btn secondary submit"
            type="submit"
            disabled={!isDirty || !isValid}
          >
            Cadastrar
          </button>
          <div className="container_link">
            <span className="subTitle">
              {" "}
              Ou, clique <Link to="/login">aqui</Link> para fazer login!
            </span>
          </div>
        </StyledForm>
      </StyledPage>
    </ThemeComponent>
  );
};
