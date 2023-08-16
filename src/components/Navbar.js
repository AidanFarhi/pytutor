import './Navbar.css'
import pythonIcon from '../images/python-icon.webp'

export default function Navbar() {
    return (
        <div id="navbar">
            <img id='navbar-icon' src={pythonIcon}/>
            <p>PyTutor</p>
        </div>
    )
}