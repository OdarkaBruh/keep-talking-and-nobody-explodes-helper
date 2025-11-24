import "./CSS/AboutProject.css"
import {
    aboutProject,
    aboutProjectGoal,
    aboutProjectGreetText
} from "../sharedComponents/LanguageController/LanguageController_AboutProject.tsx";

export default function AboutProject() {


    return(
        <div className='about-project__parent'>
            <div className='about-project-greet'>
                <img src='https://avatars.githubusercontent.com/u/128902936?v=4' />
                {aboutProjectGreetText() }

            </div>
            <div className='about-project'>
                {aboutProjectGoal()}
                {aboutProject()}
            </div>
        </div>
    )
}