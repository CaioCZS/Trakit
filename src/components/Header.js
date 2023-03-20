import styled from "styled-components";
import Context from "./Context";
import { useContext } from "react";
export default function Header(){
  const [userData, setUserData] = useContext(Context)
  const {image} = userData
    return(
        <HeaderUser data-test="header">
        <p>TrackIt</p>
        <img
          alt="Imagem Perfil"
          src={image}
        />
      </HeaderUser>
    )
}

const HeaderUser = styled.div`
  background-color: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  height: 70px;
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  z-index:1;
  p {
    font-family: Playball;
    color: #ffffff;
    font-size: 39px;
  }
  img {
    width: 51px;
    height: 51px;
    border-radius: 98px;
  }
`;