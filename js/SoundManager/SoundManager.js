'use strict';
import { characters as characterList } from '../Characters/Characters.js';
import { getRandomInt } from '../Util/RandomNumbers.js';

const SOUND_VOLUME = { volume: .2 };
const soundContext = new AudioContext();

// Load the sounds for every character
for(const character in characterList) {
    const char = characterList[character];
    const charSounds = char['sounds'];
    for(const soundNumber in charSounds) {
        const sound = charSounds[soundNumber];
        loadSound(sound);
    }
}

function loadSound(soundObj) {
    const sound = soundObj;

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

function playSound(soundObj, options) {
    const sound = soundObj;
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
    const char = characterList[character];
    const soundList = char['sounds'];

    if(!soundList) return;

    const numberOfSounds = Object.keys(soundList).length;

    const soundToPlay = String(getRandomInt(1, numberOfSounds + 1));

    playSound(soundList[soundToPlay], SOUND_VOLUME);
};