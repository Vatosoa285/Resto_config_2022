import '../../Style/GestionActivites.css'
import '../../Style/Button.css'
import React, { Component } from 'react';

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
          
            <button className='pink-button' onClick={()=> handleClickModifier(nom)}>Modifier</button>
            <button className='blue-button' onClick={()=> handleClickSupprimer(nom)}>Supprimer</button>
        
		</li>
	)
}

export default ActiviteItem