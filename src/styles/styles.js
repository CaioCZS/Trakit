import styled from "styled-components";


export const LogoHeader = styled.div`
width:100%;
height:40vh;
display:flex;
flex-direction: column;
align-items:center;
justify-content:center;
img{
    width:12em;
}
`

export const FormStart = styled.form`
display: flex;
flex-direction: column;
gap: 6px;
input {
  width: 303px;
  height: 45px;
  margin: 0 auto;
  border: thin solid #d4d4d4;
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
  &::placeholder {
    color: #dbdbdb;
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
  outline: 0;
}
button {
  width: 303px;
  height: 45px;
  color: #ffffff;
  background-color: #52b6ff;
  margin: 0 auto;
  border: thin solid #52b6ff;
  font-size:21px;
  border-radius: 5px;
  display:flex;
  justify-content:center;
  align-items:center;
  &:disabled{
    opacity:0.7;
  }
}
`;

export const BtnP = styled.div`
  margin-top: 50px;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px;
  margin-bottom: 20px;
  p {
    color: #126ba5;
    font-size: 23px;
  }
  button {
    background-color: #52b6ff;
    border: thin solid #52b6ff;
    height: 35px;
    width: 40px;
    border-radius: 5px;
    font-size: 27px;
    color: #ffffff;
  }
`;

export const MessageNone = styled.p`
  font-size: 18px;
  color: #666666;
  width: 100%;
  padding: 0 18px;
`;

export const BodyHabit = styled.div`
  background-color: #e5e5e5;
  width: 100%;
  height: 88%;
  overflow-y: auto;
  padding-bottom:15px;
`;


export const StyleP = styled.p`
    margin: 0 auto;
    width: 303px;
    text-align:center;
    font-size:14px;
    color:#52B6FF;
    margin-top:25px;
    text-decoration-line: underline;
    &:hover{
        cursor:pointer;
    }
`

export const StatusToday = styled.p`
color:#BABABA;
margin-left: 18px;
margin-top: -30px;
margin-bottom: 20px;
`

