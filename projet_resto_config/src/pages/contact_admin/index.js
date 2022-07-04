import '../../Style/Accueil.css'
import '../../Style/Button.css'
import React, {useEffect} from 'react'

function Admin({updateTitle}) {
    useEffect(() => {
        updateTitle("CONTACT ADMINISTRATEURS");
      }, []);
    return(
    <div>
     <h1>test</h1>
    </div>
    )
}

export default Admin