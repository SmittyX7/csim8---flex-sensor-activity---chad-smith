let Flex_Sensor_Value = 0
basic.forever(function () {
    Flex_Sensor_Value = pins.analogReadPin(AnalogPin.P0)
    if (Flex_Sensor_Value < 720) {
        basic.showIcon(IconNames.Happy)
    } else if (Flex_Sensor_Value > 820) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.No)
    }
})
