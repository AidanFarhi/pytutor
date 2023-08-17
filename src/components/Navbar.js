import './Navbar.css'

export default function NavBar() {
    return (
        <div id='navbar-main'>
            <nav>
                <ul>
                <li>
                    <a href={`/hello`}>Hello</a>
                </li>
                <li>
                    <a href={`/goodbye`}>goodbye</a>
                </li>
                </ul>
            </nav>
        </div>
    )
}