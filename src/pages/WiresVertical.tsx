import './CSS/WiresVertical.css';
import '../sharedComponents/WiresVertical/CSS/WiresSeparate_Toggles.css';
import ResultOfWire from "../sharedComponents/WiresVertical/ResultOfWire.tsx";
import ToggleButtons from "../sharedComponents/WiresVertical/ToggleButtons.tsx";
import {createContext, useState} from "react";


class Wire {

    color : string = '';
    light : boolean = false;
    star : boolean  = false;

    constructor(c:string) {
        this.color = c;
    }
}

export const WireContext = createContext();


function SeparateWires({wire}){

    return(
        <section>
            <div className='SVG'>
                <svg className='top-wire-color-svg' id={'top-wire-color-svg--' + wire.color} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <circle cx="8" cy="8" r="8"></circle> </g></svg>
                <svg className='top-wire-color-svg' id={'top-wire-color-svg--' + wire.color + '--dark'} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <circle cx="8" cy="8" r="8"></circle> </g></svg>
            </div>
            <div className='wire'>
                <ToggleButtons wire = {wire}/>
                <ResultOfWire wire = {wire}/>
            </div>
        </section>
    )
}

let wiresCollection = [];

function createWiresCollection(){
    const colors = ['red', 'white', 'blue'];
    wiresCollection = [];
    for (let i = 0; i < colors.length; i++) {
        console.log(colors[i]);
        const [c, setC] = useState(new Wire(colors[i]));
        wiresCollection.push([c, setC]);
    }
}

export function reloadWiresCollection() {
    for (let i = 0; i < wiresCollection.length; i++) {
        wiresCollection[i][1](prevState => ({...prevState, light: false, star:false}));
    }
}

function WiresVertical(){
    createWiresCollection();
return (
        <div className='wires__body'>
            <WireContext.Provider value={wiresCollection}>
                <div className='wires'>
                    {wiresCollection.map((c) => {return (<>
                        <SeparateWires wire={c[0]} />
                    </>)})}
                    <section className='wires__body__note'>
                        <p>
                            Якщо відповідь на питання "Так" - ріжте провід.
                        </p>
                    </section>
                </div>
            </WireContext.Provider>
        </div>
    )
}

export default WiresVertical;