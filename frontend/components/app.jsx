import React from 'react';
import Footer from './footer';
import Header from './header';
import Demo from './demo';
import Smmry from './smmry';

const App = ({ children }) => (
  <div>
  <Header />
  <Demo />
  <Smmry />
    { children }
    <Footer />
  </div>
);

export default App;
