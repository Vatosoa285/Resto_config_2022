
import '../../Style/Accueil.css'
import '../../Style/Button.css'
import {useEffect} from 'react'
import { Navigate } from 'react-router-dom';

function Messages({updateTitle, user}) {
    useEffect(() => {
        updateTitle("GESTION DES MESSAGES D'INFORMATION");
      }, []);

      if (!user) {
        return <Navigate to="/" replace />;
      }

    return(
    <div>
     
    </div>
    )
}

export default Messages