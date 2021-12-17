import React from 'react';
import { Routes, Route } from 'react-router-dom';

import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import EasterEgg from './components/EasterEgg';
import Header from './components/Header';
import HomePage from './components/HomePage';
import ProjectsList from './components/ProjectsList';

import './styles/App.css';

function App() {
  return (
    <div className="App">

      <Header />
      <Routes>
      <Route path="/" element ={<HomePage />} />
      <Route path="/AboutMe" element={<AboutMe />} />
      <Route path="/Projects" element={<ProjectsList />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/EasterEgg" element={<EasterEgg/>} />
      </Routes>
    </div>
  );
}

export default App;
