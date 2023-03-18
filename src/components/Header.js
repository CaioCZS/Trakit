import styled from "styled-components";

export default function Header(){
    return(
        <HeaderUser data-test="header">
        <p>TrackIt</p>
        <img
          alt="Imagem Perfil"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlAFNbMMcoO9LUzTNd4ScxQmnMEhhcrl55Ww&usqp=CAU"
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