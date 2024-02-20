namespace screenMagic{
    export function plotAt(index: number): void{
        //index |= 0;
        const x = Math.floor(index % 5);
        const y = Math.floor(index / 5);
        led.setDisplayMode(DisplayMode.Greyscale);
        led.plot(x, y);
    }
}