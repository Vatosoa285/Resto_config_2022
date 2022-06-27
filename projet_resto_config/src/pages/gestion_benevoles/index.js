
import '../../Style/Accueil.css'
import '../../Style/Button.css'
import {useEffect} from 'react'

function Benevoles({updateTitle}) {
    useEffect(() => {
        updateTitle("GESTION DES BENEVOLES");
      }, []);
    return(
    <div>
     
    </div>
    )
}

export default Benevoles