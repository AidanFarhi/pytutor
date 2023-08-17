import './Banner.css'
import pythonIcon from '../images/python-icon.webp'

export default function Banner() {
    return (
        <div id="banner">
            <img id='banner-icon' src={pythonIcon}/>
            <p>PyTutor</p>
        </div>
    )
}