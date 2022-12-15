import logo from './logo.svg';
import './index.css'
import './App.css'
import characterArray from './data/characters.js'
import CharactersList from './components/CharactersList.js'

function App() {
  return (
    <div className="App">
      <CharactersList  characterArray = {characterArray}/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
