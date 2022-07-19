
import '../../Style/Accueil.css'
import '../../Style/Button.css'
import {useEffect} from 'react'
import { Navigate } from 'react-router-dom';

function Liens({updateTitle, user}) {
    useEffect(() => {
        updateTitle("GESTION DES LIENS D'INFORMATION");
      }, []);

      if (!user) {
        return <Navigate to="/" replace />;
      }

    return(
    <div>
     
    </div>
    )
}

export default Liens