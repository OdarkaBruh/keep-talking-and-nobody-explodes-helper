import "./CSS/MorseCode.css"
import {useContext, useState} from "react";
import {getAlphabet, getWords} from "../sharedComponents/MorseCode/MorseCode_Alphabets.tsx"
import {LanguageContext, MorseContext} from "./Controller.tsx";
import {languageButtons} from "../sharedComponents/LanguageController/LanguageController_MorseCode.tsx";

export default function MorseCode() {
    const context = useContext(MorseContext);
    const {currentLetterCode, setCurrentLetterCode, letters, setLetters, knownLetters, setKnownLetters, allWords, setAllWords} = context;

    // ============================= Show words-knownLetterss
    function TemplatePossibleKnownLetterssField(){
        function Template(key, value){
            return(<div className='possible-answers-field'>
                    <h3>{key}</h3>
                    <p>{value}</p>
                </div>
            )
        }
        if (allWords.length > 0) return(allWords.map(w => (Template(w.key, "3."+w.value))))
        else return (Template("not found", "try again"))
    }

    // ============================= current decoded letter Controll (the letter currently being decoded)
    //add Input
    function addDotOrDash (isDot: boolean) {
        if (isDot) {
            setCurrentLetterCode(currentLetterCode + "•");
            refilterPossibleLetters();
        }
        else {
            setCurrentLetterCode(currentLetterCode + "—");
            refilterPossibleLetters();
        }
    }

    const removeLastDotOrDash = () => {
        setCurrentLetterCode(currentLetterCode.substring(0, currentLetterCode.length - 1));
        refilterPossibleLetters();
    }
    
    // ============================= All letters Controll (already decoded letters)

    const finishWord = () => {
        for (let [key, value] of getAlphabet()) {
            if (value === currentLetterCode){
                //if letter with this code exists ==> add it.
                setKnownLettersAndUpdate(knownLetters + key);
                break;
            }
        }

    }
    
    function setKnownLettersAndUpdate(newValue){
        setKnownLetters(newValue);
        if (newValue.length === 1) refilterPossibleWords(newValue);
        else if (newValue.length > 1) refilterPossibleWords(newValue.substring(newValue.length - 1, newValue.length));
    }

    function refilterPossibleLetters() {
        function lettersFilterPattern(word:string) {
            let allKnownLetters = []
            for (let [key, value] of getAlphabet()) {
                if (value.includes(word)){
                    allKnownLetters.push(key);
                }
            }
            return allKnownLetters;
        }

        let allKnownLetters = lettersFilterPattern(currentLetterCode);
        if (allKnownLetters.length > 1) {
            setLetters(allKnownLetters);
        }

        /* if only one match - add it. Could be use if added strict pattern mode
         else {
            setKnownLettersAndUpdate(knownLetters + allKnownLetters[0]);
            setCurrentLetterCode("")
        }
        */
    }

    const removeLastLetter = () => {
        if (knownLetters.length === 1) {
            setKnownLettersAndUpdate("");
            reloadWords("");
        }
        else if (knownLetters.length > 1) {
            setKnownLettersAndUpdate(knownLetters.substring(0, knownLetters.length - 1));
            reloadWords(knownLetters.substring(0, knownLetters.length-1));
        }
    }

    const removeAllLetters = () => {
        setKnownLettersAndUpdate("");
    }

    // ============================= Word Controll

    function refilterPossibleWords(newValue){
        setAllWords((prev) => prev.filter(w => w.key.includes(newValue)));
    }

    function reloadWords(reFilterByWord){
        setAllWords(Array.from(getWords(), ([key, value]) => ({ key, value })));

        for (let l of reFilterByWord.split("")){
            refilterPossibleWords(l);
        }
    }


    // ============================= Right Letter Panel

    function handleLetterClick(letter){
        function cleanTemporaryVariables(){
            setLetters([]);
            setCurrentLetterCode("");
        }

        setKnownLettersAndUpdate(knownLetters + letter);
        cleanTemporaryVariables();
    }


    function templatePossibleLetters(letter:string){
        return (<div className='all-letters--row' onClick={() => handleLetterClick(letter)}>
            <h3>{letter}</h3> <p>{getAlphabet().get(letter)}</p>
        </div>)
    }
    
return (<>
        <div className="MorseCode__body">
            <div className="MorseCode">
                <div className='possible-answers-field__parent'>
                    <TemplatePossibleKnownLetterssField />
                </div>
                <div className='input-field'>
                    <p>{currentLetterCode}</p>
                </div>
                <div className='input-note'>
                    <p> &#11116; {knownLetters}</p>
                </div>
                <div className="control-buttons">
                    <button className='symbol-button' onClick={() => addDotOrDash(true)}>•</button>
                    <button className='symbol-button' onClick={() => addDotOrDash(false)}>—</button>
                    <button className='symbol-button' onClick={() => removeLastDotOrDash()}>&#8656;</button>

                </div>
                <div className="control-buttons">
                    <button onClick={() => finishWord()}>{languageButtons(0)}</button>
                    <button onClick={() => removeLastLetter()}>{languageButtons(1)}</button>
                    <button onClick={() => removeAllLetters()}>{languageButtons(2)}</button>
                    </div>
                < hr />
            </div>
            <div className='all-letters__body'>
                <div className='all-letters'>
                {letters.map(letter => (templatePossibleLetters(letter)))}
                </div>
            </div>
        </div>
    </>)
}