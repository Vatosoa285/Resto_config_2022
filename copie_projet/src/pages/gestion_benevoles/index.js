import '../../Style/GestionBenevoles.css'
import '../../Style/Button.css'
import {useEffect, useState} from 'react'
import SearchBar from '../../Components/Search';
import { Navigate, useNavigate } from 'react-router-dom';
import { ListeBenevoles } from './ListeBenevoles';
import BenevoleItem from './BenevoleItem';



function Benevoles({updateTitle, user, setUserToModify}) {
    useEffect(() => {
        updateTitle("GESTION DES BENEVOLES");
      }, []);

      const navigate = useNavigate();

 //Barre de recherche
 const filter = (ListeBenevoles, query) => {
  if (!query) {
      return ListeBenevoles;
  }     
  return ListeBenevoles.filter((benevole) => {
    const nomBenevole = benevole.nom.toLowerCase();
    const prenomBenevole = benevole.prenom.toLowerCase();
    return (nomBenevole.includes(query.toLowerCase()) || prenomBenevole.includes(query.toLowerCase()));
});
};
const { search } = window.location;
const query = new URLSearchParams(search).get('s');
const [searchQuery, setSearchQuery] = useState(query || '');
const filtered = filter(ListeBenevoles, searchQuery);

if (!user) {
  return <Navigate to="/" replace />;
}

return(
<div>
<div>
<SearchBar
  searchQuery={searchQuery}
  setSearchQuery={setSearchQuery}/>
<div className='ajout-button'> <button className='pink-button' onClick={()=> navigate('/benevoles/ajouter')}>Ajouter un bénévole</button></div>
</div>
<br></br>
<div className='container-titre'> <p>NOM</p><p>PRENOM</p><p>EMAIL</p><p>TELEPHONE</p><p>ACTION</p></div>
<ul  className='activite-list'>
{filtered.map(({id, nom, prenom, email, telephone, setUserToModify}) => (
     <div key={id}>
     <BenevoleItem
       id={id}
       nom={nom}
       prenom={prenom}
       email={email}
       telephone={telephone}
     />
    </div>
 ))}
</ul>

</div>
)   
}

export default Benevoles