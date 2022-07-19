import '../../Style/Accueil.css'
import '../../Style/Button.css'
import {useEffect} from 'react'
import { Navigate } from 'react-router-dom';

function Acces({updateTitle, user}) {
    
    useEffect(() => {
        updateTitle("GESTION DES DROITS D'ACCES");
      }, []);

      if (!user) {
        return <Navigate to="/" replace />;
      }

    return(
    <div>
     
    </div>
    )
}

export default Acces