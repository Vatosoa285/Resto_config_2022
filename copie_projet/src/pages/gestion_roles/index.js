import { BrowserRouter, NavLink } from 'react-router-dom'
import '../../Style/GestionActivitesRolesSites.css'
import '../../Style/Button.css'
import {useEffect, useState} from 'react'
import RoleItem from './RoleItem';
import { ListeRoles } from './ListeRoles';
import SearchBar from '../../Components/Search';
import { Navigate } from 'react-router-dom';


function handleClickAjouter() {
  window.confirm(`Vous voulez ajouter un rôle ?`)
}

function Roles({updateTitle, user}) {
    useEffect(() => {
        updateTitle("GESTION DES ROLES");
      }, []);


 //Barre de recherche
 const filter = (ListeRoles, query) => {
  if (!query) {
      return ListeRoles;
  }     
  return ListeRoles.filter((role) => {
    const nomRole = role.type.toLowerCase();
    const descriptionRole = role.description.toLowerCase();
    return (nomRole.includes(query.toLowerCase()) || descriptionRole.includes(query.toLowerCase()));
});
};
const { search } = window.location;
const query = new URLSearchParams(search).get('s');
const [searchQuery, setSearchQuery] = useState(query || '');
const filtered = filter(ListeRoles, searchQuery);

if (!user) {
  return <Navigate to="/" replace />;
}

return(
<div>
<div>
<SearchBar
  searchQuery={searchQuery}
  setSearchQuery={setSearchQuery}/>
<div className='ajout-button'> <button className='pink-button' onClick={()=> handleClickAjouter()}>Ajouter un rôle</button></div>
</div>
<br></br>
<div className='container-titre'> <p>ROLE</p><p>DESCRIPTION</p><p>ACTIONS</p></div>
<ul  className='activite-list'>
{filtered.map(({id, type, description}) => (
     <div key={id}>
     <RoleItem
       id={id}
       type={type}
       description={description}
     />
 </div>
 ))}
</ul>

</div>
)   
}

export default Roles