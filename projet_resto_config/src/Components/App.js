
import '../Style/App.css';
import '../Style/Header.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
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

function App() {

  const [title, updateTitle] = useState([])

  return ( 
    <div className="App">
    <BrowserRouter>
    <Header></Header> 
    <Routes>
    <Route path="/" element={ <Accueil/>} />
    <Route path="/activites" element={<Activites/>} />
    <Route path='/sites' element={<Sites/>}/>
    <Route path='/roles' element={<Roles/>}/>
    <Route path='/benevoles' element={<Benevoles/>}/>
    <Route path='/engagements' element={<Engagements/>}/>
    <Route path='/profils' element={<Profils/>}/>
    <Route path='/acces' element={<Acces/>}/>
    <Route path='/liens' element={<Liens/>}/>
    <Route path='/message' element={<Messages/>}/>
    <Route path='/mdp' element={<Mdp/>}/>
    <Route path='/suivi' element={<Suivi/>}/>
    <Route path='/contact' element={<Admin/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
