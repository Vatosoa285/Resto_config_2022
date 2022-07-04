import '../../Style/Accueil.css'
import '../../Style/Button.css'
import coluche from '../../assets/coluche.jpg'
import {useEffect} from 'react'

function Accueil({updateTitle}) {

    useEffect(() => {
        updateTitle("ACCUEIL");
      }, []);
    
    return(
    <div>
        
       <img className='image-accueil' src={coluche}/> 
    </div>
    )
}

export default Accueil