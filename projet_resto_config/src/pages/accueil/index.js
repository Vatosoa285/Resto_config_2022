import { useState, useEffect } from 'react'
import Header from '../../Components/Header'
import Menu from '../../Components/Menu'
import '../../Style/Accueil.css'
import '../../Style/Button.css'

function Accueil() {
    return(
    <div>
        <Header/>
        <h1>Welcome</h1>
        <button className='pink-button' onClick={() => window.alert('You clicked!') }>Click</button>
        <br></br>
        <button className='blue-button' onClick={() => window.alert('You clicked!') }>Click</button>
        <br></br>
        <button className='pink-button' onClick={() => window.alert('You clicked!') }>Click</button>
        <br></br>
        <button className='blue-button' onClick={() => window.alert('You clicked!') }>Click</button>
    </div>
    )
}

export default Accueil