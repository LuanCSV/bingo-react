import React, { useState } from 'react'

import './Bingo.css';

function Bingo(props) {

    
    let bolas = new Array(80).fill(1).map((bolas,index) => index+1);
    const [bolasSorteadas, setBolasSorteadas] = useState([]);
    const [ultimoSorteado, setUltimoSorteados] = useState("0");
    const [sorteio, setSorteio] = useState(false);
    const [showLayout, setShowLayout] = useState(false);

    const renderizarBolas = () => {
        return bolas.map((bola) => {
            return (
                <li 
                    key={bola}
                    className={bolasSorteadas.includes(bola)? 'bola sorteada': 'bola'}
                >
                    {bola}
                </li>
            )
        })
    }

    const sortearBola = () => {
        const numeroSorteado = randomBola(1, 80);

        if (bolasSorteadas.includes(numeroSorteado)) {
            return sortearBola();
        } else {
            const copiaArray = [...bolasSorteadas];
            copiaArray.push(numeroSorteado);
            setBolasSorteadas(copiaArray);
            setUltimoSorteados(numeroSorteado);

            setSorteio(true);
            setShowLayout(true);
            layoutBolaSorteada();
        }
    }

    const layoutBolaSorteada = () => {
        setTimeout(() => {
            setSorteio(false);
            setTimeout(() => {
                setShowLayout(false);
            } , 500);
        }, 1000);
    }

    const renderUltimasSorteadas = () => {
        const qtd = 8;
        const start = (bolasSorteadas.length > qtd) ? bolasSorteadas.length - qtd : 0;
        const end = (bolasSorteadas.length < qtd) ? qtd : bolasSorteadas.length + qtd;
        return bolasSorteadas.slice(start, end).join(" - ");
    }

    const novoJogo = () => {
        setUltimoSorteados("0");
        setBolasSorteadas([]);
    }

    const randomBola = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return (
        <main className="App-body">
            <ul className="App-bingo">
                {renderizarBolas()}
            </ul>

            {bolasSorteadas.length === 80 ?  
                <button disabled style={{backgroundColor: "gray"}}>Sortear</button> :
                <button onClick={sortearBola} style={{backgroundColor: "green"}}>Sortear</button>
            }
            <button onClick={novoJogo} style={{backgroundColor: "purple"}}>Novo Jogo</button>
            
            <br/>

            {bolasSorteadas.length !== 0 &&
                <div className="numSorteados">
                    {renderUltimasSorteadas()}
                </div>
            }

            {showLayout &&
                <div className={sorteio? "ultimoSorteado" : "ultimoSorteado opaco"}>
                    <p>{ultimoSorteado}</p>
                </div>
            }
            
        </main>
    )
}

export default Bingo
