import { Winner_Combo } from "../Components/Constans";

export const checkWinner = (boardToCheck) =>{
    for(const combo of Winner_Combo){
        const [a,b,c] = combo
        if(
            boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]
        ){
            return boardToCheck[a]
        } 
    }
}

export const checkEndGame = (newBoard) =>{
    return newBoard.every((square) => square !== null)
}