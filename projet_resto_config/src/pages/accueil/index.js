import '../../Style/Accueil.css'
import '../../Style/Button.css'
import coluche from '../../assets/coluche.jpg'

function Accueil() {
    return(
    <div>
        <h1>ACCUEIL</h1>
        <br></br><br></br> <br></br><br></br> <br></br>
       <img className='image-accueil' src={coluche}/> 
    </div>
    )
}

export default Accueil