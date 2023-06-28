import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'; // Import the HomePage component
import './App.css';
import FindTradie from './pages/FindTradie';
import Navbar from './components/Navbar'

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
    <>
    <Navbar />
      <div className="App">
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/find-tradie" element={<FindTradie />} />
            <Route path="/*" element={<></>} />
        </Routes>
      </div>
    </>
  );
}
export default App;
