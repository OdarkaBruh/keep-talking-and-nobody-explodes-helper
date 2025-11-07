let language:string = 'Ukrainian'; //or "Ukrainian"
export let languageIndex:number = 0;
// 0 for Ukrainian, 1 for English

const reloadButton : string[] = ["Перезагрузити","Reload"];

const toggleStar : string[][] = [["Зірка", "Нема зірки"],["Star", "No star"]];
const toggleLight : string[][] = [["Світло", "Нема світла"], ["Light", "No light"]];

const cutResult : string[][] = [
    ["Ріжте", "Не ріжте", "2+ елементи живлення?", 'Остання цифра серійного номера парна?', "Є паралельний порт?" ],
    ["Cut", "Don't cut", "Does it have 2+ batteries?", "Is the last digit of the serial number even?", "Does it have a parallel port?"]];

const noteAboutCuttingWires : string[] = [
    "Якщо відповідь на питання \"Так\" - ріжте провід.",
    "If the answer to the question is \"Yes\", cut the wire."];

const linkToInstruction : string[] =
    ["Оригінальна інструкція гри",
        "Original game manual"];

export function toggleLanguage(){
    if (language==='English') {
        language = ("Ukrainian")
        languageIndex = 0;
    }
    else
    {
        language = ("English");
        languageIndex = 1;
    }
}

export function textReloadButton(){
    return reloadButton[languageIndex];
}

/* =============  WireVertical.tsx and it's children ======================*/
export function textToggleStar(index){
    return toggleStar[languageIndex][index];
}

export function textToggleLight(index){
    return toggleLight[languageIndex][index];
}

export function textCutResult(index){
    return cutResult[languageIndex][index];
}

export function textNoteAboutCuttingWires() {
    return noteAboutCuttingWires[languageIndex];
}

export function textLinkToInstruction() {
    if (languageIndex === 1) return (<a href='https://www.bombmanual.com/web/index.html' target="_blank">{linkToInstruction[languageIndex]}</a>);
    else return (<a href='https://www.bombmanual.com/uk/web/index.html' target="_blank">{linkToInstruction[languageIndex]}</a>);
}
