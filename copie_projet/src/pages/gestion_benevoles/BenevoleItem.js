import '../../Style/GestionBenevoles.css'
import '../../Style/Button.css'
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'

function BenevoleItem({ id, nom, prenom, email, telephone, setUserToModify}) {

    const navigate = useNavigate();

    const modifier = (nom) => {
        setUserToModify(nom);
        navigate('/benevoles/modifier');
    }
    
	return (
		<li className='container'>
            <p>{nom}</p>
            <p>{prenom}</p>
            <p>{email}</p>
            <p>{telephone}</p>
            <p>
            <button className='blue-button' onClick={()=> modifier(nom)}>Modifier</button>
            </p>
		</li>
	)
}

export default BenevoleItem