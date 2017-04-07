import React from 'react';
import Footer from './footer';
import Header from './header';

const App = ({ children }) => (
  <div>
  <Header />
    { children }
    <Footer />
  </div>
);

export default App;
