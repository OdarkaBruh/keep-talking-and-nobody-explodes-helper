import {
    textCutIf,
    textLetterSeparator, textToggle, textToggleExplanation, textWireOccurrence
} from "../sharedComponents/LanguageController/LanguageController_WireSequences.tsx";
import "./CSS/WireSequences.css"
import { useState} from "react";

const dataRed : string[][] = [
    ["C"], ["B"], ["A"], ["A", "C"],["B"],
    ["A", "C"], ["A", "B", "C"], ["A", "B"], ["B"]
];

const dataBlue : string[][] = [
    ["B"], ["A", "C"],["B"],["A"], ["B"],
    ["B", "C"], ["C"], ["A", "C"], ["A"]
];

const dataBlack : string[][] = [
    ["A", "B", "C"], ["A", "C"],["B"],["A", "C"], ["B"],
    ["B", "C"], ["A", "B"], ["C"], ["C"]
];

const colors = ["Red", "Blue", "Black"];

let modeIsLinked = true;

function addLetterSeparator(lettersArray:string[]){
    if (lettersArray.length > 0){
        const letterSeparator = textLetterSeparator();
        let result = lettersArray[0];

        for (let i = 1; i < lettersArray.length; i++){
            if (i === lettersArray.length) result +=lettersArray[i];
            else if (i + 1 === lettersArray.length) result +=" " + letterSeparator + " " + lettersArray[i];
            else result +=", " + lettersArray[i];
        }
        return result;
    }
    else return (lettersArray[0])
}

function classListToggle(fromOn: boolean, element){
    if (fromOn){
        element.classList.add("row-clicked--off");
        element.classList.remove("row-clicked--on");
    }
    else{
        element.classList.add("row-clicked--on");
        element.classList.remove("row-clicked--off");
    }
}

function classListClearTable(color){
    let collection = document.getElementById(color + '-parent__body')!.getElementsByClassName("row-clicked--on");
    while (collection.length > 0){
        classListToggle(true, collection[0]);
    }
}

export function classListClearTable_AllTables(){
   for (let c of colors){
       classListClearTable(c.toLowerCase());
   }
}

function createWireTable(data:string[][], color:string){
    const handleClick = event => {
        if (!modeIsLinked) { //separated
            classListToggle(event.currentTarget.classList.contains("row-clicked--on"),event.currentTarget)
        }
        else {
            const myElement = document.getElementById(color + '-parent__body');
            if (myElement !== null){
                let collection = myElement.getElementsByClassName("row-clicked--off");
                if (collection.length > 0){
                    classListToggle(false,collection[0]);
                }
                else {
                    while (myElement.getElementsByClassName("row-clicked--on").length !== 0){
                        classListClearTable(color);
                    }
                }
            }
        }
    };

    return (
        data.map(function(item, i){
            return(
                <tr className="row-clicked--off" onClick={handleClick}>
                    <th>{i+1}</th>
                    <th>{addLetterSeparator(item)}</th>
                </tr>)
            }))

}

function tableTemplate(data:string[][], c:string){
    return(
        <div id={c + '-parent__body'}>
            <div className='top-svg-wire-sequences'>
                <div className='SVG'>
                    <svg className='top-wire-color-svg' id={'top-wire-color-svg--' + c} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <circle cx="8" cy="8" r="8"></circle> </g></svg>
                    <svg className='top-wire-color-svg--dark' id={'top-wire-color-svg--' + c + '--dark'} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <circle cx="8" cy="8" r="8"></circle> </g></svg>
                </div>
            </div>
            <table >
                <tbody>
                <tr>
                    <th>{textWireOccurrence()}</th>
                    <th>{textCutIf()}</th>
                </tr>
                {createWireTable(data, c)}
                </tbody>
            </table>
        </div>
    )
}

export default function WireSequences() {
    const [modeSlider, setModeSlider] = useState(true);

    function toggleModeSlider() {
        setModeSlider(!modeSlider);
        modeIsLinked = !modeIsLinked;
        //classListClearTable_AllTables();
    }

    return(
        <>
            <div className='all-tables__main-body'>
                <div className='all-tables'>
                    {colors.map(function(c:string) {
                        if (c === "Red") return tableTemplate(dataRed, c.toLowerCase());
                        else if (c === "Blue") return tableTemplate(dataBlue, c.toLowerCase());
                        else return tableTemplate(dataBlack, c.toLowerCase());
                    })}
                </div>
                <div className='all-tables__slider__parent'>
                    <div className='all-tables__slider'>
                        <label>{textToggle(0)}</label>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round" onClick={toggleModeSlider}></span>
                        </label>
                        <label>{textToggle(1)}</label>
                    </div>
                    <label id='note-on-hover'>
                        <ul>
                            <li>{textToggle(0)} — {textToggleExplanation(0)}</li>
                            <li>{textToggle(1)} — {textToggleExplanation(1)}</li>
                        </ul>
                    </label>
                </div>
            </div>

        </>
        )
}