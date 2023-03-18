import { LogoHeader, FormStart, StyleP } from "../../styles/styles.js";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { useState } from "react";
import axios from "axios";
export default function LoginPage() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [isDisabled, setIsDisabled] = useState(false);
  const textBtn = isDisabled
    ? [<ThreeDots key="loadingSignUp" color="#FFFFFF" width="51px" />]
    : "Entrar";

  const navigate = useNavigate();
  function handleSubmit(e) {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  }
  function login(e) {
    e.preventDefault();
    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
    axios
      .post(URL, loginData)
      .then((res) => {
        console.log(res.data);
        navigate("/hoje");
      })
      .catch((err) => {
        setIsDisabled(false);
        setLoginData({
          email: "",
          password: "",
        });
        alert("Usuário e/ou senha inválidos!");
      });
    setIsDisabled(true);
  }

  return (
    <>
      <LogoHeader>
        <img src={logo} alt="logo TrakIt" />
      </LogoHeader>
      <FormStart onSubmit={login}>
        <input
          data-test="email-input"
          placeholder="email"
          value={loginData.email}
          onChange={handleSubmit}
          name="email"
          type="email"
          required
          disabled={isDisabled}
        />
        <input
          data-test="password-input"
          placeholder="senha"
          value={loginData.password}
          onChange={handleSubmit}
          name="password"
          type="password"
          required
          disabled={isDisabled}
        />
        <button data-test="login-btn" type="submit" disabled={isDisabled}>
          {textBtn}
        </button>
      </FormStart>
      <Link data-test="signup-link" to="/cadastro">
        <StyleP>Não tem uma conta? Cadastre-se!</StyleP>
      </Link>
    </>
  );
}
