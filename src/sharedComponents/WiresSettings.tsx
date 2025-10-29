interface  Wire {
    color: string;
    light: boolean;
    star: boolean;
    toggleLight(): void;
}

export let Red_wire: Wire = {
    color: 'red',
    light: false,
    star: false,
    toggleLight():void{
        this.light = !light;
    }
};

const wires: Wire[] = [
    {color: 'white', light: false, star: false},
    {color: 'red', light: false, star: false},
    {color: 'blue', light: false, star: false}
];

function changeWire_toggleLight(color: string) {
    wires.map(wire => {if (wire.color === color) wire.light = !wire.light;});
}