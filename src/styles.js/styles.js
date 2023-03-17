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
}
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