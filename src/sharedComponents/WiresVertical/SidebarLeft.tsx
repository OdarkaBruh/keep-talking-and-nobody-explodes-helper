import './CSS/SidebarLeft.css'
import './CSS/Switch.css'
import WiresVertical, {reloadWiresCollection} from "../../pages/WiresVertical.tsx";
import {useContext} from "react";

export default function SidebarLeft(){
    return(
        <div className='Sidebar__body'>
            <div className='Sidebar'>
                <h2>Wire Game</h2>
                <div className='link-to-instruction'>
                    <p><a href='https://www.bombmanual.com/uk/web/index.html'>Click here to go to instruction</a></p>
                </div>
                <label>Pages: </label>
                <div className='link-to-pages__body'>
                    <div className='hr--vertical' />
                    <div className='link-to-pages'>
                        <div>
                            <hr className='hr--horizontal'/>
                            <p>Wires</p>
                        </div>
                        <div>
                            <hr className='hr--horizontal'/>
                            <p>Wires</p>
                        </div>
                        <div>
                            <hr className='hr--horizontal'/>
                            <p>Wires</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className='sidebar__footer'>
                <div className='reloadButton' onClick={()=>{reloadWiresCollection()}}>
                    <h4> Reload </h4>
                    <svg fill="#000000" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M960 0v112.941c467.125 0 847.059 379.934 847.059 847.059 0 467.125-379.934 847.059-847.059 847.059-467.125 0-847.059-379.934-847.059-847.059 0-267.106 126.607-515.915 338.824-675.727v393.374h112.94V112.941H0v112.941h342.89C127.058 407.38 0 674.711 0 960c0 529.355 430.645 960 960 960s960-430.645 960-960S1489.355 0 960 0" fill-rule="evenodd"></path> </g></svg>
                </div>
                <div className='language__toggle-switch'>
                    <label>Ukr</label>
                    <label className="switch">
                        <input type="checkbox"/>
                        <span className="slider round"></span>
                    </label>
                    <label>Eng</label>
                </div>
            </div>
        </div>
    )
}