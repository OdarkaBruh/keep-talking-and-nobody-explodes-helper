import "./CSS/MorseCode.css"
import {useState} from "react";
import {MorseAlphabet_Ukr, MorseWords_Ukr} from "../sharedComponents/MorseCode/MorseCode_Alphabets.tsx"


export default function MorseCode() {
    const [inputField, setInputField] = useState("");
    const [letters, setLetters] = useState([]);
    const [answer, setAnswer] = useState("");

    function addInput (isDot: boolean) {
        if (isDot) {
            setInputField(inputField + "*");
            possibleLetters(inputField + "*");
        }
        else {
            setInputField(inputField + "-");
            possibleLetters(inputField + "-");
        }
    }

    const removeLastInput = () => {
        setInputField(inputField.substring(0, inputField.length - 1));
    }

    const removeAllInput = () => {
        setInputField("");
    }

    const finishWord = () => {
        setAnswer(answer + letters[0]);
    }

    function loopThrough(word:string) {
        let allAnswers = []
        for (let [key, value] of MorseAlphabet_Ukr) {
            if (value.includes(word)){
                allAnswers.push(key);
                console.log("s " + word + " + "+ value);
            }
        }
        return allAnswers;
    }

    function possibleLetters(word) {
        let allAnswers = loopThrough(word);
        setLetters(allAnswers);
    }

    function templatePossibleLetters(letter:string){
        return (<div className='all-letters--row' onClick={() => setAnswer(answer + letter)}>
            <p>{letter}</p> <p>{MorseAlphabet_Ukr.get(letter)}</p>
        </div>)
    }
    return (<>
        <div className="MorseCode__body">
            <div className="MorseCode">
                <div className='input-field'>
                    <p>{inputField}</p>
                </div>
                <div className='warning-note'>
                    <p> : {answer}</p>
                </div>
                <div className="control-buttons">
                    <button className='symbol-button' onClick={() => addInput(true)}>•</button>
                    <button className='symbol-button' onClick={() => addInput(false)}>—</button>
                </div>
                <div className="control-buttons">
                    <button onClick={() => finishWord()}>end words</button>
                    <button onClick={() => removeLastInput()}>delete last letter</button>
                    <button onClick={() => removeAllInput()}>delete all letters</button>
                </div>
                < hr />
            </div>
            <div className='all-letters'>
                {letters.map(letter => (templatePossibleLetters(letter)))}
                </div>
        </div>
    </>)
}