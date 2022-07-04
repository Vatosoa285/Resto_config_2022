
import '../../Style/Accueil.css'
import '../../Style/Button.css'
import React, {useEffect} from 'react'

function Messages({updateTitle}) {
    useEffect(() => {
        updateTitle("GESTION DES MESSAGES D'INFORMATION");
      }, []);
    return(
    <div>
     
    </div>
    )
}

export default Messages