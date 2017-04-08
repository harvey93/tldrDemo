import React from 'react';
import Footer from './footer';
import Header from './header';
import Demo from './demo.jsx';

const App = ({ children }) => (
  <div>
  <Header />
  <Demo />
    { children }
    <Footer />
  </div>
);

export default App;
