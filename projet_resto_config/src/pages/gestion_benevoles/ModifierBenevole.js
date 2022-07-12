import '../../Style/GestionBenevoles.css'
import '../../Style/Button.css'
import {useEffect, useState} from 'react'
import SearchBar from '../../Components/Search';
import { useNavigate, Navigate } from 'react-router-dom';
import { ListeBenevoles } from './ListeBenevoles';
import BenevoleItem from './BenevoleItem';



function ModifierBenevole({updateTitle, user, userToModify}) {
    useEffect(() => {
        updateTitle("MODIFICATION D'UN BENEVOLE");
      }, []);

      const [username, setUserName] = useState();
      const [password, setPassword] = useState();
      const [isSubmit, setIsSubmit] = useState(false);
    
      const navigate = useNavigate();
      
      // Verifie que les identifiants sont valides avant de mettre submit à true
      const handleSubmit = (err) => {
            err.preventDefault();
           if (validate()) { setIsSubmit(true);
          }   
        }
      
        // Conditions sur les identifiants
        const validate = () => {
          var email = document.getElementById("id").value;
          var mdp = document.getElementById("password").value;
          const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
          if (!regex.test(email)) {
            window.alert("L'adresse mail n'a pas un format valide")
            return false
          }
          else {return true}
      }
       
      // si l'authentification est réussie on est redirigés vers l'accueil
      useEffect(() => {
          if (isSubmit) {
            setIsSubmit(false);
            document.getElementById("id").value='';
            navigate('/accueil');
          }
      })

      if (!user) {
        return <Navigate to="/" replace />;
      }

      return(
     
        <form className='ajout-benevole' onSubmit={handleSubmit}>
          <label>
            <p>Nom : <input type="text" id="nom" /></p>
          </label>
          <label>
                <p>Prénom : <input type="text" id= "prenom"  value={userToModify}/></p>
          </label>
          <p>Sexe  : <input type="radio" id= "m" name='sexe' value='M'/>
            <label for='m'>M</label>
            <input type="radio" id= "f" name='sexe' value='F' />
            <label for='f'>F</label>
          </p>  
          <label>
                <p>Email : <input type="email" id= "email" /></p>
          </label>
          <label>
                <p>Téléphone :  <input type="tel" id= "telephone" /></p>
          </label>
          <label>
                <p>Date de naissance :  <input type="date" id= "birthDate"/></p>
          </label>
          <label>
                <p>Lieu de Naissance : <input type="text" id= "birthCity" /></p>
          </label>
          <label>
                <p>Adresse :  <input type="text" id= "adresse"/></p>
          </label>
          <label>
                <p>Code postal : <input type="text" id= "postal" /></p>
          </label>
          <label>
                <p>Ville : <input type="text" id= "ville" /></p>
          </label>
          <label>
                <p>Profession : <input type="text" id= "profession"/></p>
          </label>
          <label>
                <p>1ère inscription : <input type="text" id= "firstTime" /></p>
          </label>
          <label>
                <p>Ecole : <input type="text" id= "ecole"  /></p>
          </label>
          <p>Annuaire  : <input type="radio" id= "annuaireOui" name='annuaire' value='true'  />
            <label for='annuaireOui'>Oui</label>
            <input type="radio" id= "annuaireNon" name='annuaire' value='false'  />
            <label for='annuaireNon'>Non</label>
          </p> 
          <p>Collegiale  : <input type="radio" id= "collegialeOui" name='collegiale' value='true'  />
            <label for='collegialeOui'>Oui</label>
            <input type="radio" id= "collegialeNon" name='collegiale' value='false'  />
            <label for='collegialeNon'>Non</label>
          </p> 
          <p>Accueilleur  : <input type="radio" id= "accueilleurOui" name='accueilleur' value='true'  />
            <label for='accueilleurOui'>Oui</label>
            <input type="radio" id= "accueilleurNon" name='accueilleur' value='false'  />
            <label for='accueilleurNon'>Non</label>
          </p> 

          <p>Permis  : <input type="radio" id= "permisOui" name='permis' value='true'  />
            <label for='permisOui'>Oui</label>
            <input type="radio" id= "permisNon" name='permis' value='false'  />
            <label for='permisNon'>Non</label>
          </p>  

          <p>Permis poids lourd : <input type="radio" id= "permisPLOui" name='permisPL' value='true'  />
            <label for='permisPLOui'>Oui</label>
            <input type="radio" id= "permisPLNon" name='permisPL' value='false'  />
            <label for='permisPLNon'>Non</label>
          </p> 

          <p>Autorisation Conduite : <input type="radio" id= "autorise" name='autoConduite' value='true'  />
            <label for='autorise'>Oui</label>
            <input type="radio" id= "nonAutorise" name='autoConduite' value='false'  />
            <label for='nonAutorise'>Non</label>
          </p> 
          <label>
                <p>Contact : <input type="text" id= "contact"  /></p>
          </label>
          <p>Téléphone : <input type="radio" id= "android" name='telephone' value='android'  />
            <label for='android'>Android</label>
            <input type="radio" id= "iPhone" name='telephone' value='iPhone'  />
            <label for='iPhone'>iPhone</label>
          </p> 


          <br></br><br></br>

          <div className='button'>
            <button className='pink-button' type="submit">Ajouter</button>
          </div> 
        </form>
    
      )}
export default ModifierBenevole