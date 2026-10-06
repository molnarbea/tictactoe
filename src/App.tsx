import { useState } from 'react'
import './App.css'
import { ELEMLISTA } from './adat'
import JatekTer from './component/JatekTer'

function App() {

  const [lista, setLista] = useState(ELEMLISTA)
  const [lepes, setLepes] = useState(0)

  function ellenorzes(lista: string[]){
    const nyeroKombinaciok = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    for (const kombinacio of nyeroKombinaciok) {
      const [a, b, c] = kombinacio
      if (lista[a] !== "" && lista[a] === lista[b] && lista[a] === lista[c]) {
        return lista[a]
      }
    }
    return null
  }

  function kattintasKezelo(index: number){
    console.log(index)
    console.log(lepes)

    if(lista[index] == ""){
        const modositottLista: string[] = [...lista]
        lepes % 2 ? modositottLista[index] = "X" : modositottLista[index] = "O"
        setLista(modositottLista)
        setLepes(lepes+1)
        
        const nyertes = ellenorzes(modositottLista)

        if (nyertes) {
          alert("A nyertes: " + nyertes)

          setLista(["", "", "", "", "", "", "", "", ""])
          setLepes(0)
        }
        if (lepes == 8) {
          alert("Nincs nyertes!")

          setLista(["", "", "", "", "", "", "", "", ""])
          setLepes(0)
        }
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
