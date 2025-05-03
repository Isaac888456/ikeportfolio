import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/home/HomePage';
import About from './pages/about/About';

function App() {
  return (
    <div className="App font-sans">
       <Routes>
             <Route index path="/" element={<HomePage />}></Route>
             <Route path="/about" element={<About />}></Route>
       </Routes>
    </div>
  );
}

export default App;
