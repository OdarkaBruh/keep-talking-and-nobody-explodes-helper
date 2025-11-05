import {createContext, useState} from "react";
import './CSS/index.css'
import './CSS/main.css'
import './CSS/TopSvgColor.css'

import WireVertical from "./WireVertical.tsx"
import WireSequences from "./WireSequences.tsx";
import SidebarLeft from "../sharedComponents/SidebarLeft.tsx";
import MorseCode from "./MorseCode.tsx";

export const PageContext = createContext();
export const LanguageContext = createContext();

export const pages = {
    WireSequences: 'WireSequences',
    WireVertical: 'WireVertical',
    MorseCode: 'MorseCode'
};

function Controller() {
    const [page, setPage] = useState(pages.WireSequences);
    const [language, setLanguage] = useState("Ukrainian");

    function pageController(){
        if (page === pages.WireVertical) {return <WireVertical />}
        else if (page === pages.WireSequences) {return <WireSequences />}
        else if (page === pages.MorseCode) {return <MorseCode />}
    }

    return (<>
        <LanguageContext.Provider value={[language, setLanguage]}>
            <SidebarLeft page={page} setPage={setPage}/>
            {pageController()}
        </LanguageContext.Provider>
        </>
    )
}

export default Controller;