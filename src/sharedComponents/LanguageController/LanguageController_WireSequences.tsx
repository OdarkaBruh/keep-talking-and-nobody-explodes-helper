import {languageIndex} from "./LanguageController.tsx";

// Table legend
const wireOccurrence :string[] = ["Поява дроту", "Wire Occurrence"];
export function textWireOccurrence(){
    return wireOccurrence[languageIndex];
}

const cutIf:string[] = ["Перерізати, якщо під'єднаний до:", "Cut if connected to:"];
export function textCutIf(){
    return cutIf[languageIndex];
}

// Table rows
const letterSeparator : string[] = ["або", "or"];

export function textLetterSeparator(){
    return letterSeparator[languageIndex];
}

// Toggle
const toggle = [["Пов'язані", "Відокремлені"], ["Linked", "Separated"]]
export function textToggle(index){
    return toggle[languageIndex][index];
}

const toggleExplanation = [["при нажатті заповниться наступний незаповний рядок таблиці", "при нажатті заповниться лише нажатий рядок таблиці"], ["when clicked\, the next unfilled row of the table will be filled in", "when clicked\, only the clicked row of the table will be filled in"]]
export function textToggleExplanation(index){
    return toggleExplanation[languageIndex][index];
}

