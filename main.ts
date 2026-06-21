input.onButtonPressed(Button.A, function () {
    if (input.lightLevel() > 30) {
        basic.showIcon(IconNames.Fabulous)
    } else {
        basic.showLeds(`
            # # . # #
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    M8B = randint(1, 3)
    if (M8B == 1) {
        basic.showString("YES")
    } else if (M8B == 2) {
        basic.showString("NO")
    } else {
        basic.showString("MAYBE ")
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Silly)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Happy)
})
let M8B = 0
basic.showIcon(IconNames.Asleep)
basic.forever(function () {
	
})
