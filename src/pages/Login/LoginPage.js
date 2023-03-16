import FormStart from "../../components/FormStart";
import LogoHeader from "../../components/LogoHeader";
import logo from "../../assets/logo.png"
import StyleP from "../../components/StyleP";
import { Link,useNavigate } from "react-router-dom";
export default function LoginPage() {
    const navigate = useNavigate()
  
    function login(){
    navigate("/habitos")
  }
  
    return (
    <>
    <LogoHeader>
        <img src={logo} />
    </LogoHeader>
    <FormStart onSubmit={login}>
      <input placeholder="email"/>
      <input placeholder="senha"/>
      <button type="submit">Entrar</button>
    </FormStart>
    <Link to="/cadastro"><StyleP>Não tem uma conta? Cadastre-se!</StyleP></Link>
    </>
  );
}
