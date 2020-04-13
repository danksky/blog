import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import Footer from './Footer';
import MainContent from './MainContent';
import TopBar from './TopBar';

import '../stylesheets/App/xl.css';

function App() {
  return (
    <div className="App">
      <Router>
        <TopBar />
        <MainContent />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
