
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
import Oublie from '../pages/authentification/oublie';

function App() {

  const [title, updateTitle] = useState()

  return ( 
    <div className="App">
    <BrowserRouter>
    
    <Routes>
    <Route exact path="/" element={ <Login/>} />
    <Route path="/oublie" element={ <Oublie/>} />
    <Route path="/accueil" element={<div> <Header title={title}></Header>  <Accueil updateTitle={updateTitle} title={title}/> </div>} />
    <Route path="/activites" element={<div> <Header title={title}></Header><Activites updateTitle={updateTitle} title={title}/></div>} />
    <Route path='/sites' element={<div> <Header title={title}></Header><Sites updateTitle={updateTitle} title={title}/></div>}/>
    <Route path='/roles' element={<div> <Header title={title}></Header><Roles updateTitle={updateTitle} title={title}/></div>}/>
    <Route path='/benevoles' element={<div> <Header title={title}></Header><Benevoles updateTitle={updateTitle} title={title}/></div>}/>
    <Route path='/engagements' element={<div> <Header title={title}></Header><Engagements updateTitle={updateTitle} title={title}/></div>}/>
    <Route path='/profils' element={<div> <Header title={title}></Header><Profils updateTitle={updateTitle} title={title}/></div>}/>
    <Route path='/acces' element={<div> <Header title={title}></Header><Acces updateTitle={updateTitle} title={title}/></div>}/>
    <Route path='/liens' element={<div> <Header title={title}></Header><Liens updateTitle={updateTitle} title={title}/></div>}/>
    <Route path='/message' element={<div> <Header title={title}></Header><Messages updateTitle={updateTitle} title={title} /></div>}/>
    <Route path='/mdp' element={<div> <Header title={title}></Header><Mdp updateTitle={updateTitle} title={title}/></div>}/>
    <Route path='/suivi' element={<div> <Header title={title}></Header><Suivi updateTitle={updateTitle} title={title}/></div>}/>
    <Route path='/contact' element={<div> <Header title={title}></Header><Admin updateTitle={updateTitle} title={title}/></div>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
