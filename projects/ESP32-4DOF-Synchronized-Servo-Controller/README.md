# ESP32 4-DOF Synchronized Servo Controller

A microcontroller-based controller concept for a 4-DOF servo mechanism using four potentiometers as manual joint-command inputs.

## Working Principle

Each potentiometer produces an analog voltage. The ESP32 samples the four analog inputs with its ADC, maps each ADC reading to a servo angle, and generates servo PWM control signals for four independent servo joints.

**Potentiometer → ESP32 ADC → Angle Mapping → Servo PWM → Joint Actuation**

The controller updates all four channels continuously, allowing simultaneous manual control of the four joints.

## Hardware

- ESP32 development board
- 4 × 10 kΩ potentiometers (recommended)
- 4 × hobby servo motors
- External regulated 5 V servo supply / battery pack
- Breadboard and jumper wires

## Pin Mapping

| Function | ESP32 Pin |
|---|---:|
| POT1 ADC | GPIO 34 |
| POT2 ADC | GPIO 35 |
| POT3 ADC | GPIO 32 |
| POT4 ADC | GPIO 33 |
| Servo 1 PWM | GPIO 13 |
| Servo 2 PWM | GPIO 14 |
| Servo 3 PWM | GPIO 25 |
| Servo 4 PWM | GPIO 26 |

### Power

Power the servos from an appropriate external 5 V supply. Do **not** power four servos from the ESP32 3.3 V pin. Connect the external servo-supply ground to ESP32 GND so the PWM signals share a common reference.

## Software

- Arduino IDE
- ESP32 board support package
- `ESP32Servo` library

The main sketch is `src/servo_sync.ino`.

## Calibration

The source contains per-joint minimum and maximum angle arrays so the mechanical range can be limited safely after the physical linkage is calibrated.

## Portfolio Note

This repository documents the controller design and implementation for a 4-DOF synchronized servo-control concept. Do not describe unperformed physical testing as completed experimental validation.
