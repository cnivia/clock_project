import logo from './logo.svg';
import './App.css';
import Clock from './clock';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
        <Clock/>
        </p>
      </header>
    </div>
  );
}

export default App;
