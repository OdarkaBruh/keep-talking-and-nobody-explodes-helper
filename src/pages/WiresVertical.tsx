import './WiresVertical.css';
import CutResult from "../sharedComponents/CutResult.tsx";
import ToggleButtons from "../sharedComponents/ToggleButtons.tsx";
import {createContext, useState} from "react";

class Wire {

    color = ' ';
    light = false;
    star = false;

    constructor(color: string){
        this.color = color;
    }

    //toggleLight(): void {this.light = !this.light};
}

export const WireContext = createContext();

function SeparateWires({w_col}:{w_col: string}){
    return(
        <section>
            <div className='SVG'>
                <svg className='wireSvg' id={'wireSvg_' + w_col} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <circle cx="8" cy="8" r="8"></circle> </g></svg>
                <svg className='wireSvg' id={'wireSvg_Dark' + w_col} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <circle cx="8" cy="8" r="8"></circle> </g></svg>
            </div>
            <div className='SeparateWire'>
                <ToggleButtons whichWire={w_col}/>
                <CutResult wire_color={w_col} />
            </div>
        </section>
    )
}

function WiresVertical(){
    const [redWire, setRedWire] = useState<Wire>(new Wire('red'));
    const [whiteWire, setWhiteWire] = useState<Wire>(new Wire('white'));
    const [blueWire, setBlueWire] = useState<Wire>(new Wire('blue'));

return (
        <div className='Wire_body'>
            <WireContext.Provider value={{ red: [redWire,setRedWire], white:[whiteWire,setWhiteWire], blue:[blueWire,setBlueWire]}}>
                <div className='Wires'>
                    <SeparateWires w_col='Red' />
                    <SeparateWires w_col='Blue' />
                    <SeparateWires w_col='White' />
                    <section className='WiresNote'>
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