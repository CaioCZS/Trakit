import styled from "styled-components";

export const ConteinerHabits = styled.ul`
  min-height: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  h1{
    margin-bottom: 15px;
    margin-right: 5px;
  }
`;

export const LiHabit = styled.li`
  width: 92%;
  min-height: 91px;
  background-color: #ffffff;
  border-radius: 5px;
  padding: 15px;
  position: relative;
  margin:0 auto;
  p {
    color: #666666;
    font-size: 20px;
    margin-bottom: 8px;
  }
`;

export const DivIcon = styled.div`
    position: absolute;
    top: 11px;
    right: 10px;
    ion-icon{
      color: #666666;
    }
`
export const DaysBtn = styled.div`
  width: 100%;
  display: flex;
  gap: 4px;
`;
export const DayBtn = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  font-size: 20px;
  border: thin solid ${({ select }) => (select === true ? "#CFCFCF" : "#D4D4D4")};
  background-color: ${({ select }) => (select === true ? "#CFCFCF" : "#FFFFFF")};
  color: ${({ select }) => (select === true ? "#FFFFFF" : "#DBDBDB")};
`;
export const CreateContainer = styled.div`
  width: 92%;
  height: 180px;
  background-color: #ffffff;
  border-radius: 5px;
  margin: 10px auto;
  padding: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  input {
    width: 100%;
    height: 45px;
    margin-bottom: 8px;
    border: thin solid #d4d4d4;
    padding: 9px;
    border-radius: 5px;
    color:#666666;
    font-size:20px;
    &::placeholder {
      color: #dbdbdb;
      font-size: 20px;
    }
    &:disabled{
    background-color:#F2F2F2;
    &::placeholder{
      color:#AFAFAF;
    }
  }
  }
  textarea:focus,
  input:focus,
  select:focus {
    box-shadow: 0 0 0 0;
    border: thin solid #d4d4d4;
    outline: 0;
  }
`;
export const CreateDayBtn = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  font-size: 20px;
  border: thin solid ${({ select }) => (select ? "#CFCFCF" : "#D4D4D4")};
  background-color: ${({ select }) => (select ? "#CFCFCF" : "#FFFFFF")};
  color: ${({ select }) => (select ? "#FFFFFF" : "#DBDBDB")};
`;

export const BtnConfirm = styled.div`
  position: absolute;
  bottom: 15px;
  right: 15px;
  display: flex;
  gap: 8px;
  button:focus,
  select:focus {
    box-shadow: 0 0 0 0;
    border: thin solid #d4d4d4;
    outline: 0;
  }
  button {
    width: 84px;
    height: 35px;
    text-align: center;
    font-size: 16px;
    &:first-child {
      background-color: #ffffff;
      border: 0 none;
      color: #52b6ff;
    }
  }
`;

export const FixDots = styled.button`
  background-color: #52b6ff;
  border: thin solid #52b6ff;
  border-radius: 5px;
  color: #ffffff;
  width: 84px;
  height: 35px;
  text-align: center;
  font-size: 16px;
  display:flex;
  justify-content:center;
  align-items:center;
`;
