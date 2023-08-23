import programmingIcon from '../images/programming.jpeg'
import pythonImage from '../images/python-image.jpeg'
import dataScienceImage from '../images/data-science-image.jpeg'
import webDevelopmentImage from '../images/web-development-image.jpeg'
import automationImage from '../images/automation-image.webp'

export default function Intro() {
    return (
        <div className='main-view'>
            <p className='main-view-header'>
                What is programming?
            </p>
            <img className='main-view-image' src={programmingIcon} />
            <p className='main-view-subtext'>
                Programming is the act of writing instructions for a computer to follow.
                These instructions can be written in many different languages.
            </p>
            <p className='main-view-header'>
                Why use Python?
            </p>
            <img className='main-view-image' src={pythonImage} />
            <p className='main-view-subtext'>
                Python is a versatile programming language that is used for many different things.
                It is much easier to learn than other programming languages like C, C++, and Java.
                In a very short time, you can start writing usefull programs.
            </p>
            <p className='main-view-header'>
                Data Science
            </p>
            <img className='main-view-image' src={dataScienceImage} />
            <p className='main-view-subtext'>
                Data scientists use Python to extract insights from data and build visualizations.
                There are also many machine learning libraries available in Python.
            </p>
            <p className='main-view-header'>
                Web Development
            </p>
            <img className='main-view-image' src={webDevelopmentImage} />
            <p className='main-view-subtext'>
                Python is used in server-side web programming. 
                There are many frameworks available that help engineers build what is called the
                "back end" of web applications.
            </p>
            <p className='main-view-header'>
                Automation
            </p>
            <img className='main-view-image' src={automationImage} />
            <p className='main-view-subtext'>
                Data engineers and software engineers use Python to automate many different tasks.
                An example would be an ETL (Extract, Transform, Load) pipeline.
            </p>
        </div>
    )
}