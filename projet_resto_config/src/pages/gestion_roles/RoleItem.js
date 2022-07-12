import '../../Style/GestionActivitesRolesSites.css'
import '../../Style/Button.css'

function handleClickModifier(nomRole) {
    window.confirm(`Vous voulez modifier ${nomRole} ?`)
}

function handleClickSupprimer(nomRole) {
    window.confirm(`Vous voulez supprimer ${nomRole} ?`)
}


function RoleItem({ id, type, description}) {
	return (
		<li className='container'>
            <p>{type}</p><p>{description}</p>
            <p>
            <button className='blue-button' onClick={()=> handleClickModifier(type)}>Modifier</button>
            <button className='pink-button' onClick={()=> handleClickSupprimer(type)}>Supprimer</button>
            </p>
		</li>
	)
}

export default RoleItem