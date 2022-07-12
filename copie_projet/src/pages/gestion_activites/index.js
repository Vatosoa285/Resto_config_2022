import '../../Style/GestionActivitesRolesSites.css'
import '../../Style/Button.css'
import {useEffect, useState} from 'react'
import ActiviteItem from './ActiviteItem';
import { ListeActivites } from './ListeActivites';
import SearchBar from '../../Components/Search';
import { Navigate } from 'react-router-dom';


function handleClickAjouter() {
  window.confirm(`Vous voulez ajouter une activité ?`)
}

function Activites({updateTitle, user}) {
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

      if (!user) {
        return <Navigate to="/" replace />;
      }
      
    return(
    <div>
    <div>
    <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}/>
    <div className='ajout-button'> <button className='pink-button' onClick={()=> handleClickAjouter()}>Ajouter une activité</button></div>
    </div>
    <br></br>
    <div className='container-titre'> <p>ACTIVITE</p><p>RESPONSABLE</p><p>ACTIONS</p></div>
    <ul  className='activite-list'>
      {filtered.map(({id, nom, responsable}) => (
       		<div key={id}>
           <ActiviteItem
             id={id}
             nom={nom}
             responsable={responsable}
           />
       </div>
       ))}
    </ul>
   
    </div>
    )   
}

export default Activites