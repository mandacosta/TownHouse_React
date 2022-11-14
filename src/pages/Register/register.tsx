import React, { useState } from "react";
import { StyledForm, StyledPage } from "../../styles/styled_Login_Register";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { PasswordInput } from "../../components/PasswordInput/passwordInput";
import { TextInput } from "../../components/TextInput/textInput";
import { ThemeComponent } from "../../components/ThemeProviderMUI/themeProvider";
import { Link } from "react-router-dom";

export const registerSchema = yup.object({
  name: yup.string().required("Nome é obrigatório"),
  email: yup
    .string()
    .email("Deve ser um e-mail válido")
    .required("Email obrigatório"),
  password: yup
    .string()
    .required("Senha é obrigatória")
    .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
    .matches(/[a-z]/, "Deve conter ao menos 1 letra minúscula")
    .matches(/[(\d)]/, "Deve conter ao menos 1 número")
    .matches(/[!@#$%*()~^]/, "Deve conter ao menos 1 caracter especial")
    .min(8, "Deve ter no mínimo 8 caracteres")
    .max(16, "Deve ter no máximo 16 caracteres"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "As senhas não correspondem"),
  aptNumber: yup.string().required("Apartamento é obrigatório"),
  contact: yup.number().required("Um telefone para contato é obrigatório"),
});

export const Register = () => {
  const [showPassWord, setShowPassWord] = useState(false);
  const [showPassWordConf, setShowPassWordConf] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({ mode: "onChange", resolver: yupResolver(registerSchema) });

  const onSubmit = (data: any) => console.log(data);
  return (
    <ThemeComponent primary={false}>
      <StyledPage>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
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
