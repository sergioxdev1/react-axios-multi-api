import React from 'react';
import PopulationApi from './components/populationApi';
import PokeApi from './components/pokeApi';
import DogApi from './components/dogApi';
import React from 'react';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import Navbar from './components/navbar';
import DashboardPage from './pages/DashboardPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/users/*" element={<UserPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/myusers/" element={<Navigate replace to="/users" />} />
        <Route path="/users/:id" element={<UserPage />} />
        <Route path="/dashboard/*" element={<DashboardPage />}>
          <Route path="welcome" element={<p>Welcome!</p>} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}
