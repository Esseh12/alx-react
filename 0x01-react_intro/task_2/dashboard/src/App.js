import logo from './logo.jpg';
import { getFoterCopy, getFullYear } from './utils';
import './App.css';

function App() {

  const year = getFullYear();
  const footerCopy = getFoterCopy(true);

  return (
    <>
      <header className="App-header">
        <img src={logo} alt="holberton logo" />
        <h1>School dashboard</h1>
      </header>
      <main className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email:</label>
        <input type="email" placeholder="Enter your Email" />
        <label htmlFor="password">password:</label>
        <input type="password" placeholder="Enter your Password" />
        <button>OK</button>
      </main>
      <footer className="App-footer">
        <p>Copyright {year} - {footerCopy}</p>
      </footer>
    </>
  );
}

export default App;
