import './Home.css'

export default function Home() {
    return (
        <div className='main-view'>
            <p className='main-view-header'>Welcome to PyTutor!</p>
            <p className='main-view-subtext'>
                PyTutor is a free and interactive Python tutorial. 
                If you would like to save your progress, log in.
            </p>
            <p className='main-view-subtext'>
                Happy hacking!
            </p>
        </div>
    )
}