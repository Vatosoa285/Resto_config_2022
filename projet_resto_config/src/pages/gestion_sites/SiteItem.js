import '../../Style/GestionActivitesRolesSites.css'
import '../../Style/Button.css'

function handleClickModifier(site) {
    window.confirm(`Vous voulez modifier ${site} ?`)
}

function handleClickSupprimer(site) {
    window.confirm(`Vous voulez supprimer ${site} ?`)
}


function SiteItem({ id, lieu, description}) {
	return (
		<li className='container'>
            <p>{lieu}</p><p>{description}</p>
            <p>
            <button className='blue-button' onClick={()=> handleClickModifier(lieu)}>Modifier</button>
            <button className='pink-button' onClick={()=> handleClickSupprimer(lieu)}>Supprimer</button>
            </p>
		</li>
	)
}

export default SiteItem