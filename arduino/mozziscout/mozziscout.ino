/**
 *  MozziScout version of standard "scout" sketch
 *  
 *  MozziScout is Just like normal Scout,
 *  but pins 9 & 11 are swapped, so we can use Mozzi
 *  
 * @todbot 12 Dec 2021
 */
#include "Frequency.h"
#include "KeyBuffer.h"
#include "Notes.h"

#include <MozziGuts.h>
#include <Oscil.h> // oscillator template
#include <tables/sin2048_int8.h> // sine table for oscillator


// SETTINGS
int octave = 3;
float glide = .02;
bool glideOnFreshKeyPresses = true;
bool printToSerial = false;

const int CYCLES_PER_GLIDE_MAX = printToSerial ? 25 : 250;
const int STARTING_NOTE_DISTANCE_FROM_MIDDLE_A = -9;

const int SPEAKER_PIN = 9;

Notes notes(STARTING_NOTE_DISTANCE_FROM_MIDDLE_A);
KeyBuffer buffer;
Frequency frequency(glide, CYCLES_PER_GLIDE_MAX);

// use: Oscil <table_size, update_rate> oscilName (wavetable), look in .h file of table #included above
Oscil <SIN2048_NUM_CELLS, AUDIO_RATE> aSin(SIN2048_DATA);

// control variable, use the smallest data size you can for anything used in audio
byte gain = 255;

void blink(int count = 2, int wait = 200) {
  while (count >= 0) {
    digitalWrite(LED_BUILTIN, HIGH);
    delay(wait);
    digitalWrite(LED_BUILTIN, LOW);
    delay(wait);
    count = count - 1;
  }
}

void setup() {
  Serial.begin(9600);
  pinMode(LED_BUILTIN, OUTPUT);

  blink();
  
  startMozzi(); // start with default control rate of 64
//  aSin.setFreq(1320); // set the frequency
}

void loop() {
  audioHook(); // required here
}

void updateControl(){
  buffer.populate();
  
  if (buffer.isEmpty()) {
    if (!glideOnFreshKeyPresses) {
      frequency.reset();
    }
    digitalWrite(LED_BUILTIN, LOW);
  } else {
    frequency.update(notes.get(buffer.getFirst()) / 4 * pow(2, octave));
    aSin.setFreq( (float) frequency.get() );    
    gain = 255; // reset gain on keypress
    digitalWrite(LED_BUILTIN, HIGH);
  }
  // fade gain down by three until zero
  gain = (gain>3) ? gain-3 : 0;
}

AudioOutput_t updateAudio(){
  return MonoOutput::from16Bit(aSin.next() * gain); // 8 bits waveform * 8 bits gain makes 16 bits
}
