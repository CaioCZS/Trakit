import Footer from "../../components/Footer.js";
import Header from "../../components/Header.js";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { BtnP, BodyHabit, StatusToday } from "../../styles/styles.js";
import Context from "../../components/Context.js";
import { useContext, useEffect, useState } from "react";
import { CheckBtn, Current, Record, TodayHabit } from "./styles.js";
import axios from "axios";
import Percentual from "../../components/Percentual.js";
export default function TodayPage() {
  const LocalizedFormat = require("dayjs/plugin/localizedFormat");
  dayjs.extend(LocalizedFormat);
  const [userData, setUserData] = useContext(Context);
  const [percValue, setPercValue] = useContext(Percentual);
  const [todayList, setTodayList] = useState(undefined);
  const token = userData.token;
  const [playBtn, setPlayBtn] = useState(0);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
    axios
      .get(URL, config)
      .then((res) => {
        const newList = res.data;
        setTodayList(newList);
        const totalHabits = newList.length;
        let count = 0;
        if (newList.length > 0) {
          for (let i = 0; i < newList.length; i++) {
            if (newList[i].done === true) {
              count++;
            }
          }
          const final = (count / totalHabits) * 100;
          setPercValue(final.toFixed(0));
        }
      })
      .catch((err) => console.log(err.response.data));
  }, [playBtn]);

  function check(done, habitId) {
    if (done) {
      const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitId}/uncheck`;
      axios
        .post(URL, {}, config)
        .then((res) => {
          setPlayBtn(playBtn + 1);
        })
        .catch((err) => console.log(err.response.data));
    } else {
      const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitId}/check`;
      axios
        .post(URL, {}, config)
        .then((res) => {
          setPlayBtn(playBtn + 1);
        })
        .catch((err) => console.log(err.response.data));
    }
  }
  return (
    <>
      <Header />
      <BodyHabit>
        <BtnP>
          <p data-test="today">
            {dayjs().locale("pt-br").format("dddd, DD/MM")}
          </p>
        </BtnP>
        <StatusToday data-test="today-counter">
          Nenhum hábito concluído ainda
        </StatusToday>
        {todayList === undefined ? (
          <h1>Verificando se você tem hábitos à cumprir hoje...</h1>
        ) : todayList.length === 0 ? (
          <h1>Você não tem nenhum hábito hoje</h1>
        ) : (
          todayList.map((h) => (
            <TodayHabit data-test="today-habit-container" key={h.id}>
              <h1 data-test="today-habit-name">{h.name}</h1>
              <p data-test="today-habit-sequence">
                Sequência atual:{" "}
                <Current done={h.done}>{h.currentSequence} dias</Current>
              </p>
              <p data-test="today-habit-record">
                Seu recorde:{" "}
                <Record
                  record={
                    h.currentSequence === h.highestSequence &&
                    h.highestSequence > 0
                  }
                >
                  {h.highestSequence} dias
                </Record>
              </p>
              <CheckBtn
                data-test="today-habit-check-btn"
                onClick={() => check(h.done, h.id)}
                done={h.done}
              >
                <ion-icon name="checkmark-outline"></ion-icon>
              </CheckBtn>
            </TodayHabit>
          ))
        )}
      </BodyHabit>
      <Footer />
    </>
  );
}
