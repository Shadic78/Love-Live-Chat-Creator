'use strict';
import { createMessage } from './MessageFactory.js';
import { playRandomSound } from './Sounds/SoundManager.js';
import { loadCharacters } from './LoadCharacters/LoadCharacters.js';

window.onload = () => {
  loadCharacters();
};

document.getElementById('SelectP').addEventListener('mousedown', e => {
  e.preventDefault();
});

// Select a character from the modal
document.getElementById('CharacterSelector').addEventListener('click', e => {
  if(e.target.getAttribute('class') != 'ImgCharacterSelector') return;

  const character =  e.target.getAttribute('data-char');
  const imgName = e.target.getAttribute('imgName');
  const select = document.getElementById('SelectP');
  select.value = character;

  changeCharacterImg(imgName);
  playRandomSound(character);

  document.getElementById('BtnCloseCharSelector').click();
  document.getElementById('Message').focus();
});

function changeCharacterImg(imgName) {
  const FormImg = document.getElementById('FormImgPersonaje');
  FormImg.setAttribute('src', `img/${imgName}`);
}

// Create and put the message in the chat
document.getElementById('BtnAddMessage').addEventListener('click', () => {
  const select = document.getElementById('SelectP');
  const selectedCharacter = select.options[select.selectedIndex].text;
  const selectValue = select.options[select.selectedIndex].value;
  const messageText = document.getElementById('Message').value;

  if(messageText == '') return;

  const chatStyle = document.getElementById('Chat-Style').getAttribute('data-style');

  const chatContainer = document.getElementById('ChatContainer');

  const messageNode = createMessage(selectedCharacter, selectValue, messageText, chatStyle);

  chatContainer.appendChild(messageNode);

  document.getElementById('Message').value = '';
});