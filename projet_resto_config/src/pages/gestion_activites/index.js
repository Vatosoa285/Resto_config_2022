
import '../../Style/Accueil.css'
import '../../Style/Button.css'
import {useEffect} from 'react'

function Activites({updateTitle}) {
    useEffect(() => {
        updateTitle("GESTION DES ACTIVITES");
      }, []);
    return(
    <div>
     
    </div>
    )   
}

export default Activites