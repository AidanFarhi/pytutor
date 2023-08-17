import './Home.css'

export default function Home() {
    return (
        <div className='main-view' id='home-main'>
            <p id='welcome-message'>Welcome to PyTutor!</p>
            <p>
                PyTutor is a free and interactive Python tutorial. 
                If you would like to save your progress, log in.
            </p>
            <p>
                Happy hacking!
            </p>
        </div>
    )
}