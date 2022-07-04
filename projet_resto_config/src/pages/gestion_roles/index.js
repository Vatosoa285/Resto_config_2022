import '../../Style/Accueil.css'
import '../../Style/Button.css'
import React, {useEffect} from 'react'

function Roles({updateTitle}) {
    useEffect(() => {
        updateTitle("GESTION DES ROLES");
      }, []);
    return(
    <div>
     <h1>test</h1>
    </div>
    )
}

export default Roles