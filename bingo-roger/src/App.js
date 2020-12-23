import React, { useState } from 'react';

import './App.css';

function App() {

  const bolas = new Array(80).fill(0).map((value, index) => (index + 1));

  const [bolasSorteada, setBolasSorteada] = useState([]);
  const [novoSorteio, setNovoSorteio] = useState(false);
  const [ultimaBola, setUltimaBola] = useState("???");
  const [showUltimaBola, setShowUltimaBola] = useState();

  const renderBolas = () => {
    return bolas.map((bola) => {
      return (
        <>
          <div key={bola} className={bolasSorteada.includes(bola) ? "bola sorteada" : "bola"}>{bola}</div>
          {bola % 10 === 0 && <div className="break"></div>}
        </>
      )
    })
  }

  const sortear = () => {
    const numero = randomInt(1, 80);
    if (bolasSorteada.includes(numero)) {
      return sortear();
    } else {
      const _bolasSorteada = [...bolasSorteada];
      _bolasSorteada.push(numero);
      setBolasSorteada(_bolasSorteada);
      setUltimaBola(numero);

      setShowUltimaBola(true);
      setNovoSorteio(true);

      setTimeout(() => {
        setNovoSorteio(false);
        setTimeout(() => {
          setShowUltimaBola(false);
        }, 500);
      }, 1000);
    }
  }

  const imprimeUltimasSorteadas = () => {
    const qtd = 7;
    const start = (bolasSorteada.length > qtd) ? bolasSorteada.length - qtd : 0;
    const end = (bolasSorteada.length < qtd) ? qtd : bolasSorteada.length + qtd;
    return bolasSorteada.slice(start, end).join(' - ');
  }

  const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const novoJogo = () => {
    setBolasSorteada([]);
    setUltimaBola("");
    setNovoSorteio(false);
  }

  return (
    <div className="App">
      <div className="titulo">Bingo Eletronico</div>
      <div className="break"></div>

      <div className="bolas">
        {renderBolas()}
      </div>
      <div className="break"></div>
      {bolasSorteada.length > 0 &&
        <div className="ultimos">
          {imprimeUltimasSorteadas()}
        </div>
      }


      <div className="break"></div>
      <div className="botoes">
        <button onClick={() => { sortear() }}>Sortear</button>
        <button onClick={novoJogo} className="azul">Novo Jogo</button>
      </div>

      {showUltimaBola &&
        <div className={novoSorteio ? "bolaSorteada" : "bolaSorteada sumir"}>
          <div>{ultimaBola}</div>
        </div>
      }

    </div>
  );
}

export default App;
