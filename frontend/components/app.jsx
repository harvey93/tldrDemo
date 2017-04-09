import React from 'react';
import Footer from './footer';
import Header from './header';
import Demo from './demo';
import Smmry from './smmry';
import TextToSpeech from './textToSpeech';

const App = ({ children }) => (
  <div>
  <Header />
  <Demo />
  <Smmry />
  <TextToSpeech />
    { children }
    <Footer />
  </div>
);

export default App;
