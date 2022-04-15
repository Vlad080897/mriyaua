import React, { useState } from 'react';
import { Redirect } from 'react-router'
import { Routes, Route, Link } from 'react-router-dom';
import EnglishVersion from './components/English/English';
import UkrainianVersion from './components/Ukrainian/Ukrainian';
import './App.css';


function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<UkrainianVersion />} />
        <Route path='/en' element={<EnglishVersion />} />
      </Routes>
    </div>
  );
}

export default App;
