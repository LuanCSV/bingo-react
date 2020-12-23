import React from 'react'

import './Bingo.css';

function Bingo(props) {

    
    let rows = [];
    for (let i = 1; i <= 80; i++) {
      rows.push(<li id={i} key={i}>{i}</li>)
    }

    return (
        <main className="App-body">
            <ul className="App-bingo">
                {rows}
            </ul>
            <button style={{backgroundColor: "green"}}>Sortear</button>
            <button style={{backgroundColor: "purple"}}>Novo Jogo</button>
        </main>
    )
}

export default Bingo
