
import '../../Style/Accueil.css'
import '../../Style/Button.css'
import {useEffect} from 'react'

function Mdp({updateTitle}) {
    useEffect(() => {
        updateTitle("REINITIALISATION DES MOTS DE PASSE");
      }, []);
    return(
    <div>
     
    </div>
    )
}

export default Mdp