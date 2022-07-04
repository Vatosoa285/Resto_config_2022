import { BrowserRouter, NavLink } from 'react-router-dom'
import '../../Style/GestionActivites.css'
import '../../Style/Button.css'
import {useEffect, useState} from 'react'
import ActiviteItem from './ActiviteItem';
import { ListeActivites } from './ListeActivites';
import SearchBar from '../../Components/Search';


function handleClickAjouter() {
  window.confirm(`Vous voulez ajouter une activité ?`)
}


function Activites({updateTitle}) {
    //Mise à jour du titre de la page
    useEffect(() => {
        updateTitle("GESTION DES ACTIVITES");
      }, []);

      //Barre de recherche
      const filter = (ListeActivites, query) => {
        if (!query) {
            return ListeActivites;
        }     
        return ListeActivites.filter((activite) => {
          const nomActivite = activite.nom.toLowerCase();
          const responsableActivite = activite.responsable.toLowerCase();
          return (nomActivite.includes(query.toLowerCase()) || responsableActivite.includes(query.toLowerCase()));
      });
  };
      const { search } = window.location;
      const query = new URLSearchParams(search).get('s');
      const [searchQuery, setSearchQuery] = useState(query || '');
      const filtered = filter(ListeActivites, searchQuery);

  
      
    return(
    <div>
    <div>
    <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}/>
    <div className='ajout-button'> <button className='pink-button' onClick={()=> handleClickAjouter()}>Ajouter une activité</button></div>
    </div>
    <ul  className='activite-list'>
      {filtered.map(({id, nom, responsable, isnotTitle}) => (
       		<div key={id}>
           <ActiviteItem
             id={id}
             nom={nom}
             responsable={responsable}
             isnotTitle={isnotTitle}
           />
       </div>
       ))}
    </ul>
   
    </div>
    )   
}

export default Activites