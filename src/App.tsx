import { useState } from 'react'
import './App.css'
import { ELEMLISTA } from './adat'
import JatekTer from './component/JatekTer'

function App() {

  const [lista, setLista] = useState(ELEMLISTA)
  const [lepes, setLepes] = useState(0)

  function kattintasKezelo(index: number){
    console.log(index)
    console.log(lepes)
    if(lista[index] == ""){
      const modositottLista: string[] = [...lista]
      lepes % 2 ? modositottLista[index] = "X" : modositottLista[index] = "O"
      setLista(modositottLista)
      setLepes(lepes+1)
    }
    }

  return (
    <>
      <header>
        <h1>TicTacToe</h1>
      </header>
      <article>
        <JatekTer lista={lista} kattintasKezelo={kattintasKezelo}/>
      </article>
    </>
  )
}

export default App
