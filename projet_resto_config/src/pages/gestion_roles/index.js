import '../../Style/Accueil.css'
import '../../Style/Button.css'
import {useEffect} from 'react'

function Roles({updateTitle}) {
    useEffect(() => {
        updateTitle("GESTION DES ROLES");
      }, []);
    return(
    <div>
     
    </div>
    )
}

export default Roles