
import '../../Style/Accueil.css'
import '../../Style/Button.css'
import {useEffect} from 'react'
import { Navigate } from 'react-router-dom';

function Engagements({updateTitle, user}) {
    useEffect(() => {
        updateTitle("GESTION DES ENGAGEMENTS");
      }, []);

      if (!user) {
        return <Navigate to="/" replace />;
      }

    return(
    <div>
     
    </div>
    )
}

export default Engagements