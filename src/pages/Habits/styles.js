import styled from "styled-components";

export const HeaderUser = styled.div`
  background-color: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  height: 70px;
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  p {
    font-family: Playball;
    color: #ffffff;
    font-size: 39px;
  }
  img {
    width: 51px;
    height: 51px;
    border-radius: 98px;
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
  height: 100%;
  overflow-y: auto;
`;

export const FooterUser = styled.div`
  background-color: #ffffff;
  height: 70px;
  width: 100%;
  position: absolute;
  bottom: 0;
  right: 0;
  box-shadow: 0px -3px 5px rgba(0, 0, 0, 0.15);
  display:flex;
  justify-content:space-between;
  align-items:center;
  p {
    color: #52b6ff;
    font-size:18px;
    margin:36px 22px;
  }
`;
