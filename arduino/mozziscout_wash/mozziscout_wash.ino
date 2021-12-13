/**
 * MozziScout version sort of of Mozzi example "Control_Oscil_Wash"
 * 
 * MozziScout is just like normal Scout,
 * but pins 9 & 11 are swapped, so we can use Mozzi
 *  
 *  @todbot 12 Dec 2021
 */
#include "KeyBuffer.h"

#include <MozziGuts.h>
#include <Oscil.h> // oscillator template
#include <tables/cos8192_int8.h>
#include <mozzi_midi.h> // for mtof()
#include <ADSR.h>
#include <Portamento.h>

// SETTINGS
int octave = 2;

KeyBuffer buffer;

#define CONTROL_RATE 64

// harmonics
Oscil<COS8192_NUM_CELLS, AUDIO_RATE> aCos1(COS8192_DATA);
Oscil<COS8192_NUM_CELLS, AUDIO_RATE> aCos2(COS8192_DATA);
Oscil<COS8192_NUM_CELLS, AUDIO_RATE> aCos3(COS8192_DATA);
Oscil<COS8192_NUM_CELLS, AUDIO_RATE> aCos4(COS8192_DATA);
Oscil<COS8192_NUM_CELLS, AUDIO_RATE> aCos5(COS8192_DATA);
//Oscil<COS8192_NUM_CELLS, AUDIO_RATE> aCos6(COS8192_DATA);
//Oscil<COS8192_NUM_CELLS, AUDIO_RATE> aCos7(COS8192_DATA);
//Oscil<COS8192_NUM_CELLS, AUDIO_RATE> aCos8(COS8192_DATA);

// volume controls
Oscil<COS8192_NUM_CELLS, CONTROL_RATE> kVol1(COS8192_DATA);
Oscil<COS8192_NUM_CELLS, CONTROL_RATE> kVol2(COS8192_DATA);
Oscil<COS8192_NUM_CELLS, CONTROL_RATE> kVol3(COS8192_DATA);
Oscil<COS8192_NUM_CELLS, CONTROL_RATE> kVol4(COS8192_DATA);
Oscil<COS8192_NUM_CELLS, CONTROL_RATE> kVol5(COS8192_DATA);
//Oscil<COS8192_NUM_CELLS, CONTROL_RATE> kVol6(COS8192_DATA);
//Oscil<COS8192_NUM_CELLS, CONTROL_RATE> kVol7(COS8192_DATA);
//Oscil<COS8192_NUM_CELLS, CONTROL_RATE> kVol8(COS8192_DATA);

ADSR <CONTROL_RATE, AUDIO_RATE> envelope;
Portamento <CONTROL_RATE> portamento1;
Portamento <CONTROL_RATE> portamento2;
Portamento <CONTROL_RATE> portamento3;

// audio volumes updated each control interrupt and reused in audio till next control
char v1, v2, v3, v4, v5, v6, v7, v8;

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
  Serial.begin(11500);
  pinMode(LED_BUILTIN, OUTPUT);

  blink();

  // set volume change frequencies
  kVol1.setFreq(2.43f); // more of a pulse
  kVol2.setFreq(0.245f);
  kVol3.setFreq(0.19f);
  kVol4.setFreq(0.17f);
  kVol5.setFreq(0.47f);
  //  kVol6.setFreq(0.031f);
  //  kVol7.setFreq(0.0717f);
  //  kVol8.setFreq(0.041f);

  v1 = v2 = v3 = v4 = 255;
  v5 = v6 = v7 = v8 = 255;

  envelope.setADLevels(255, 64);
  envelope.setTimes(150, 200, 10000, 1000); // 10000 is so the note will sustain 10 seconds unless a noteOff comes
  portamento1.setTime(100u);
  portamento2.setTime(300u);
  portamento3.setTime(500u);
  
  startMozzi(); // start with default control rate of 64
}

void loop() {
  audioHook(); // required here
}


void updateControl() {
  buffer.populate(); // get keys
  envelope.update();
  aCos1.setFreq_Q16n16(portamento1.next());
  aCos2.setFreq_Q16n16(portamento2.next());
  aCos3.setFreq_Q16n16(portamento3.next());
  
  v1 = kVol1.next(); // >> 1; // going at a higher freq, this creates zipper noise, so reduce the gain
  v2 = kVol2.next();
  v3 = kVol3.next();
  v4 = kVol4.next();
  v5 = kVol5.next();
  //   v6 = kVol6.next();
  //   v7 = kVol7.next();
  //   v8 = kVol8.next();

  if (buffer.isEmpty()) {
    envelope.noteOff();
  }
  else { // we have keypresses
    byte note = 60 + (octave * 12) - 36 + buffer.getFirst(); // FIXME
    
    portamento1.start((byte)(note+0));
    portamento2.start((byte)(note+5));
    portamento2.start((byte)(note+7));
    envelope.noteOn();
  
//    aCos1.setFreq(mtof(note + 0));
//    aCos2.setFreq(mtof(note + 5));
//    aCos3.setFreq(mtof(note + 7));
    aCos4.setFreq(mtof(note + 10));
    aCos5.setFreq(mtof(note - 12));
    //   aCos6.setFreq(mtof(81+keynum));
    //   aCos7.setFreq(mtof(60+keynum));
    //   aCos8.setFreq(mtof(84+keynum));
  }
}

AudioOutput_t updateAudio() {
  long asig = (long)
              aCos1.next() * v1 + 
              aCos2.next() * v2 +
              aCos3.next() * v3 +
              aCos4.next() * v4 +
              aCos5.next() * v5; // +
//              aCos6.next()*v6 +
//              aCos7.next()*v7 +
//              aCos8.next()*v8;
  // 26 bits = 8 bits envelope + 18 bits signal
  return MonoOutput::fromAlmostNBit(26, envelope.next() * asig);
}
