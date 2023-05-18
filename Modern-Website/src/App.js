import React from "react";
import './App.css'
import { Footer, Blog, Possibility, Company, Features, Header } from './containers';
import { CTA, Brand, Navbar, Feature } from './components';

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Company />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
