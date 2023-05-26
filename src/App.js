import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import DreamsIndex from './pages/DreamsIndex';
import DreamsShow from './pages/DreamsShow';
import NightmaresIndex from './pages/NightmaresIndex';
import NightmaresShow from './pages/NightmaresShow';

function App() {
  return (
    <div className="DreamApp"> 
        <Router>
       <Header/> 

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dreams" element={<DreamsIndex />} />
          <Route path="/:id" element={<DreamsShow />} />
          <Route path="/nightmares" element={<NightmaresIndex />} />
          <Route path="/nightmares/:id" element={<NightmaresShow />} />
        </Routes>
        </Router>
      <Footer />
    </div>
  );
}

export default App;