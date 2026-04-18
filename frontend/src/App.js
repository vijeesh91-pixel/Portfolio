import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Tagline } from './components/Tagline';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { ProjectDetail } from './components/ProjectDetail';
import { Toaster } from './components/ui/sonner';
import './App.css';

const HomePage = () => (
  <>
    <Header />
    <Hero />
    <Projects />
    <Tagline />
    <Experience />
    <Education />
    <Contact />
  </>
);

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
      </Routes>
      <Toaster position="top-center" />
    </div>
  );
}

export default App;
