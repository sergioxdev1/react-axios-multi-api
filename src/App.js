import React from 'react';
import PopulationApi from './components/populationApi';
import PokeApi from './components/pokeApi';
import DogApi from './components/dogApi';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import Navbar from './components/navbar';
import NotFoundPage from './pages/NotFoundPage';
import './style.css';

export default function App() {
  return (
    <div className="home">
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/usaApi" element={<PopulationApi />} />
        <Route path="/dogApi" element={<DogApi />} />
        <Route path="/pokeApi" element={<PokeApi />}>
          <Route path="welcome" element={<p>Welcome!</p>} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
    {window.location.hash="no-back-button"}
    {window.location.hash="Again-No-back-button"}
    {window.onhashchange=function(){window.location.hash="no-back-button"}}
    </div>
  );
}
