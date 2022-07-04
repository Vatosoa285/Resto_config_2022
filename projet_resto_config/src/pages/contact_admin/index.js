import '../../Style/Accueil.css'
import '../../Style/Button.css'
import {useEffect} from 'react'

function Admin({updateTitle}) {
    useEffect(() => {
        updateTitle("CONTACT ADMINISTRATEURS");
      }, []);
    return(
    <div>
     
    </div>
    )
}

export default Admin