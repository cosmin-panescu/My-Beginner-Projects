import React from 'react';
import './App.scss';
import Navbar from "../Navbar/Navbar"
import Header from '../Header/Header';
import About from "../About/About"
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <>
      <div className="app" id='app' data-scroll-container>
        <Helmet>
          <title>Cosmin Panescu | Front End Developer | Digital Marketer</title>
          <meta
            name='description'
            content="I am a FrontEnd and a WordPress Developer based in Romania, who lately has also focused on SEO. So, I don't just develop websites for you, I also bring them to the top of searches."
          />
        </Helmet>
        <Navbar />
        <Header />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
