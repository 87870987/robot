let random = false
let distannce = 0
function WINNER () {
    random = Math.randomBoolean()
    if (random) {
        LT_2()
    } else {
        RT_2()
    }
}
function LT () {
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.analogWritePin(AnalogPin.P1, 400)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.analogWritePin(AnalogPin.P2, 250)
}
function FD () {
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.analogWritePin(AnalogPin.P1, 400)
    pins.digitalWritePin(DigitalPin.P12, 1)
    pins.analogWritePin(AnalogPin.P2, 500)
    basic.pause(100)
}
function RT () {
    pins.digitalWritePin(DigitalPin.P8, 0)
    pins.analogWritePin(AnalogPin.P1, 250)
    pins.digitalWritePin(DigitalPin.P12, 1)
    pins.analogWritePin(AnalogPin.P2, 400)
}
function RT_2 () {
    RT()
    basic.pause(100)
}
function LT_2 () {
    LT()
    basic.pause(100)
}
basic.forever(function () {
    distannce = sonar.ping(
    DigitalPin.P13,
    DigitalPin.P14,
    PingUnit.Centimeters
    ) * 1.5229 + 1.1536
    if (distannce > 10) {
        FD()
    } else {
        WINNER()
    }
})
