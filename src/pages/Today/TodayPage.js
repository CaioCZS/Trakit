import {
  HeaderUser,
  BtnP,
  MessageNone,
  BodyHabit,
  FooterUser,
  StatusToday,
  ProgressBarContainer,
} from "../../styles/styles.js";
import { useNavigate } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
export default function TodayPage() {
  const navigate = useNavigate();
  return (
    <>
      <HeaderUser data-test="header">
        <p>TrackIt</p>
        <img
          alt="Imagem Perfil"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlAFNbMMcoO9LUzTNd4ScxQmnMEhhcrl55Ww&usqp=CAU"
        />
      </HeaderUser>
      <BodyHabit>
        <BtnP>
          <p data-test="today">Segunda, 17/05</p>
        </BtnP>
        <StatusToday data-test="today-counter">
          Nenhum hábito concluído ainda
        </StatusToday>
        <MessageNone>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </MessageNone>
      </BodyHabit>
      <FooterUser data-test="menu">
        <p data-test="habit-link" onClick={() => navigate("/habitos")}>
          Hábitos
        </p>
        <ProgressBarContainer
          data-test="today-link"
          onClick={() => navigate("/hoje")}
        >
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
          />
        </ProgressBarContainer>
        <p data-test="history-link" onClick={() => navigate("/historico")}>
          Histórico
        </p>
      </FooterUser>
    </>
  );
}
