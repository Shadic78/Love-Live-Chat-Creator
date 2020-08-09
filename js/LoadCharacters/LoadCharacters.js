'use strict';
import { characters } from '../Characters/Characters.js';
import { createOption } from  './FormOptionDesign.js';
import { createElement } from './CharacterSelectorElementsDesign.js';

const loadCreateMessageForm = () => {
    const select = document.getElementById('SelectP');

    for(const key in characters) {
        const char = characters[key];
        const option = createOption(char);
        select.appendChild(option);
    }
};

const loadCharacterSelector = () => {
    const characterSelector = document.getElementById('CharacterSelectorImages');

    for(const key in characters) {
        const char = characters[key];
        const characterImage = createElement(char);
        characterSelector.appendChild(characterImage);
    }
};

export const loadCharacters = () => {
    loadCreateMessageForm();
    loadCharacterSelector();
};

