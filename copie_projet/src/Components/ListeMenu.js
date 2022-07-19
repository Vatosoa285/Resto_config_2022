import '../Style/Header.css'
import { NavLink } from 'react-router-dom'


//Liste des liens de pages à mettre dans le menu
function ListeMenu() {
    return (
        <nav>
        <ul className='liste-menu'>
            <li><NavLink to="/accueil">Accueil</NavLink></li>
            <li><NavLink to="/activites">Gestion des activités</NavLink></li>
            <li><NavLink to="/sites">Gestion des sites</NavLink></li>
            <li><NavLink to="/roles">Gestion des rôles</NavLink></li>
            <li><NavLink to="/benevoles">Gestion des bénévoles</NavLink></li>
            <li><NavLink to="/engagements">Gestion des engagements</NavLink></li>
            <li><NavLink to="/profils">Gestion des profils</NavLink></li>
            <li><NavLink to="/acces">Gestion des droits d'accès</NavLink></li>
            <li><NavLink to="/liens">Gestion des liens d'information</NavLink></li>
            <li><NavLink to="/suivi">Suivi d'activité</NavLink></li>
            <li><NavLink to="/message">Messages d'information</NavLink></li>
            <li><NavLink to="/mdp">Réinitialisation des mots de passe</NavLink></li>
            <li><NavLink to="/contact">Contact administrateurs</NavLink></li>
        </ul>
        </nav>
    )
}

export default ListeMenu