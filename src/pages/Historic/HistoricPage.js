import { BtnP, MessageNone, BodyHabit } from "../../styles/styles.js";
import Footer from "../../components/Footer.js";
import Header from "../../components/Header.js";

export default function HistoricPage() {
  return (
    <>
      <Header />
      <BodyHabit>
        <BtnP>
          <p>Histórico</p>
        </BtnP>
        <MessageNone>
          Em breve você poderá ver o histórico dos seus hábitos aqui!
        </MessageNone>
      </BodyHabit>
      <Footer />
    </>
  );
}
