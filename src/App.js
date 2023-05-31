//IMPORTS//
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import DreamsIndex from './pages/DreamsIndex';
import DreamsShow from './pages/DreamsShow';
import NightmaresIndex from './pages/NightmaresIndex';
import NightmaresShow from './pages/NightmaresShow';
import DreamsEdit from './pages/DreamsEdit';
import NightmaresEdit from './pages/NightmaresEdit';
import DreamsDelete from './pages/DreamsDelete';
import NightmaresDelete from './pages/NightmaresDelete';
import DreamsForm from './pages/DreamsForm';
import NightmaresForm from './pages/NightmaresForm';

//FUNCTION APP WITH ROUTES//
function App() {
  return (
    <div className="DreamApp">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dreams" element={<DreamsIndex />} />
          <Route path="/dreams/:dreamId" element={<DreamsShow />} />
          <Route path="/nightmares" element={<NightmaresIndex />} />
          <Route path="/nightmares/:nightmareId" element={<NightmaresShow />} />
          <Route path="/dreams/:dreamId/edit" element={<DreamsEdit />} />
          <Route path="/nightmares/:nightmareId/edit" element={<NightmaresEdit />} />
          <Route path="/dreams/:dreamId/delete" element={<DreamsDelete />} />
          <Route path="/nightmares/:nightmareId/delete" element={<NightmaresDelete />} />
          <Route path="/dreamsform" element={<DreamsForm />} />
          <Route path="/nightmaresform" element={<NightmaresForm />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
