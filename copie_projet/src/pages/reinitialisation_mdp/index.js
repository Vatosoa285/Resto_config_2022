
import '../../Style/Accueil.css'
import '../../Style/Button.css'
import {useEffect} from 'react'
import { Navigate } from 'react-router-dom';

function Mdp({updateTitle, user}) {
    useEffect(() => {
        updateTitle("REINITIALISATION DES MOTS DE PASSE");
      }, []);

      if (!user) {
        return <Navigate to="/" replace />;
      }

    return(
    <div>
     
    </div>
    )
}

export default Mdp