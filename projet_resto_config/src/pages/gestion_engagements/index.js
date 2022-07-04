
import '../../Style/Accueil.css'
import '../../Style/Button.css'
import React, {useEffect} from 'react'

function Engagements({updateTitle}) {
    useEffect(() => {
        updateTitle("GESTION DES ENGAGEMENTS");
      }, []);
    return(
    <div>
     
    </div>
    )
}

export default Engagements