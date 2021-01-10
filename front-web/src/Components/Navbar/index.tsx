import './Navbar.css'
import { ReactComponent as Logo } from './logo.svg'

function Navbar() {
    return(
        <nav className='main-navbar' >
            <a href='home'><Logo /></a>
            <a href='home' className='logo-text' >JeffDeliver</a>
        </nav>
    )
}

export default Navbar;