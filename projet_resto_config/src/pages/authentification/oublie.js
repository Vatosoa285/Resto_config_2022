import '../../Style/Login.css'
import '../../Style/Button.css'
import logo from "../../assets/logo.svg"
import {useState, useEffect} from 'react'

function Oublie(){

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [isSubmit, setIsSubmit] = useState(false);

    // Verifie que les identifiants sont valides avant de mettre submit à true
    const handleSubmit = (err) => {
        err.preventDefault();
       if (validate()) {setIsSubmit(true);}   
    }
  
    // Conditions sur les identifiants
    const validate = () => {
      var email = document.getElementById("id").value;
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!regex.test(email)) {
         window.alert("L'adresse mail n'a pas un format valide")
         return false
      }
      else {return true}
  }

    // si l'authentification est réussie on envoie le lien de réinitialisation
    useEffect(() => {
        if (isSubmit) {
            setIsSubmit(false);
            document.getElementById("id").value='';
            window.alert("Lien envoyé. Vérifiez vos spams, sinon réessayez dans quelques minutes");
        }
    })

    return(
        <div className="oublie">
          <img className="logo" src={logo} alt={"logo"}/>
          <h1>Mot de passe oublié</h1>
          <form onSubmit={handleSubmit}>
            <label>
              <p>Adresse mail</p>
              <input type="identifiant" id="id" onChange={e => setUserName(e.target.value)}/>
            </label>
            <div className='button'>
              <button type="submit">Se connecter</button>
            </div> 
          </form>
        </div>
      )
}

export default Oublie