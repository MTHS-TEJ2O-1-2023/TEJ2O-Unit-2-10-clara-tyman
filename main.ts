/* Copyright (c) 2023 MTHS All rights reserved
 *
 * Created by: Clara 
 * Created on: Oct 2023
 * This program reads the light level then diplasys by lighting LED's on neopixels
*/

let lightLevel: number
lightLevel = input.lightLevel()
let neopixelStrip: neopixel.Strip = null

basic.clearScreen()
basic.showIcon(IconNames.Happy)

// cleanup
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()

input.onButtonPressed(Button.A, function () {
  // get light level
  if (lightLevel <= 51) {
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.show()
  }
  if (lightLevel >= 52) {
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
    neopixelStrip.show()
  }
  if (lightLevel > 104) {
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
    neopixelStrip.show()
  }
  if (lightLevel > 156) {
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
    neopixelStrip.show()
  }
  if (lightLevel > 208) {
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
    neopixelStrip.show()
  }
})
