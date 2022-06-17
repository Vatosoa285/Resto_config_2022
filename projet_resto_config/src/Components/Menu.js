import { useState, useEffect } from 'react'
import '../Style/Menu.css'
import ListeMenu from './ListeMenu'


function Menu(){
    const [isOpen, setIsOpen] = useState(true)
    return isOpen? (
        <div className='menu-open'>
            <div>
				<h2>Menu</h2>
                <ListeMenu/>
            </div>
            <button className='close-menu-button' onClick={() => setIsOpen(false)}>x</button>
        </div>
    ) : (
        <div className='menu-closed'>
			<button className='open-menu-button' onClick={() => setIsOpen(true)}> Menu </button>
		</div>
    )
}