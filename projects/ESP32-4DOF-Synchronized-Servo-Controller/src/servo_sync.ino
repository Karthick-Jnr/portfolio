#include <Arduino.h>
#include <ESP32Servo.h>

constexpr uint8_t NUM_SERVOS = 4;

// Potentiometer wiper / ADC inputs
const uint8_t POT_PINS[NUM_SERVOS] = {34, 35, 32, 33};

// Servo signal outputs
const uint8_t SERVO_PINS[NUM_SERVOS] = {13, 14, 25, 26};

Servo servos[NUM_SERVOS];

// Mechanical calibration limits; adjust for the actual mechanism.
const int SERVO_MIN_ANGLE[NUM_SERVOS] = {0, 0, 0, 0};
const int SERVO_MAX_ANGLE[NUM_SERVOS] = {180, 180, 180, 180};

constexpr uint8_t FILTER_SAMPLES = 8;

int readPotentiometer(uint8_t pin)
{
  long total = 0;

  for (uint8_t i = 0; i < FILTER_SAMPLES; ++i)
  {
    total += analogRead(pin);
    delayMicroseconds(300);
  }

  return static_cast<int>(total / FILTER_SAMPLES);
}

void setup()
{
  Serial.begin(115200);
  analogReadResolution(12); // 0-4095

  for (uint8_t i = 0; i < NUM_SERVOS; ++i)
  {
    pinMode(POT_PINS[i], INPUT);
    servos[i].setPeriodHertz(50);
    servos[i].attach(SERVO_PINS[i], 500, 2400);
    servos[i].write(90);
  }

  Serial.println("ESP32 4-DOF Synchronized Servo Controller");
  Serial.println("Potentiometers -> ADC -> angle mapping -> servo PWM");
}

void loop()
{
  int potValue[NUM_SERVOS];
  int angle[NUM_SERVOS];

  for (uint8_t i = 0; i < NUM_SERVOS; ++i)
  {
    potValue[i] = readPotentiometer(POT_PINS[i]);

    angle[i] = map(
      potValue[i],
      0, 4095,
      SERVO_MIN_ANGLE[i],
      SERVO_MAX_ANGLE[i]
    );

    angle[i] = constrain(
      angle[i],
      SERVO_MIN_ANGLE[i],
      SERVO_MAX_ANGLE[i]
    );

    servos[i].write(angle[i]);
  }

  static uint32_t lastPrint = 0;
  if (millis() - lastPrint >= 250)
  {
    lastPrint = millis();

    for (uint8_t i = 0; i < NUM_SERVOS; ++i)
    {
      Serial.print("J");
      Serial.print(i + 1);
      Serial.print(": ADC=");
      Serial.print(potValue[i]);
      Serial.print(" angle=");
      Serial.print(angle[i]);
      if (i < NUM_SERVOS - 1) Serial.print(" | ");
    }
    Serial.println();
  }

  delay(10);
}
