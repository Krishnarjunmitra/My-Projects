import React from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import ProjectSection from './components/ProjectSection/ProjectSection';
import SkillsSection from './components/SkillsSection/SkillsSection';
import ContactSection from './components/ContactSection/ContactSection';
import AboutSection from './components/AboutSection/AboutSection';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="app">
      <Header />
      <HeroSection />
      <ProjectSection />
      <SkillsSection />
      <ContactSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default App;