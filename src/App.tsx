import React from 'react';
import Header from './components/Layout/Header';
import Hero from './components/Home/Hero';
import Features from './components/Home/Features';
import SimulationSection from './components/Home/SimulationSection';
import FinancialLiteracy from './components/Home/FinancialLiteracy';
import Quiz from './components/Home/Quiz';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Features />
        <FinancialLiteracy />
        <SimulationSection />
        <Quiz />
      </main>
    </div>
  );
}

export default App;
