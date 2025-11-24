import {languageIndex} from "./LanguageController.tsx";

const buttons :string[][] = [["Закінчити слово", "Видалити останню літеру", "Видалити всі літери"],["Finish the word", "Delete the last letter", "Delete all letters"]];

export function languageButtons(index){
    return buttons[languageIndex][index];
}