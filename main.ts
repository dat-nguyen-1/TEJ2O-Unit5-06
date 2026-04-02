/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Dat Nguyen
 * Created on: Mar 2026
 * This program will rotate a servo motor.
*/

// initialize servos
const SERVO1 = robotbit.Servos.S1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
robotbit.Servo(SERVO1, 0)

// reset display
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// handle button A press
input.onButtonPressed(Button.A, function() {
    // turn servo to 0 degrees
    robotbit.Servo(SERVO1, 0)

    // display degrees
    basic.clearScreen()
    basic.showString("0")
    basic.showIcon(IconNames.SmallSquare)

    // reset display
    basic.showIcon(IconNames.Happy)
})

// handle button B press
input.onButtonPressed(Button.B, function () {
    // turn servo to 180 degrees
    robotbit.Servo(SERVO1, 180)

    // display degrees
    basic.clearScreen()
    basic.showString("180")
    basic.showIcon(IconNames.SmallSquare)

    // reset display
    basic.showIcon(IconNames.Happy)
})
