
import '../../Style/Accueil.css'
import '../../Style/Button.css'
import {useEffect} from 'react'

function Profils({updateTitle}) {
    useEffect(() => {
        updateTitle("GESTION DES PROFILS");
      }, []);
    return(
    <div>
     
    </div>
    )
}

export default Profils