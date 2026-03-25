/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: XXX
 * Created on: Sep 2020
 * This program ...
*/

// Initialize servos
const servo1 = robotbit.Servos.S1
robotbit.Servo(servo1, 0)

// Reset display
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// Handle button A press
input.onButtonPressed(Button.A, function() {
    // Turn servo to 0 degrees
    robotbit.Servo(servo1, 0)

    // Display degrees
    basic.clearScreen()
    basic.showString("0")
    basic.showIcon(IconNames.SmallSquare)

    // Reset display
    basic.showIcon(IconNames.Happy)
})

// Handle button B press
input.onButtonPressed(Button.B, function () {
    // Turn servo to 180 degrees
    robotbit.Servo(servo1, 180)

    // Display degrees
    basic.clearScreen()
    basic.showString("180")
    basic.showIcon(IconNames.SmallSquare)

    // Reset display
    basic.showIcon(IconNames.Happy)
})
