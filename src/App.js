import { useState } from 'react';
import './App.css';
import Jatekter from './components/Jatekter.js';

function App() {

//state - olyan változó amelynek az értékeit figyeli a reakt és ha az megváltozik akkor firssíti az oldal azon részeit amely attól a változótól függ.
    const [lista, listaBeallit] = useState(["", "X", "X", "O", "", "", "", "X", "O"])
    const [lepes, lepesNoveles] = useState(0)
    function katt(data){
      //statek beállítása a statenek közvetleünl nem adható érték csak a beállító függvényén keresztül:
      // 1. lépés = másolat készítés a változóról
      // 2. lépés = a másolaton elvégezzük a módosításokat
      // 3. lépés = a beállítófgvel értékül adjuk az új értéket a változónak

      /* Így néz ki pl. egy: */
      const LISTA = [...lista] //így nem csak referenciát adunk át, így tényleges másolat készül a memóriában a "..."-al!!!!!!!
      if(lepes % 2 === 0){
        LISTA[data] = "X"
      }else{
        LISTA[data] = "O"
      }

      let ujLepes = lepes + 1
      listaBeallit(LISTA)
      lepesNoveles(ujLepes)
      //lepesNoveles (lepes+1) - ez is jó!
      //lepesNoveles (ujLepes++) - NEM JÓ! HIBÁS! 
      console.log(lista)

}
  return (
    <div className="App">
      <header className="App-header">
        <h1> TicTacToe 2.0</h1>
        <h2>The upgraded version</h2>
      </header>
      <article>
          <Jatekter list = {lista} katt = {katt} />
      </article>
    </div>
  );
}

export default App;
