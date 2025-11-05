import './CSS/WiresSeparate_Result.css'
import {textCutResult} from '../LanguageController/LanguageController.tsx'

interface  Result {
    color: string;
    light: boolean;
    star: boolean;
    result: string;
}

const possibleResults: Result[] = [
    { color: 'white', light: true, star: true, result:'Battery'},
    { color: 'white', light: true, star: false, result:'Dont cut'},
    { color: 'white', light: false, star: true, result:'Cut' },
    { color: 'white', light: false, star: false, result:'Cut'},

    { color: 'red', light: true, star: true, result:'Battery'},
    { color: 'red', light: true, star: false, result:'Battery'},
    { color: 'red', light: false, star: true, result:'Cut'},
    { color: 'red', light: false, star: false, result:'Serial number' },

    { color: 'blue', light: true, star: true, result:'Parallel port'},
    { color: 'blue', light: true, star: false, result:'Parallel port'},
    { color: 'blue', light: false, star: true, result:'Dont cut' },
    { color: 'blue', light: false, star: false, result:'Serial number' },
];

function convertResultToIndexNumber(result:string ):number{
    if (result === "Cut") return 0;
    else if (result === "Dont cut") return 1;
    else if (result === "Battery") return 2;
    else if (result === "Serial number") return 3;
    else if (result === "Parallel port") return 4;
    else return -1;
}

function ResultSVG({request_result}: {request_result: string}){
    if (request_result === 'Cut') {
        return(<svg className='no-stroke-only-fill' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M3.5 3.5c-.614-.884-.074-1.962.858-2.5L8 7.226 11.642 1c.932.538 1.472 1.616.858 2.5L8.81 8.61l1.556 2.661a2.5 2.5 0 1 1-.794.637L8 9.73l-1.572 2.177a2.5 2.5 0 1 1-.794-.637L7.19 8.61zm2.5 10a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m7 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"/></svg>)}

    else if (request_result === 'Dont cut'){
        return(<svg className='no-stroke-only-fill' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" ><g id="SVGRepo_bgCarrier" ></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M150,0C67.29,0,0,67.29,0,150s67.29,150,150,150s150-67.29,150-150S232.71,0,150,0z M150,270c-66.169,0-120-53.832-120-120 S83.831,30,150,30s120,53.832,120,120S216.169,270,150,270z"></path> <path d="M215.606,84.394c-5.857-5.857-15.355-5.857-21.213,0L150,128.787l-44.394-44.393c-5.857-5.857-15.355-5.857-21.213,0 c-5.858,5.857-5.858,15.355,0,21.213L128.787,150l-44.393,44.394c-5.858,5.857-5.858,15.355,0,21.213 C87.322,218.535,91.161,220,95,220s7.678-1.465,10.606-4.394L150,171.213l44.394,44.393C197.322,218.535,201.161,220,205,220 s7.678-1.465,10.606-4.394c5.858-5.857,5.858-15.355,0-21.213L171.213,150l44.393-44.394 C221.464,99.749,221.464,90.251,215.606,84.394z"></path> </g> </g></svg>)}

    else if (request_result ===  'Battery'){
        return(<svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" ></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.5 6L8.5 12H14.5L10.5 18M21 13V11M7.7 6H6.2C5.0799 6 4.51984 6 4.09202 6.21799C3.71569 6.40973 3.40973 6.71569 3.21799 7.09202C3 7.51984 3 8.0799 3 9.2V14.8C3 15.9201 3 16.4802 3.21799 16.908C3.40973 17.2843 3.71569 17.5903 4.09202 17.782C4.51984 18 5.0799 18 6.2 18H6.5M16.5 6H16.8C17.9201 6 18.4802 6 18.908 6.21799C19.2843 6.40973 19.5903 6.71569 19.782 7.09202C20 7.51984 20 8.0799 20 9.2V14.8C20 15.9201 20 16.4802 19.782 16.908C19.5903 17.2843 19.2843 17.5903 18.908 17.782C18.4802 18 17.9201 18 16.8 18H15.31" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>)}

    else if (request_result ===  'Serial number'){
        return(<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 19H12.01M8.21704 7.69689C8.75753 6.12753 10.2471 5 12 5C14.2091 5 16 6.79086 16 9C16 10.6565 14.9931 12.0778 13.558 12.6852C12.8172 12.9988 12.4468 13.1556 12.3172 13.2767C12.1629 13.4209 12.1336 13.4651 12.061 13.6634C12 13.8299 12 14.0866 12 14.6L12 16" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>)}
    else if (request_result ===  'Parallel port'){
        return(<svg className='no-stroke-only-fill' viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" ></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.99998 11.5C7.4142 11.5 7.74998 11.1642 7.74998 10.75C7.74998 10.3358 7.4142 10 6.99998 10C6.58577 10 6.24998 10.3358 6.24998 10.75C6.24998 11.1642 6.58577 11.5 6.99998 11.5Z" ></path> <path d="M10.25 10.75C10.25 11.1642 9.9142 11.5 9.49998 11.5C9.08577 11.5 8.74998 11.1642 8.74998 10.75C8.74998 10.3358 9.08577 10 9.49998 10C9.9142 10 10.25 10.3358 10.25 10.75Z" ></path> <path d="M8.24998 14C8.6642 14 8.99998 13.6642 8.99998 13.25C8.99998 12.8358 8.6642 12.5 8.24998 12.5C7.83577 12.5 7.49998 12.8358 7.49998 13.25C7.49998 13.6642 7.83577 14 8.24998 14Z" ></path> <path d="M11.5 13.25C11.5 13.6642 11.1642 14 10.75 14C10.3358 14 9.99998 13.6642 9.99998 13.25C9.99998 12.8358 10.3358 12.5 10.75 12.5C11.1642 12.5 11.5 12.8358 11.5 13.25Z" ></path> <path d="M13.25 14C13.6642 14 14 13.6642 14 13.25C14 12.8358 13.6642 12.5 13.25 12.5C12.8358 12.5 12.5 12.8358 12.5 13.25C12.5 13.6642 12.8358 14 13.25 14Z"></path> <path d="M16.5 13.25C16.5 13.6642 16.1642 14 15.75 14C15.3358 14 15 13.6642 15 13.25C15 12.8358 15.3358 12.5 15.75 12.5C16.1642 12.5 16.5 12.8358 16.5 13.25Z" ></path> <path d="M12 11.5C12.4142 11.5 12.75 11.1642 12.75 10.75C12.75 10.3358 12.4142 10 12 10C11.5858 10 11.25 10.3358 11.25 10.75C11.25 11.1642 11.5858 11.5 12 11.5Z" ></path> <path d="M15.25 10.75C15.25 11.1642 14.9142 11.5 14.5 11.5C14.0858 11.5 13.75 11.1642 13.75 10.75C13.75 10.3358 14.0858 10 14.5 10C14.9142 10 15.25 10.3358 15.25 10.75Z" ></path> <path d="M17 11.5C17.4142 11.5 17.75 11.1642 17.75 10.75C17.75 10.3358 17.4142 10 17 10C16.5858 10 16.25 10.3358 16.25 10.75C16.25 11.1642 16.5858 11.5 17 11.5Z" ></path> <path d="M4.90701 6.99933C3.13073 6.99933 1.82042 8.65816 2.23177 10.3862L3.30329 14.8875C3.5982 16.1263 4.70507 17.0007 5.97854 17.0007H18.0172C19.2901 17.0007 20.3966 16.1271 20.6921 14.889L21.7664 10.3877C22.1789 8.65932 20.8685 6.99933 19.0915 6.99933H4.90701ZM3.69099 10.0388C3.50402 9.25334 4.09961 8.49933 4.90701 8.49933H19.0915C19.8992 8.49933 20.4949 9.25387 20.3074 10.0395L19.2331 14.5408C19.0988 15.1036 18.5958 15.5007 18.0172 15.5007H5.97854C5.39969 15.5007 4.89657 15.1032 4.76252 14.5401L3.69099 10.0388Z" ></path> </g></svg>)}

    else {
        //Theoretically, should never be called due to undefined block
        return(<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" ><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M150,0C67.29,0,0,67.29,0,150s67.29,150,150,150s150-67.29,150-150S232.71,0,150,0z M150,270c-66.169,0-120-53.832-120-120 S83.831,30,150,30s120,53.832,120,120S216.169,270,150,270z"></path> <path d="M215.606,84.394c-5.857-5.857-15.355-5.857-21.213,0L150,128.787l-44.394-44.393c-5.857-5.857-15.355-5.857-21.213,0 c-5.858,5.857-5.858,15.355,0,21.213L128.787,150l-44.393,44.394c-5.858,5.857-5.858,15.355,0,21.213 C87.322,218.535,91.161,220,95,220s7.678-1.465,10.606-4.394L150,171.213l44.394,44.393C197.322,218.535,201.161,220,205,220 s7.678-1.465,10.606-4.394c5.858-5.857,5.858-15.355,0-21.213L171.213,150l44.393-44.394 C221.464,99.749,221.464,90.251,215.606,84.394z"></path> </g> </g></svg>)}
}

function ResultOfWire({wire}) {
    const findResult:string  = possibleResults.find(item => {return item.color === wire.color && item.light === wire.light && item.star === wire.star})?.result!;

    return (
        <div className='result__parent'>
            <span className='hr--vertical' />
            <div className='SVG'>
                <div className='result__svg'>
                    <ResultSVG request_result={findResult} />
                </div>
            </div>
            <div className='resultDiv'>
                <h3> {textCutResult(convertResultToIndexNumber(findResult))} </h3>
            </div>
        </div>
    )
}

export default ResultOfWire;