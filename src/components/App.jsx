import React from 'react';

import Footer from './Footer';
import MainContent from './MainContent';
import TopBar from './TopBar';

import '../stylesheets/App/xl.css';

function App() {
  return (
    <div className="App">
      <TopBar />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
