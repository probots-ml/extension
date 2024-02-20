/**
 * Test screenMagic.plotAt()
 */

for(let i = 0; i < 25; i++){
    screenMagic.plotAt(i);
    basic.pause(200);
}

led.fadeOut(500);
basic.pause(100);