
import '../Style/Header.css'
import logo from "../assets/logo.svg"
import { useState } from 'react'
import '../Style/Menu.css'
import ListeMenu from './ListeMenu'

function Header({ children }) {
    const [isOpen, setIsOpen] = useState(true)
    return isOpen? ( //quand le menu est ouvert
        <div className={""}>
            <div className='RSTO_header'>
            <button className='menu-open-button' onClick={() => setIsOpen(false)}></button>
                <div className={"SIDE"}/>
                <div className={"RSTO_WRAP"}>
                    <img className={"RSTO_logo"} src={logo} alt={"logo"}/>
                </div>
                <div className={"FILL"}/>
                <div className={"FILL"}/>
                <div className={"FILL"}/>
                <div className={"RSTO_Accueil"}>
                </div>
                <div className={"RSTO_Contacter"}>
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
                <button className='menu-close-button' onClick={() => setIsOpen(true)}></button>
                <div className={"SIDE"}/>
                <div className={"RSTO_WRAP"}>
                    <img className={"RSTO_logo"} src={logo} alt={"logo"}/>
                </div>
                <div className={"FILL"}/>
                <div className={"FILL"}/>
                <div className={"FILL"}/>
                <div className={"RSTO_Accueil"}>
                </div>
                <div className={"RSTO_Contacter"}>
                </div>
            <div className={"SIDE"}/>
         </div>
    </div>
    )
}





export default Header;
