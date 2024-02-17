import React, { Component } from 'react';
import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Footer from './components/sections/Footer';
import './sass/main.scss';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Hero />
        <About />
        <Projects />
        <Footer />
      </div>
    )
  }
};

export default App;