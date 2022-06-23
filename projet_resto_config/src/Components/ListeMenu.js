import '../Style/Header.css'
import { NavLink } from 'react-router-dom'

//Pas utilisé mais ça aurait été plus propre
const MenuList = [
    'Gestion des activités',
    'Gestion des sites',
    'Gestion des rôles',
    'Gestion des bénévoles',
    'Gestion des profils',
    'Gestion des droits d\'accès',
    'Gestion des liens d\'informations',
    'Suivi d\'activité',
    'Message d\'information',
    'Réinitialisation du mot de passe',
    'Contact administrateur'
]

//Liste des liens de pages à mettre dans le menu
function ListeMenu() {
    return (
        <nav>
        <ul className='liste-menu'>
            <li><NavLink to="/">Accueil</NavLink></li>
            <li><NavLink to="/activites">Gestion des activités</NavLink></li>
            <li><NavLink to="/sites">Gestion des sites</NavLink></li>
            <li><NavLink to="/roles">Gestion des rôles</NavLink></li>
            <li><NavLink to="/benevoles">Gestion des bénevoles</NavLink></li>
            <li><NavLink to="/profils">Gestion des profils</NavLink></li>
            <li><NavLink to="/acces">Gestion des droits d'accès</NavLink></li>
            <li><NavLink to="/info">Gestion des liens d'information</NavLink></li>
            <li><NavLink to="/suivi">Suivi d'activité</NavLink></li>
            <li><NavLink to="/message">Message d'information</NavLink></li>
            <li><NavLink to="/mdp">Réinitialisation mot de passe</NavLink></li>
            <li><NavLink to="/contact">Contact administrateur</NavLink></li>
        </ul>
        </nav>
    )
}

export default ListeMenu