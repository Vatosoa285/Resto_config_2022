import '../../Style/Accueil.css'
import '../../Style/Button.css'
import {useEffect} from 'react'

function Sites({updateTitle}) {
    useEffect(() => {
        updateTitle("GESTION DES SITES");
      }, []);
    return(
    <div>
     
    </div>
    )
}

export default Sites