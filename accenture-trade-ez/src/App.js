import logo from './assets/logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Import the HomePage component
import TradieRegisterationPage from './pages/TradieRegisteration';
import './App.css';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}*/
function App() {
  return (
    // <div className="App">
    //   <HomePage/>
    // </div>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/tradie-register" element={<TradieRegisterationPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
