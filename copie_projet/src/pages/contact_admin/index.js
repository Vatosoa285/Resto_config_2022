import '../../Style/Accueil.css'
import '../../Style/Button.css'
import {useEffect} from 'react'
import { Navigate } from 'react-router-dom';

function Admin({updateTitle, user}) {
    useEffect(() => {
        updateTitle("CONTACT ADMINISTRATEURS");
      }, []);

      if (!user) {
        return <Navigate to="/" replace />;
      }

    return(
    <div>
     
    </div>
    )
}

export default Admin