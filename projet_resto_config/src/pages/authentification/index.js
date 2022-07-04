import '../../Style/Login.css'
import '../../Style/Button.css'
import logo from "../../assets/logo.svg"
import {useState, useEffect} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'




function Login() {

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [isSubmit, setIsSubmit] = useState(false);


  const navigate = useNavigate();

  // Verifie que les identifiants sont valides avant de mettre submit à true
  const handleSubmit = (err) => {
        err.preventDefault();
       if (validate()) {setIsSubmit(true)}
        
    }
  
    // Conditions sur les identifiants
    const validate = () => {
      var email = document.getElementById("id").value;
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!regex.test(email)) {
         window.alert('mail invalide')
         return false
      }
      else {return true}
  }
   
  // si l'authentification est réussie on est redirigés vers l'accueil
  useEffect(() => {
      if (isSubmit) {
          return (navigate('/accueil'));
      }

  })


  return(
    <div className="login">
      <img className="logo" src={logo} alt={"logo"}/>
      <h1>Connexion</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Identifiant</p>
          <input type="identifiant" id="id" onChange={e => setUserName(e.target.value)}/>
        </label>
        <label>
          <p>Mot de passe</p>
          <input type="password" id= "password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <div className='button'>
          <button type="submit">OK</button>
        </div>
        <NavLink to="/oublie">Mot de passe oublié ?</NavLink>    
      </form>
    </div>
  )
}
    

export default Login