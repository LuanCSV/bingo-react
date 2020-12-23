import logo from './logo.svg';
import './App.css';
import Bingo from './components/Bingo';

function App() {



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Bingo Sorteio Eletronico</h1>
      </header>
      <Bingo/>
    </div>
  );
}

export default App;
