import {languageIndex} from "./LanguageController.tsx";

export function aboutProjectGreetText(){
    if (languageIndex === 0) {
        return (
            <div className='about-project-greet--text'>
                <h1>Привіт! </h1>
                <h3>Це мій невеликий проект створений по грі <a href="https://store.steampowered.com/app/341800/Keep_Talking_and_Nobody_Explodes/">Keep Talking and Nobody Explodes.</a></h3>
            </div>)
    }
    else {
        return (<div className='about-project-greet--text'>
            <h1>Hello! </h1>
            <h3>This is my personal project created for the game <a href="https://store.steampowered.com/app/341800/Keep_Talking_and_Nobody_Explodes/">Keep Talking and Nobody Explodes.</a></h3>
        </div>)
    }
}

export function aboutProjectGoal(){
    if (languageIndex === 0) {
        return (
            <div className='about-project-goal'>
                <p><strong>Завдання проекту:</strong> спростити користування <a href='https://www.bombmanual.com/uk/web/index.html'>офіційним довідником</a>. </p><br/>
                <p>Цей проект не замінить офіційний довідник, лише буде помічником до нього. Тому, якщо ви знайшли цю сторінку до того, як ознайомилися з ним, будь ласка, почніть з нього.
                </p>
            </div>
        )
    }
    else {
        return (<div className='about-project-goal'>
            <p><strong>Project objectives:</strong> to simplify the use of <a href='https://www.bombmanual.com/uk/web/index.html'>official guidebook</a>. </p><br/>
            <p>This project is not intended to replace the official reference guide, but rather to serve as a supplement to it. Therefore, if you have found this page before reading the official guide, please start with it.
            </p>
        </div>)
    }
}

export function aboutProject(){
    if (languageIndex === 0) {
        return (
            <>
                <div>
                    <p>
                        Метою проекту <strong>не є</strong> автоматизувати вирішення завдань, адже це зробить гру меньш цікавою. Метою є лише допомогти вирішити деякі важкі в швидкому орієнтуванні завдання, а саме: азбука Морзе, складні дроти і послідовні дроти.
                    </p>
                </div>
                <hr/>
                <div className='about-project-mail'>
                    <p>Якщо ви маєте побажання, хочете допомогти або щось інше, ви можете зв'язатись зі мною через пошту: <a>nokhrina.daria@lll.kpi.ua</a></p>
                </div>
                <p>На данний момент, я не планую додавати сюди інші завдання, адже це вже буде автоматизація їх вирішення, а не допомога з ними.</p>
            </>
        )
    }
    else {
        return (<>
            <div>
                <p>
                    The goal of the project <strong> is not </strong> to automate solving tasks, as this would make the game less interesting. The goal is only to help solve some difficult tasks that require quick orientation, such as Morse code, complex wires, and sequential wires.
                </p>
            </div>
            <hr/>
            <div className='about-project-mail'>
                <p>If you have any requests, want to help, or anything else, you can contact me by email: <a>nokhrina.daria@lll.kpi.ua</a></p>
            </div>
            <p>At the moment, I do not plan to add other tasks here, because that would be automating their solution rather than helping with them.</p>
        </>)
    }
}