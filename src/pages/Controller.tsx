import {createContext, useState} from "react";
import './index.css'
import './main.css'
import WiresVertical from "./WiresVertical.tsx"
import SidebarLeft from "./SidebarLeft.tsx";

export const PageContext = createContext();

function Controller() {
    const [page, setPage] = useState('WiresVertical');

    return (<>
            <SidebarLeft />
            {page === 'WiresVertical' ? <WiresVertical /> : null}
        </>
    )
}

export default Controller;