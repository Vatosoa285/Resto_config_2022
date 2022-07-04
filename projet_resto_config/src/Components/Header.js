
import '../Style/Header.css'
import logo from "../assets/logo.svg"
import { useState } from 'react'
import ListeMenu from './ListeMenu'
import { NavLink, useNavigate } from 'react-router-dom'

function Header({title}) {
    const [isOpen, setIsOpen] = useState(true)
    const [connected, setConnected] = useState(true)
    const navigate = useNavigate();

    const deconnexion = () => {
        if (window.confirm("Voulez-vous vraiment vous déconnecter ?") ) {
            navigate("/");
        }
    }

    return isOpen? ( //quand le menu est ouvert
        <div className={""}>
            <div className='RSTO_header'>
                <div className={"SIDE"}/>
                <div className={"RSTO_WRAP"}>
                    <img className={"RSTO_logo"} src={logo} alt={"logo"}/>
                </div>
                <div className={"FILL"}/>
                <div className={"titre"}>
                    {title}
                </div>
                <div className={"FILL"}/>
                <div className={"RSTO_MENU"}>
                <button className='menuOpen-button'  onClick={() => setIsOpen(false)}></button>
                </div>
                <div className={"RSTO_DECO"}>
                <button className='deco-button' onClick={() => deconnexion()}></button>
                </div>
                <div className={"SIDE"}/>
            </div>
            <div className='menu-open'>
                        <ListeMenu/>
            </div>
        </div>


    ) : ( //quand le menu est fermé
        <div className={""}>
            <div className='RSTO_header'>
                <div className={"SIDE"}/>
                <div className={"RSTO_WRAP"}>
                    <img className={"RSTO_logo"} src={logo} alt={"logo"}/>
                </div>
                <div className={"FILL"}/>
                <div className={"titre"}>
                    {title}
                </div>
                <div className={"FILL"}/>
                <div className={"RSTO_MENU"}>
                <button className='menuClose-button' onClick={() => setIsOpen(true)}></button>
                </div>
                <div className={"RSTO_DECO"}>
                <button className='deco-button' onClick={() => deconnexion()}></button>
                </div>
            <div className={"SIDE"}/>
         </div>
    </div>
    )
}





export default Header;
