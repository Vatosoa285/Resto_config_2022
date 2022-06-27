
import '../../Style/Accueil.css'
import '../../Style/Button.css'
import {useEffect} from 'react'

function Suivi({updateTitle}) {
    useEffect(() => {
        updateTitle("SUIVI DES ACTIVITES");
      }, []);
    return(
    <div>
     
    </div>
    )
}

export default Suivi