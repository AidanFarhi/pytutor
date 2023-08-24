import './Navbar.css'

export default function NavBar() {
    return (
        <div id='navbar-main'>
            <p className='section-title'>Basics</p>
            <a className={window.location.pathname === '/intro' ? 'active' : null} href={`/intro`}>
                Intro
            </a>
            <a href={`/data-types`}>
                Basic data types
            </a>
            <a href={`/intro`}>Numbers</a>
            <a href={`/intro`}>Strings</a>
            <a className={window.location.pathname === '/variables' ? 'active' : null} href={`/variables`}>
                Variables
            </a>
            <a href={`/intro`}>Operators</a>
            <p className='section-title'>Collections</p>
            <a href={`/hello`}>Hello</a>
            <p className='section-title'>Loops</p>
            <a href={`/hello`}>Hello</a>
            <p className='section-title'>Functions</p>
            <a href={`/hello`}>Hello</a>
            <p className='section-title'>Classes</p>
            <a href={`/hello`}>Hello</a>
            <p className='section-title'>Modules</p>
            <a href={`/hello`}>Hello</a>
            <p className='section-title'>Files</p>
            <a href={`/hello`}>Hello</a>
            <p className='section-title'>Advanced</p>
            <a href={`/hello`}>Hello</a>
        </div>
    )
}