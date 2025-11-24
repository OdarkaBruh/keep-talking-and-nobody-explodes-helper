import {languageIndex} from "./LanguageController.tsx";

const pages :string[][] = [["Сторінки:", "Вертикальний дріт", "Послідовності дротів", "Азбука Морзе", "Про проект"],["Pages:", "Vertical wires", "Wire sequences", "Morse Code", "About Project"]];

export function pageLanguage(index){
    return pages[languageIndex][index];
}
