import FormStart from "../../components/FormStart";
import LogoHeader from "../../components/LogoHeader";
import logo from "../../assets/logo.png";
import StyleP from "../../components/StyleP";
import { Link } from "react-router-dom";
export default function SignUpPage() {
  return (
    <>
      <LogoHeader>
        <img src={logo} />
      </LogoHeader>
      <FormStart>
        <input placeholder="email" />
        <input placeholder="senha" />
        <input placeholder="nome" />
        <input placeholder="foto" />
        <button type="submit">Cadastrar</button>
      </FormStart>
      <Link to="/"><StyleP>Já tem uma conta? Faça login!</StyleP></Link>
    </>
  );
}
