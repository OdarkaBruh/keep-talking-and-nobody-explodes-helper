let language:string = 'Ukrainian'; //or "Ukrainian"

const toggleStar_UA : string[] = ["Зірка", "Нема зірки"];
const toggleLight_UA : string[] = ["Світло", "Нема світла"];

const toggleStar_ENG : string[] = ["Star", "No star"];
const toggleLight_ENG : string[] = ["Light", "No light"];

const cutResult_UA : string[] = ["Ріжте", "Не ріжте", "2+ елементи живлення?", 'Остання цифра серійного номера парна?', "Є паралельний порт?" ];
const cutResult_ENG  : string[] = ["Cut", "Don't cut", "Does it have 2+ batteries?", "Is the last digit of the serial number even?", "Does it have a parallel port?"]

const noteAboutCuttingWires_UA : string = "Якщо відповідь на питання \"Так\" - ріжте провід.";
const noteAboutCuttingWires_ENG : string = "If the answer to the question is \"Yes\", cut the wire.";

const linkToInstruction_ENG : string = "Click here to go to the original instructions.";
const linkToInstruction_UA : string = "Натисніть тут, щоб перейти до оригінальної інструкції.";


export function toggleLanguage(){
    if (language==='English') language=("Ukrainian");
    else language=("English");
}

/* =============  WiresVertical.tsx and it's children ======================*/
export function textToggleStar(index){
    if (language == 'English'){
        return toggleStar_ENG[index];
    }
    else return toggleStar_UA[index];
}

export function textToggleLight(index){
    if (language == 'English'){
        return toggleLight_ENG[index];
    }
    else return toggleLight_UA[index];
}

export function textCutResult(index){
    if (language == 'English'){
        return cutResult_ENG[index];
    }
    else return cutResult_UA[index];
}

export function textNoteAboutCuttingWires() {
    if (language == 'English') return noteAboutCuttingWires_ENG;
    else return noteAboutCuttingWires_UA;

}

export function textLinkToInstruction() {
    if (language == 'English') return (<a href='https://www.bombmanual.com/web/index.html'>{linkToInstruction_ENG}</a>);
    else return (<a href='https://www.bombmanual.com/uk/web/index.html'>{linkToInstruction_UA}</a>);

}