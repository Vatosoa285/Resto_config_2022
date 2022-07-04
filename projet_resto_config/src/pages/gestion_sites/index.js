import '../../Style/Accueil.css'
import '../../Style/Button.css'
import React, {useEffect} from 'react'

function Sites({updateTitle}) {
    useEffect(() => {
        updateTitle("GESTION DES SITES");
      }, []);
    return(
    <div>
     <h1> </h1>
    </div>
    )
}

export default Sites