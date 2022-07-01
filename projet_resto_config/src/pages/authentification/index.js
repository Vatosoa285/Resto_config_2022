import '../../Style/Accueil.css'
import '../../Style/Button.css'
import {useEffect} from 'react'

function Login({updateTitle}) {
    useEffect(() => {
        updateTitle("CONNEXION");
      }, []);
    return(
    <div>
     
    </div>
    )
}

export default Login