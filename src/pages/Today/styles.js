import styled from "styled-components";

export const TodayHabit = styled.div`
  width: 92%;
  min-height: 91px;
  background-color: #ffffff;
  border-radius: 5px;
  padding: 13px;
  margin:10px auto;
  position:relative;
  h1{
    color:#666666;
    font-size:20px;
    margin-bottom:10px;
    margin-left: 0px;
  }
  p{
    color:#666666;
    font-size:13px
  }
`;
export const CheckBtn = styled.button`
    position:absolute;
    right:13px;
    top:11px;
    height:69px;
    width:69px;
    background-color:${({done}) => done ? "#8FC549" : "#EBEBEB"};
    border:thin solid ${({done}) => done ? "#8FC549" : "#E7E7E7"};;
    border-radius:5px;
    &:focus{
        border:thin solid ${({done}) => done ? "#8FC549" : "#E7E7E7"};;
    }
    ion-icon{
        color:#FFFFFF;
        font-size:55px;
    }
`
export const Current = styled.span`
  color:${({done}) => done && "#8FC549"};
`

export const Record = styled.span`
  color:${({record}) => record && "#8FC549"};
`