import { LogoHeader, FormStart, StyleP } from "../../styles/styles.js";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
export default function SignUpPage() {
  const [formSignUp, setFormSignUp] = useState({
    email: "",
    name: "",
    image: "",
    password: "",
  });
  const [disabled, setDisabled] = useState(false)
  const textBtn = disabled ? [<ThreeDots key="loadingSignUp" color="#FFFFFF" width="51px"/>] : <p key="cadastrar">Cadastrar</p>
 const navigate = useNavigate()
  function register(e) {
    e.preventDefault()
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up"
    axios.post(URL, formSignUp)
    .then(res => {
      alert("Conta criada com sucesso")
      navigate("/")
    })
    .catch(err => {
      alert("Esse e-mail já está cadastrado,ou é inválido, digite outro")
      setDisabled(false)
      setFormSignUp({...formSignUp, email:""})
    })
    setDisabled(true)
  }

  function handleForm(e){
    const {name , value} = e.target
    setFormSignUp({...formSignUp, [name]: value})
  }
  return (
    <>
      <LogoHeader>
        <img src={logo} alt="logo TrakIt" />
      </LogoHeader>
      <FormStart onSubmit={register}>
        <input
          data-test="email-input"
          placeholder="email"
          name="email"
          type="email"
          value={formSignUp.email}
          onChange={handleForm}
          required
          disabled={disabled}
        />
        <input
          data-test="password-input"
          placeholder="senha"
          name="password"
          value={formSignUp.password}
          onChange={handleForm}
          disabled={disabled}
          required
        />
        <input
          data-test="user-name-input"
          placeholder="nome"
          name="name"
          value={formSignUp.name}
          onChange={handleForm}
          required
          disabled={disabled}
        />
        <input
          data-test="user-image-input"
          placeholder="foto"
          name="image"
          type="url"
          value={formSignUp.image}
          onChange={handleForm}
          required
          disabled={disabled}
        />
        <button disabled={disabled} data-test="signup-btn" type="submit">
          {textBtn}
        </button>
      </FormStart>
      <Link data-test="login-link" to="/">
        <StyleP>Já tem uma conta? Faça login!</StyleP>
      </Link>
    </>
  );
}
