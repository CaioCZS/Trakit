import styled from "styled-components";
import { Link } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
export default function Footer(){
    return(
        <FooterUser data-test="menu">
        <Link to="/habitos" data-test="habit-link">
          Hábitos
        </Link>
        <ProgressBarContainer
          data-test="today-link"
         
        >
          <Link to="/hoje">
          <CircularProgressbar
            text="Hoje"
            backgroundPadding={6}
            value={53}
            background
            styles={{
              background: {
                fill: "#52B6FF",
              },
              trail: {
                stroke: "#52B6FF",
              },
              path: {
                stroke: "#FFFFFF",
              },
              text: {
                fill: "#FFFFFF",
                fontSize: "18px",
              },
            }}
          /></Link>
        </ProgressBarContainer>
        <Link to="/historico" data-test="history-link">
          Histórico
        </Link>
      </FooterUser>

    )
}

const FooterUser = styled.div`
  background-color: #ffffff;
  height: 70px;
  width: 100%;
  position: absolute;
  bottom: 0;
  right: 0;
  box-shadow: 0px -3px 5px rgba(0, 0, 0, 0.15);
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:0 22px;
  a{
    color: #52b6ff;
    font-size:18px;
    text-decoration:none;
  }
`;

const ProgressBarContainer = styled.div`
width:91px;
height:91px;
margin-bottom: 42px;
`