import "./CSS/MorseCode.css"
import {useState} from "react";
import {MorseAlphabet_Ukr, MorseWords_Ukr} from "../sharedComponents/MorseCode/MorseCode_Alphabets.tsx"

export default function MorseCode() {
    const [inputField, setInputField] = useState("");
    const [letters, setLetters] = useState([]);
    const [answer, setAnswer] = useState("");

    const [words, setWords] = useState(Array.from(MorseWords_Ukr, ([key, value]) => ({ key, value })));

    function cleanTemporaryVariables(){
        setLetters([]);
        setInputField("");
    }


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

    function setAnswerAndUpdate(newValue){
        setAnswer(newValue);
        console.log(newValue);
        if (newValue.length === 1) allPossibleWords(newValue);
        else if (newValue.length > 1) allPossibleWords(newValue.substring(newValue.length - 1, newValue.length));
    }
    const removeLastInput = () => {
        setInputField(inputField.substring(0, inputField.length - 1));
        possibleLetters(inputField.substring(0, inputField.length - 1));
    }

    const removeLastLetter = () => {
        if (answer.length == 1) setAnswerAndUpdate("");
        else if (answer.length > 1)setAnswerAndUpdate(answer.substring(0, answer.length - 1));
    }

    const removeAllLetters = () => {
        setAnswerAndUpdate("");
    }

    const finishWord = () => {
        setAnswerAndUpdate(answer + letters[0]);
    }

    function checkLettersByPattern(word:string) {
        let allAnswers = []
        for (let [key, value] of MorseAlphabet_Ukr) {
            if (value.includes(word)){
                allAnswers.push(key);
            }
        }
        return allAnswers;
    }

    function possibleLetters(word) {
        let allAnswers = checkLettersByPattern(word);
        if (allAnswers.length > 1) {
            setLetters(allAnswers);
        }
        else {
            setAnswerAndUpdate(answer + allAnswers[0]);
            setInputField("")
        }
        setLetters(allAnswers);
    }

    function handleLetterClick(letter){
        setAnswerAndUpdate(answer + letter);
        cleanTemporaryVariables();
    }


    function templatePossibleLetters(letter:string){
        return (<div className='all-letters--row' onClick={() => handleLetterClick(letter)}>
            <h3>{letter}</h3> <p>{MorseAlphabet_Ukr.get(letter)}</p>
        </div>)
    }

    function allPossibleWords(newValue){
        console.log(newValue)
        let a = words.filter(w => w.key.includes(newValue));
        setWords(a);
    }

    function TemplateWordsNote(){
        function Template(key, value){
            return(<div className='words-note'>
                    <h3>{value}</h3>
                    <p>{key}</p>
                </div>
            )
        }
        if (words.length > 0) return(words.map(w => (Template(w.key, w.value))))
        else return (Template("not found", "try again"))
    }
return (<>
        <div className="MorseCode__body">
            <div className="MorseCode">
                <div className='words-note__parent'>
                    <TemplateWordsNote />
                </div>
                <div className='input-field'>
                    <p>{inputField}</p>
                </div>
                <div className='input-note'>
                    <p> &#11116; {answer}</p>
                </div>
                <div className="control-buttons">
                    <button className='symbol-button' onClick={() => addInput(true)}>•</button>
                    <button className='symbol-button' onClick={() => addInput(false)}>—</button>
                    <button className='symbol-button' onClick={() => removeLastInput()}>&#8656;</button>

                </div>
                <div className="control-buttons">
                    <button onClick={() => finishWord()}>end words</button>
                    <button onClick={() => removeLastLetter()}>delete last letter</button>
                    <button onClick={() => removeAllLetters()}>delete all letters</button>
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