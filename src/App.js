import React, { useState, useEffect } from 'react';
import './App.css';
import ImageSearch from './components/ImageSearch';

const API_KEY = '28291536-2cdcaa97dc7ea649bd02bf0cf';

function App() {

  return (
    <div className="App">
      <ImageSearch />
    </div>
  );
}

export default App;
