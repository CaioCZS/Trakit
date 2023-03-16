import styled from "styled-components";

const FormStart = styled.form`
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

export default FormStart;
