input.onButtonPressed(Button.A, function () {
    serial.writeLine("Song played")
})
serial.writeLine("" + (sonar.ping(
DigitalPin.P0,
DigitalPin.P1,
PingUnit.Inches
)))
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . # . . .
        # . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . # .
        . . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . # .
        . . . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . # . . .
        . # . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . # . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        # # . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # # . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # . . . .
        . # . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # . . .
        . # . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . # .
        . . . # .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . #
        . . . # .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . # #
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # # #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . # #
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . # .
        . . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
