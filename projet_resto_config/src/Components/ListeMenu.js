const MenuList = [
    'Gestion des activités',
    'Gestion des sites',
    'Gestion des rôles',
]

function ListeMenu() {
    return (
        <ul>
            {MenuList.map((categorie, index) => (
                <li key={`${categorie}-${index}`}>{ categorie }</li>
            ))}
        </ul>
    )
}

export default ListeMenu