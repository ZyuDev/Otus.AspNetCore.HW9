import logo from './logo.svg';
import './App.css';
import Login from './Login';

function App() {
  return (
    <div className="App containter-fluid">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
       
      </header>
      <Login/>

    </div>
  );
}

export default App;
