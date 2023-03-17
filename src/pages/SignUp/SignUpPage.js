import { LogoHeader, FormStart, StyleP } from "../../styles.js/styles.js";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
export default function SignUpPage() {
  return (
    <>
      <LogoHeader>
        <img src={logo} alt="logo TrakIt" />
      </LogoHeader>
      <FormStart>
        <input data-test="email-input" placeholder="email" />
        <input data-test="password-input" placeholder="senha" />
        <input data-test="user-name-input" placeholder="nome" />
        <input data-test="user-image-input" placeholder="foto" />
        <button data-test="signup-btn" type="submit">
          Cadastrar
        </button>
      </FormStart>
      <Link data-test="login-link"  to="/">
        <StyleP>Já tem uma conta? Faça login!</StyleP>
      </Link>
    </>
  );
}
