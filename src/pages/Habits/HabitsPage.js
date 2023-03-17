import { HeaderUser,BtnP,MessageNone,BodyHabit,FooterUser } from "./styles";

export default function HabitsPage(){
    return(
        <>
        <HeaderUser data-test="header">
            <p>TrackIt</p>
            <img alt="Imagem Perfil" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlAFNbMMcoO9LUzTNd4ScxQmnMEhhcrl55Ww&usqp=CAU"/>
        </HeaderUser>
        <BodyHabit>
        <BtnP>
            <p>Meus hábitos</p>
            <button>+</button>
        </BtnP>
        <MessageNone>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</MessageNone>
        </BodyHabit>
        <FooterUser>
            <p>Hábitos</p>
            <p>Histórico</p>
        </FooterUser>
        </>
    )
}