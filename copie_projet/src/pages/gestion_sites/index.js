import '../../Style/GestionActivitesRolesSites.css'
import '../../Style/Button.css'
import {useEffect, useState} from 'react'
import { Navigate } from 'react-router-dom';
import SiteItem from './SiteItem';
import { ListeSites } from './ListeSites';
import SearchBar from '../../Components/Search';

function handleClickAjouter() {
  window.confirm(`Vous voulez ajouter une activité ?`)
}

function Sites({updateTitle, user}) {
    useEffect(() => {
        updateTitle("GESTION DES SITES");
      }, []);

     //Barre de recherche
     const filter = (ListeSites, query) => {
      if (!query) {
          return ListeSites;
      }     
      return ListeSites.filter((site) => {
        const nomSite = site.lieu.toLowerCase();
        const descriptionSite = site.description.toLowerCase();
        return (nomSite.includes(query.toLowerCase()) || descriptionSite.includes(query.toLowerCase()));
    });
};
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    const filtered = filter(ListeSites, searchQuery);

    if (!user) {
      return <Navigate to="/" replace />;
    }
    
  return(
  <div>
  <div>
  <SearchBar
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}/>
  <div className='ajout-button'> <button className='pink-button' onClick={()=> handleClickAjouter()}>Ajouter un site</button></div>
  </div>
  <br></br>
  <div className='container-titre'> <p>SITE</p><p>DESCRIPTION</p><p>ACTIONS</p></div>
  <ul  className='activite-list'>
    {filtered.map(({id, lieu, description}) => (
         <div key={id}>
         <SiteItem
           id={id}
           lieu={lieu}
           description={description}         />
     </div>
     ))}
  </ul>
 
  </div>
  )   
}

export default Sites