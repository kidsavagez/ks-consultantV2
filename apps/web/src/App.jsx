import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Specializations from './components/Specializations';
import Legacy from './components/Legacy';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-slate-50 dark:bg-background-dark text-slate-800 dark:text-slate-100 min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Specializations />
      <Legacy />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
