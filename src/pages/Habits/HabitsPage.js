import { BtnP, MessageNone, BodyHabit } from "../../styles/styles.js";
import Footer from "../../components/Footer.js";
import Header from "../../components/Header.js";
export default function HabitsPage() {
  return (
    <>
      <Header />
      <BodyHabit>
        <BtnP>
          <p>Meus hábitos</p>
          <button data-test="habit-create-btn">+</button>
        </BtnP>
        <MessageNone>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </MessageNone>
      </BodyHabit>
      <Footer />
    </>
  );
}
