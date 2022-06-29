import '../../Style/GestionActivites.css'
import '../../Style/Button.css'

function handleClickModifier(nomActivité) {
    window.confirm(`Vous voulez modifier ${nomActivité} ?`)
}

function handleClickSupprimer(nomActivité) {
    window.confirm(`Vous voulez supprimer ${nomActivité} ?`)
}


function ActiviteItem({ id, nom, responsable, isnotTitle}) {
	return (
		<li className='activite-item'>
            <div className='activite-nom'>{nom} </div>
            <div className='activite-responsable'>{responsable}</div>
            <div className='activite-buttons'>
            <button className='pink-button' onClick={()=> handleClickModifier(nom)}>Modifier</button>
            <button className='blue-button' onClick={()=> handleClickSupprimer(nom)}>Supprimer</button>
            </div>
		</li>
	)
}

export default ActiviteItem