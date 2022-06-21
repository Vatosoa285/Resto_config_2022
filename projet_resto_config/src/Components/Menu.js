import { useState, useEffect } from 'react'
import '../Style/Menu.css'
import ListeMenu from './ListeMenu'



//Menu au complet (avec titre liste et background)
function Menu(){
    const [isOpen, setIsOpen] = useState(true)
    return isOpen? ( //quand le menu est ouvert
        <div className='menu-open' >
            <div className='titre-menu'>
				<h2 >Menu</h2>
            </div>
            <ListeMenu/>
            <button className='menu-open-button' onClick={() => setIsOpen(false)}></button>
        </div>
    ) : ( // quand le menu est fermé
        <div className='menu-closed'>
			<button className='menu-close-button' onClick={() => setIsOpen(true)}></button>
		</div>
    )
}

export default Menu