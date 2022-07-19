import '../../Style/GestionActivitesRolesSites.css'
import '../../Style/Button.css'

function handleClickModifier(nomActivité) {
    window.confirm(`Vous voulez modifier ${nomActivité} ?`)
}

function handleClickSupprimer(nomActivité) {
    window.confirm(`Vous voulez supprimer ${nomActivité} ?`)
}


function ActiviteItem({ id, nom, responsable}) {
	return (
		<li className='container'>
            <p>{nom}</p>
            <p>{responsable}</p>
            <p>
            <button className='blue-button' onClick={()=> handleClickModifier(nom)}>Modifier</button>
            <button className='pink-button' onClick={()=> handleClickSupprimer(nom)}>Supprimer</button>
            </p>
		</li>
	)
}

export default ActiviteItem