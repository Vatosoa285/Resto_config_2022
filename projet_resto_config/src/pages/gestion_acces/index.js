import '../../Style/Accueil.css'
import '../../Style/Button.css'
import React, {useEffect} from 'react'

function Acces({updateTitle}) {
    
    useEffect(() => {
        updateTitle("GESTION DES DROITS D'ACCES");
      }, []);
    return(
    <div>
     
    </div>
    )
}

export default Acces