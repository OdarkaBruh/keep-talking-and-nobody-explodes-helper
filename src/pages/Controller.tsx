import {createContext, useState} from "react";
import './CSS/index.css'
import './CSS/main.css'
import './CSS/TopSvgColor.css'

import WireVertical from "./WireVertical.tsx"
import WireSequences from "./WireSequences.tsx";
import SidebarLeft from "../sharedComponents/SidebarLeft.tsx";
import MorseCode from "./MorseCode.tsx";
import {getWords} from "../sharedComponents/MorseCode/MorseCode_Alphabets.tsx";

export const PageContext = createContext();
export const LanguageContext = createContext();

export const MorseContext = createContext();

export const pages = {
    WireSequences: 'WireSequences',
    WireVertical: 'WireVertical',
    MorseCode: 'MorseCode'
};

function Controller() {
    const [page, setPage] = useState(pages.MorseCode);
    const [language, setLanguage] = useState("Ukrainian");

    //Morse Code
    const [currentLetterCode, setCurrentLetterCode] = useState("");
    const [letters, setLetters] = useState([]);
    const [knownLetters, setKnownLetters] = useState("");
    const [allWords, setAllWords] = useState(Array.from(getWords(), ([key, value]) => ({ key, value })));

    const value = {currentLetterCode, setCurrentLetterCode, letters,setLetters,knownLetters,setKnownLetters, allWords, setAllWords};

    function pageController(){
        if (page === pages.WireVertical) {return <WireVertical />}
        else if (page === pages.WireSequences) {return <WireSequences />}
        else if (page === pages.MorseCode) {return <MorseCode currentLetterCode = {currentLetterCode}/>}
    }

    const reloadMorse = () => {
        setAllWords(Array.from(getWords(), ([key, value]) => ({ key, value })));
        setKnownLetters("");
        setCurrentLetterCode("");
        setLetters([]);
    }

    return (<>
        <MorseContext.Provider value={{currentLetterCode, setCurrentLetterCode, letters, setLetters, knownLetters, setKnownLetters, allWords, setAllWords}}>

            <LanguageContext.Provider value={[language, setLanguage]}>
                <SidebarLeft page={page} setPage={setPage} reloadMorse ={reloadMorse}/>
                {pageController()}
            </LanguageContext.Provider>
        </MorseContext.Provider>
        </>
    )
}

export default Controller;