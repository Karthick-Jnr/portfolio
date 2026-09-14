# Wiring Reference

## Potentiometers

Use four 10 kOhm potentiometers. For each potentiometer, connect one outer terminal to ESP32 3.3 V, the other outer terminal to GND, and the center wiper to the assigned ADC pin.

- POT1 wiper -> GPIO 34
- POT2 wiper -> GPIO 35
- POT3 wiper -> GPIO 32
- POT4 wiper -> GPIO 33

## Servos

- Servo 1 signal -> GPIO 13
- Servo 2 signal -> GPIO 14
- Servo 3 signal -> GPIO 25
- Servo 4 signal -> GPIO 26

Use an appropriate external regulated 5 V supply for servo power. Connect external supply GND to ESP32 GND (common ground).

```text
External +5V -> Servo 1 VCC
             -> Servo 2 VCC
             -> Servo 3 VCC
             -> Servo 4 VCC

External GND -> Servo grounds
             -> ESP32 GND

ESP32 GPIO13 -> Servo 1 signal
ESP32 GPIO14 -> Servo 2 signal
ESP32 GPIO25 -> Servo 3 signal
ESP32 GPIO26 -> Servo 4 signal
```

Never apply more than 3.3 V to ESP32 ADC inputs.
