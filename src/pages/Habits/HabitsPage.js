import Context from "../../components/Context.js";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { BtnP, MessageNone, BodyHabit } from "../../styles/styles.js";
import Footer from "../../components/Footer.js";
import Header from "../../components/Header.js";
import ListHabits from "./ListHabits.js";
import {
  CreateContainer,
  DaysBtn,
  CreateDayBtn,
  BtnConfirm,
  FixDots,
} from "./styles.js";
import { ThreeDots } from "react-loader-spinner";
export default function HabitsPage() {
  const [userData, setUserData] = useContext(Context);
  const [deleted, setDeletec] = useState(0);
  const token = userData.token;
  const [isDisabled, setIsDisabled] = useState(false);
  const [list, setList] = useState(undefined);
  const [create, setCreate] = useState("");
  const [selectDays, setSetectDays] = useState([]);
  const [nomeHabito, setNomeHabito] = useState("");
  const daysConstant = ["D", "S", "T", "Q", "Q", "S", "S"];
  const textBtn = isDisabled
    ? [<ThreeDots key="loadingSignUp" color="#FFFFFF" width="51px" />]
    : "Salvar";
  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const URL =
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    axios
      .get(URL, config)
      .then((res) => setList(res.data))
      .catch((err) => console.log(err.response.data));
  }, [deleted]);
  function addDay(dayNum) {
    if (selectDays.includes(dayNum)) {
      const removedDay = selectDays.filter((d) => d !== dayNum);
      setSetectDays(removedDay);
    } else if (!selectDays.includes(dayNum)) {
      selectDays.push(dayNum);
      const newList = [...selectDays];
      setSetectDays(newList);
    }
  }
  function confirmCreate() {
    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const nvLista = []
    for(let i=0; i< selectDays.length; i++){
      if(selectDays[i] === 1){
        nvLista.push(7)
      }else{
        nvLista.push(selectDays-1)
      }
    }

    const body = { name: nomeHabito, days: nvLista };
    console.log(body)
    axios
      .post(URL, body, config)
      .then((res) => {
        setCreate(false);
        setDeletec(deleted + 1);
        setNomeHabito("");
        setSetectDays([]);
        setIsDisabled(false);
      })
      .catch((err) => {
        alert("Seu hábito precisa de um nome :)")
        setIsDisabled(false);
      });
    setIsDisabled(true);
  }
  return (
    <>
      <Header />
      <BodyHabit>
        <BtnP>
          <p>Meus hábitos</p>
          <button onClick={() => setCreate(true)} data-test="habit-create-btn">
            +
          </button>
        </BtnP>
        {create && (
          <CreateContainer
            data-test="habit-create-container"
            key={"create container"}
          >
            <input
              data-test="habit-name-input"
              type="text"
              placeholder="nome do hábito"
              onChange={(e) => setNomeHabito(e.target.value)}
              value={nomeHabito}
              disabled={isDisabled}
            />
            <DaysBtn>
              {daysConstant.map((d, i) => (
                <CreateDayBtn
                  select={selectDays.includes(i + 1) ? true : false}
                  disabled={isDisabled}
                  key={i}
                  onClick={() => addDay(i + 1)}
                  data-test="habit-day"
                >
                  {d}
                </CreateDayBtn>
              ))}
            </DaysBtn>
            <BtnConfirm>
              <button
                data-test="habit-create-cancel-btn"
                onClick={() => setCreate(false)}
                disabled={isDisabled}
              >
                Cancelar
              </button>
              <FixDots
                disabled={isDisabled}
                data-test="habit-create-save-btn"
                onClick={confirmCreate}
              >
                {textBtn}
              </FixDots>
            </BtnConfirm>
          </CreateContainer>
        )}
        <ListHabits list={list} setDeletec={setDeletec} deleted={deleted} />
        {list === undefined ? (
          ""
        ) : list.length === 0 ? (
          <MessageNone>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </MessageNone>
        ) : (
          ""
        )}
      </BodyHabit>
      <Footer />
    </>
  );
}
