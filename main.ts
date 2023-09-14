basic.showLeds(`
    . . # . .
    . # . # .
    # . # . #
    . . # . .
    . . # . .
    `)
robotAtom.initVL53L0X()
let curSpeed = 0
let vzdalenost = 0
basic.forever(function () {
    vzdalenost = robotAtom.readDistance()
    if (vzdalenost > 150 && vzdalenost <= 250) {
        robotAtom.MotorRunBoth(-70, 150)
        basic.pause(250)
    } else if (vzdalenost > 1 && vzdalenost <= 150) {
        robotAtom.MotorRunBoth(-150, -150)
        basic.pause(200)
    } else {
        robotAtom.MotorRunBoth(150, 150)
    }
})
