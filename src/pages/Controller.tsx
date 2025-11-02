import {createContext, useState} from "react";
import './CSS/index.css'
import './CSS/main.css'
import WiresVertical from "./WiresVertical.tsx"
import SidebarLeft from "../sharedComponents/WiresVertical/SidebarLeft.tsx";

export const PageContext = createContext();
export const LanguageContext = createContext();

function Controller() {
    const [page, setPage] = useState('wiresVertical');
    const [language, setLanguage] = useState("Ukrainian");

    return (<>
        <LanguageContext.Provider value={[language, setLanguage]}>
            <SidebarLeft />
            <WiresVertical />
        </LanguageContext.Provider>
        </>
    )
}

export default Controller;