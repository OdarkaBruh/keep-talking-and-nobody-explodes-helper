import './SidebarLeft.css'
import './WiresVertical/CSS/Switch.css'
import {reloadWiresCollection} from "../pages/WireVertical.tsx";
import {classListClearTable_AllTables} from "../pages/WireSequences.tsx"
import {LanguageContext, pages} from "../pages/Controller.tsx";

import {textLinkToInstruction, textReloadButton, toggleLanguage} from "./LanguageController/LanguageController.tsx";
import {useContext} from "react";

export default function SidebarLeft({page, setPage, reloadMorse}){
    const [language, setLanguage] = useContext(LanguageContext);

    function toggleLanguage_Sidebar(){
        if(language === "Ukrainian") setLanguage("English");
        else setLanguage("Ukrainian");

        toggleLanguage();

        if (page == pages.MorseCode) reloadMorse();
    }

    function reloadController(){
        if (page === pages.WireVertical){
            reloadWiresCollection();
        }
        else if (page === pages.WireSequences){
            classListClearTable_AllTables();
        }
        else if (page === pages.MorseCode) {
            reloadMorse();
        }

    }

    function pageNavigation(page){
        return(<div onClick={()=>setPage(page)}>
            <hr className='hr--horizontal'/>
            <p>{page.replace(/([A-Z])/g, ' $1').trim()}</p>
        </div>)
    }

    return(
        <div className='Sidebar__body'>
            <div className='Sidebar'>
                <h2>Wire Game</h2>
                <div className='link-to-instruction'>
                    <p>{textLinkToInstruction()}</p>
                </div>
                <label>Pages: </label>
                <div className='link-to-pages__body'>
                    <div className='hr--vertical' />
                    <div className='link-to-pages'>
                        {pageNavigation(pages.WireVertical)}
                        {pageNavigation(pages.WireSequences)}
                        {pageNavigation(pages.MorseCode)}
                    </div>
                </div>
            </div>
            <div className='sidebar__footer'>
                <div className='reloadButton' onClick={reloadController}>
                    <h4>{textReloadButton()}</h4>
                    <svg fill="#000000" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M960 0v112.941c467.125 0 847.059 379.934 847.059 847.059 0 467.125-379.934 847.059-847.059 847.059-467.125 0-847.059-379.934-847.059-847.059 0-267.106 126.607-515.915 338.824-675.727v393.374h112.94V112.941H0v112.941h342.89C127.058 407.38 0 674.711 0 960c0 529.355 430.645 960 960 960s960-430.645 960-960S1489.355 0 960 0" fill-rule="evenodd"></path> </g></svg>
                </div>
                <div className='language__toggle-switch'>
                    <label>Ukr</label>
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round" onClick={toggleLanguage_Sidebar}></span>
                    </label>
                    <label>Eng</label>
                </div>
            </div>
        </div>
    )
}