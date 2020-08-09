'use strict';
import { characters } from '../Characters/Characters.js';
import { createOption } from  './FormOptionDesign.js';

const loadCreateMessageForm = () => {
    const select = document.getElementById('SelectP');

    for(const key in characters) {
        const char = characters[key];
        const option = createOption(char);
        select.appendChild(option);
    }
}

const loadCharacterSelector = () => {
    const characterSelector = document.getElementById('CharacterSelectorImages');

    for(const key in characters) {
        const char = characters[key];

        const container = document.createElement('div');
        container.className = 'col-4 col-md-3 col-lg-2';
    }
}

export const loadCharacters = () => {
    loadCreateMessageForm();
}

