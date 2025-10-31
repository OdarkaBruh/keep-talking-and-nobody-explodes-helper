import {createContext, useState} from "react";
import './CSS/index.css'
import './CSS/main.css'
import WiresVertical from "./WiresVertical.tsx"
import SidebarLeft from "../sharedComponents/WiresVertical/SidebarLeft.tsx";

export const PageContext = createContext();

function Controller() {
    const [page, setPage] = useState('wiresVertical');

    return (<>
            <SidebarLeft />
            <WiresVertical />
        </>
    )
}

export default Controller;