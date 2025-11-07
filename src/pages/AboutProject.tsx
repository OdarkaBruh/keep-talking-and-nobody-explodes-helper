import "./CSS/AboutProject.css"

export default function AboutProject() {
    const officialGuide = (
      <a href='https://www.bombmanual.com/uk/web/index.html'>офіційним довідником</a>);

    return(
        <div className='about-project__parent'>
            <div className='about-project-greet'>
                <img src='src/assets/icon.jpg' />
                <div className='about-project-greet--text'>
                    <h1>Привіт! </h1>
                    <h3>Це мій невеликий проект створений по грі <a href="https://store.steampowered.com/app/341800/Keep_Talking_and_Nobody_Explodes/">Keep Talking and Nobody Explodes.</a></h3>
                </div>

            </div>
            <div className='about-project'>
                <div className='about-project-goal'>
                    <p><strong>Завдання проекту:</strong> спростити користування {officialGuide}. </p><br/>
                    <p>Цей проект не замінить офіційний довідник, лише буде помічником до нього. Тому, якщо ви знайшли цю сторінку до того, як ознайомилися з ним, будь ласка, почніть з нього.
                    </p>
                </div>

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
            </div>
        </div>
    )
}