
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Team from './components/Team';
import Mainstate from './context/Mainstate';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Mainstate>
      <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/team" element={<Team/>}/>
      </Routes>
      </BrowserRouter>
    </Mainstate>
  );
}

export default App;
