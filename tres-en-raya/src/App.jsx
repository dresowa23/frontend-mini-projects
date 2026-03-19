import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Board } from './Components/Board'
import { Square } from './Components/Square'
import { Turns } from './Components/Constans'
import { checkWinner,checkEndGame } from './logic/Board'
import { WinnerModal } from './Components/WinnerModal'


function App() {
  const [board,setBoard] = useState(Array(9).fill(null))
  const [turn,setTurn] = useState(Turns.x)
  const [winner,setWinner] = useState(null)

  const resetGame = () =>{
    setBoard(Array(9).fill(null))
    setTurn(Turns.x)
    setWinner(null)
  }

  const updateBoard = (index) =>{
    if(board[index] || winner) return


    const newTurn = turn === Turns.x ? Turns.o : Turns.x 
    setTurn(newTurn)

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newWinner = checkWinner(newBoard)
    if(newWinner){
      setWinner(newWinner)
    }else if(checkEndGame(newBoard)){
      setWinner(false)
    }
  }

  return (
    <main className="board">
      <h1>Tres en raya</h1>
      <Board board={board} updateBoard={updateBoard} />
      <section className="turn">
        <Square isSelected={turn === Turns.x}>{Turns.x}</Square>
        <Square isSelected={turn === Turns.o}>{Turns.o}</Square>
      </section>
      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  )
}

export default App
