import React, { useState, useContext } from 'react';
import  {WireContext} from "../pages/WiresHorizontal.tsx";
import ButtonsTemplate from "./ButtonsTemplate.tsx";

function ToggleButtons({whichWire}: {whichWire: string}) {
    const { red, white, blue } = useContext(WireContext);
    const [redWire, setRedWire] = red;
    const [whiteWire, setWhiteWire] = white;
    const [blueWire, setBlueWire] = blue;

    const toggleWire = (color: string, toggleLight:boolean)=> {
        if (color ==='red'){
            if(toggleLight){
                setRedWire(prevState => ({...prevState, light: !prevState.light}));
            }
            else setRedWire(prevState => ({...prevState, star: !prevState.star}));
        }
        else if (color ==='white'){
            if(toggleLight){
                setWhiteWire(prevState => ({...prevState, light: !prevState.light}));
            }
            else setWhiteWire(prevState => ({...prevState, star: !prevState.star}));
        }
        else if (color ==='blue'){
            if(toggleLight){
                setBlueWire(prevState => ({...prevState, light: !prevState.light}));
            }
            else setBlueWire(prevState => ({...prevState, star: !prevState.star}));
        }
    }

    let w;
    if (whichWire === 'Red') w = redWire;
    else if (whichWire === 'White') w = whiteWire;
    else if (whichWire === 'Blue') w = blueWire;

    return(
      <>
          <ButtonsTemplate func={toggleWire} wire={w}></ButtonsTemplate>
      </>
    )
}


export default ToggleButtons;