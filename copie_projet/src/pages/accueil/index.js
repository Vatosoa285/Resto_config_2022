import '../../Style/Accueil.css'
import coluche from '../../assets/coluche.jpg'
import {useEffect} from 'react'
import { Navigate } from 'react-router-dom';


function Accueil({updateTitle, user}) {

    useEffect(() => {
        updateTitle("ACCUEIL");
      }, []);
    
    if (!user) {
      return <Navigate to="/" replace />;
    }

    return(
    <div>
      <h2 className='accueil-h'>Bienvenue sur l'application de configuration !</h2>
       <img className='image-accueil' src={coluche}/> 
       <h4 className='accueil-h'>Coluche (1944-1986)</h4>
    </div>
    )
}

export default Accueil