
import '../../Style/Accueil.css'
import '../../Style/Button.css'
import {useEffect} from 'react'

function Liens({updateTitle}) {
    useEffect(() => {
        updateTitle("GESTION DES LIENS D'INFORMATION");
      }, []);
    return(
    <div>
     
    </div>
    )
}

export default Liens