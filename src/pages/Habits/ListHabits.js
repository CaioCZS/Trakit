import { ConteinerHabits, DaysBtn, LiHabit, DayBtn, DivIcon } from "./styles.js";
import Context from "../../components/Context.js";
import { useContext } from "react";
import axios from "axios";
export default function ListHabits({ list ,setDeletec,deleted}) {
  const [userData, setUserData] = useContext(Context);
  const token = userData.token;
  const days = ["D", "S", "T", "Q", "Q", "S", "S"];
  
  function deleteHabit(id) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const URL= `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`
    if(window.confirm("Deseja mesmo apagar esse hábito?") === true){
        axios.delete(URL,config)
        .then(res => setDeletec(deleted+1))
        .catch(err => console.log(err.response.data))
    }
  }
  return (
    <ConteinerHabits>
      {list.map((h) => (
        <LiHabit data-test="habit-container" key={h.id}>
          <p data-test="habit-name" >{h.name}</p>
          <DaysBtn>
            {days.map((d, i) => (
              <DayBtn  data-test="habit-day" select={h.days.includes(i + 1) ? true : false} key={i}>
                {d}
              </DayBtn>
            ))}
          </DaysBtn>
          <DivIcon data-test="habit-delete-btn" >
          <ion-icon
            onClick={() => deleteHabit(h.id)}
            name="trash-outline"
          ></ion-icon>
          </DivIcon>    
        </LiHabit>
      ))}
    </ConteinerHabits>
  );
}
