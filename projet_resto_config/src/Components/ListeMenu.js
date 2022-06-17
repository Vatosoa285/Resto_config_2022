import '../Style/Menu.css'

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

function ListeMenu() {
    return (
        <ul className='liste-menu'>
            {MenuList.map((categorie, index) => (
                <li key={`${categorie}-${index}`}>{ categorie }</li>
            ))}
        </ul>
    )
}

export default ListeMenu