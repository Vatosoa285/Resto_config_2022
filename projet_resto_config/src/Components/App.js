
import '../Style/App.css';
import '../Style/Menu.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Accueil from '../pages/accueil';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Accueil/>
    </BrowserRouter>
    </div>
  );
}

export default App;
