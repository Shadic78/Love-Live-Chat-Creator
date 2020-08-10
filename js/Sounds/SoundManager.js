'use strict';
import { sounds } from './CharacterSounds.js';
import { getRandomInt } from '../Util/RandomNumbers.js';

const SOUND_VOLUME = { volume: .2 };
const soundContext = new AudioContext();

for (let character in sounds) {
    for (let soundNumber in sounds[character]) {
        loadSound(character, soundNumber);
    }
}

function loadSound(name, soundNumber) {
    const soundChar = sounds[name];
    const sound = soundChar[soundNumber];

    const url = sound.url;
    const buffer = sound.buffer;

    const request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.responseType = 'arraybuffer';

    request.onload = function () {
        soundContext.decodeAudioData(request.response, function (newBuffer) {
            sound.buffer = newBuffer;
        });
    }

    request.send();
}

function playSound(name, soundNumber, options) {
    const soundChar = sounds[name];
    const sound = soundChar[soundNumber];
    const soundVolume = sound.volume || 1;

    const buffer = sound.buffer;
    if (buffer) {
        const source = soundContext.createBufferSource();
        source.buffer = buffer;

        const volume = soundContext.createGain();

        if (options) {
            if (options.volume) {
                volume.gain.value = soundVolume * options.volume;
            }
        } else {
            volume.gain.value = soundVolume;
        }

        volume.connect(soundContext.destination);
        source.connect(volume);
        source.start(0);
    }
}

export const playRandomSound = (character) => {
    const char = sounds[character];

    if(!char) return;

    const numberOfSounds = Object.keys(char).length;

    const soundToPlay = String(getRandomInt(1, numberOfSounds + 1));

    playSound(character, soundToPlay, SOUND_VOLUME);
};