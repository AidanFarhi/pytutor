import programmingIcon from '../images/programming.jpeg'

export default function Intro() {
    return (
        <div className='main-view'>
            <p className='main-view-header'>
                What is programming?
            </p>
            <p className='main-view-subtext'>
                Programming is the act of writing instructions for a computer to follow.
                These instructions can be written in many different languages.
                Python is one of those languages.
            </p>
            <img className='main-view-image' src={programmingIcon} />
        </div>
    )
}