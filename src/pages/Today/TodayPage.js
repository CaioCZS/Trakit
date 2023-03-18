import Footer from "../../components/Footer.js";
import Header from "../../components/Header.js";
import {
  BtnP,
  MessageNone,
  BodyHabit,
  StatusToday,
} from "../../styles/styles.js";
export default function TodayPage() {
  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
}
