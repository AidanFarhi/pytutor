import './Banner.css'
import pythonIcon from '../images/python-icon.webp'

export default function Banner() {
    return (
        <div id="banner">
            <a id='banner-link' href='/'>
                <img id='banner-icon' src={pythonIcon}/>
            </a>
            <p>PyTutor</p>
        </div>
    )
}