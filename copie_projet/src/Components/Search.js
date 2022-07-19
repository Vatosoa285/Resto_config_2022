import '../pages/gestion_activites/index'
import { Navigate, useNavigate } from 'react-router-dom';
import '../Style/GestionActivitesRolesSites.css'



const SearchBar = ({ searchQuery, setSearchQuery }) => (
  //barre de recherches
    <form className='searchbar' action="/" method="get" >
        <input
            type="text"
            id="searchBar"
            placeholder="Rechercher"
            name="s" 
            value={searchQuery}
            onInput={e => setSearchQuery(e.target.value)} //pendant que je tappe          
        />
    </form>
);

export default SearchBar;