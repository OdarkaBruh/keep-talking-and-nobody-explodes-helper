import './CutResult.css'
import React, {useContext} from "react";
import {WireContext} from "../pages/WiresHorizontal.tsx";

interface  Result {
    color: string;
    light: boolean;
    star: boolean;
    result: string;
}

const possibleResults: Result[] = [
    { color: 'white', light: true, star: true, result:'2+ елементи живлення?'},
    { color: 'white', light: true, star: false, result:'Не ріжте'},
    { color: 'white', light: false, star: true, result:'Ріжте' },
    { color: 'white', light: false, star: false, result:'Ріжте'},

    { color: 'red', light: true, star: true, result:'2+ елементи живлення?'},
    { color: 'red', light: true, star: false, result:'2+ елементи живлення?'},
    { color: 'red', light: false, star: true, result:'Ріжте'},
    { color: 'red', light: false, star: false, result:'Остання цифра серійного номера парна?' },

    { color: 'blue', light: true, star: true, result:'Є паралельний порт?'},
    { color: 'blue', light: true, star: false, result:'Є паралельний порт?'},
    { color: 'blue', light: false, star: true, result:'Не ріжте' },
    { color: 'blue', light: false, star: false, result:'Остання цифра серійного номера парна?' },
];

function  InstructionDiv({request_result}: {request_result: string}){
    if (request_result === 'Ріжте') {
        return(
            <div className='resultDiv'>
                <div className='SVG'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                         className="bi bi-scissors" viewBox="0 0 16 16">
                        <path d="M3.5 3.5c-.614-.884-.074-1.962.858-2.5L8 7.226 11.642 1c.932.538 1.472 1.616.858 2.5L8.81 8.61l1.556 2.661a2.5 2.5 0 1 1-.794.637L8 9.73l-1.572 2.177a2.5 2.5 0 1 1-.794-.637L7.19 8.61zm2.5 10a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m7 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"/>
                    </svg>
                </div>
                <h3> {request_result} </h3></div>
        )
    }
    else if (request_result === 'Не ріжте'){
        return(
            <div className='resultDiv'>
                <div className='SVG'>
                    <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M150,0C67.29,0,0,67.29,0,150s67.29,150,150,150s150-67.29,150-150S232.71,0,150,0z M150,270c-66.169,0-120-53.832-120-120 S83.831,30,150,30s120,53.832,120,120S216.169,270,150,270z"></path> <path d="M215.606,84.394c-5.857-5.857-15.355-5.857-21.213,0L150,128.787l-44.394-44.393c-5.857-5.857-15.355-5.857-21.213,0 c-5.858,5.857-5.858,15.355,0,21.213L128.787,150l-44.393,44.394c-5.858,5.857-5.858,15.355,0,21.213 C87.322,218.535,91.161,220,95,220s7.678-1.465,10.606-4.394L150,171.213l44.394,44.393C197.322,218.535,201.161,220,205,220 s7.678-1.465,10.606-4.394c5.858-5.857,5.858-15.355,0-21.213L171.213,150l44.393-44.394 C221.464,99.749,221.464,90.251,215.606,84.394z"></path> </g> </g></svg>
                </div>
                <h3> {request_result} </h3>
            </div>
    )}
    else if (request_result ===  '2+ елементи живлення?'){
        return(
            <div className='resultDiv'>
                <div className='SVG'>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.5 6L8.5 12H14.5L10.5 18M21 13V11M7.7 6H6.2C5.0799 6 4.51984 6 4.09202 6.21799C3.71569 6.40973 3.40973 6.71569 3.21799 7.09202C3 7.51984 3 8.0799 3 9.2V14.8C3 15.9201 3 16.4802 3.21799 16.908C3.40973 17.2843 3.71569 17.5903 4.09202 17.782C4.51984 18 5.0799 18 6.2 18H6.5M16.5 6H16.8C17.9201 6 18.4802 6 18.908 6.21799C19.2843 6.40973 19.5903 6.71569 19.782 7.09202C20 7.51984 20 8.0799 20 9.2V14.8C20 15.9201 20 16.4802 19.782 16.908C19.5903 17.2843 19.2843 17.5903 18.908 17.782C18.4802 18 17.9201 18 16.8 18H15.31" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </div>
                <h3> {request_result} </h3>
        </div>)
    }
    else if (request_result ===  'Остання цифра серійного номера парна?'){
        return(
            <div className='resultDiv'>
                <div className='SVG'>

                </div>
            <h3> {request_result} </h3></div>)
    }
    else if (request_result ===  'Є паралельний порт?'){
        return(
            <div className='resultDiv'>
                <div className='SVG'>

                </div>
                <h3> {request_result} </h3>
            </div>)
    }
    else {
        //Theoretically, should never be called due to undefined block
        return(<div className='resultDiv'>
            <h3> Not Found </h3></div>)
    }
}

function CutResult({wire_color}:{wire_color:string}) {
    const { red, white, blue } = useContext(WireContext);
    const [redWire, setRedWire] = red;
    const [whiteWire, setWhiteWire] = white;
    const [blueWire, setBlueWire] = blue;

    let w : Wire = redWire;
    if (wire_color === 'Red') w = redWire;
    else if (wire_color === 'White') w = whiteWire;
    //else if (wire_color === 'blue') w = redWire;
    else w = blueWire;

    const findResult  = possibleResults.find(item => {return item.color === w.color && item.light === w.light && item.star === w.star})?.result!;

    return (
        <div className='resultDiv_body'>
            <span className='hr_border' />
            <div className='SVG'>
                <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M150,0C67.29,0,0,67.29,0,150s67.29,150,150,150s150-67.29,150-150S232.71,0,150,0z M150,270c-66.169,0-120-53.832-120-120 S83.831,30,150,30s120,53.832,120,120S216.169,270,150,270z"></path> <path d="M215.606,84.394c-5.857-5.857-15.355-5.857-21.213,0L150,128.787l-44.394-44.393c-5.857-5.857-15.355-5.857-21.213,0 c-5.858,5.857-5.858,15.355,0,21.213L128.787,150l-44.393,44.394c-5.858,5.857-5.858,15.355,0,21.213 C87.322,218.535,91.161,220,95,220s7.678-1.465,10.606-4.394L150,171.213l44.394,44.393C197.322,218.535,201.161,220,205,220 s7.678-1.465,10.606-4.394c5.858-5.857,5.858-15.355,0-21.213L171.213,150l44.393-44.394 C221.464,99.749,221.464,90.251,215.606,84.394z"></path> </g> </g></svg>
            </div>
            <div className='resultDiv'>
                <h3> {findResult} </h3>
            </div>

        </div>
    )
}

export default CutResult;