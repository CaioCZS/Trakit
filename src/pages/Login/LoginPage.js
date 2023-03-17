import {LogoHeader,FormStart,StyleP} from "../../styles.js/styles.js"
import logo from "../../assets/logo.png"
import { Link,useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
export default function LoginPage() {
    const navigate = useNavigate()
  
    function login(){
    navigate("/habitos")
  }
  
    return (
    <>
    <LogoHeader>
        <img src={logo} alt="logo TrakIt"/>
    </LogoHeader>
    <FormStart onSubmit={login}>
      <input data-test="email-input" placeholder="email"/>
      <input data-test="password-input"  placeholder="senha"/>
      <button data-test="login-btn" type="submit">Entrar</button>
    </FormStart>
    <Link data-test="signup-link"  to="/cadastro"><StyleP>Não tem uma conta? Cadastre-se!</StyleP></Link>
    </>
  );
}
