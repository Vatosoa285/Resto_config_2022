
import '../Style/App.css';
import '../Style/Header.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Accueil from '../pages/accueil';
import Header from './Header';
import Activites from '../pages/gestion_activites';
import Admin from '../pages/contact_admin';
import Acces from '../pages/gestion_acces';
import Benevoles from '../pages/gestion_benevoles';
import Engagements from '../pages/gestion_engagements';
import Liens from '../pages/gestion_liens';
import Profils from '../pages/gestion_profils';
import Roles from '../pages/gestion_roles';
import Sites from '../pages/gestion_sites';
import Messages from '../pages/message_infos';
import Mdp from '../pages/reinitialisation_mdp';
import Suivi from '../pages/suivi_activite';
import Login from '../pages/authentification';

function App() {

  const [title, updateTitle] = useState()

  return ( 
    <div className="App">
    <BrowserRouter>
    <Header title={title}></Header> 
    <Routes>
    <Route exact path="/" element={ <Login updateTitle={updateTitle} title={title}/>} />
    <Route path="/accueil" element={ <Accueil updateTitle={updateTitle} title={title}/>} />
    <Route path="/activites" element={<Activites updateTitle={updateTitle} title={title}/>} />
    <Route path='/sites' element={<Sites updateTitle={updateTitle} title={title}/>}/>
    <Route path='/roles' element={<Roles updateTitle={updateTitle} title={title}/>}/>
    <Route path='/benevoles' element={<Benevoles updateTitle={updateTitle} title={title}/>}/>
    <Route path='/engagements' element={<Engagements updateTitle={updateTitle} title={title}/>}/>
    <Route path='/profils' element={<Profils updateTitle={updateTitle} title={title}/>}/>
    <Route path='/acces' element={<Acces updateTitle={updateTitle} title={title}/>}/>
    <Route path='/liens' element={<Liens updateTitle={updateTitle} title={title}/>}/>
    <Route path='/message' element={<Messages updateTitle={updateTitle} title={title} />}/>
    <Route path='/mdp' element={<Mdp updateTitle={updateTitle} title={title}/>}/>
    <Route path='/suivi' element={<Suivi updateTitle={updateTitle} title={title}/>}/>
    <Route path='/contact' element={<Admin updateTitle={updateTitle} title={title}/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
