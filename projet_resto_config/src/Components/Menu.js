import { useState, useEffect } from 'react'
import '../Style/Menu.css'
import ListeMenu from './ListeMenu'


function Menu(){
    const [isOpen, setIsOpen] = useState(true)
    return isOpen? (
        <div className='menu-open' >
            <div className='titre-menu'>
				<h2 >Menu</h2>
            </div>
            <ListeMenu/>
            <button className='close-menu-button' onClick={() => setIsOpen(false)}></button>
        </div>
    ) : (
        <div className='menu-closed'>
			<button className='open-menu-button' onClick={() => setIsOpen(true)}></button>
		</div>
    )
}

export default Menu