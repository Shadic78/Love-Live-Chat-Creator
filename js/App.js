'use strict';
import { createMessage } from './MessageFactory.js';
import { playRandomSound } from './SoundManager/SoundManager.js';
import { loadCharacters } from './LoadCharacters/LoadCharacters.js';
import { chatState } from './ChatState.js';

window.onload = () => {
  loadCharacters();
};

document.getElementById('SelectP').addEventListener('mousedown', e => {
  e.preventDefault();
});

document.getElementById('ChatTitle').addEventListener('input', e => {
  chatState.setTitle(e.target.innerText);
})

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
  const imgName = select.options[select.selectedIndex].getAttribute('imgName');

  if(messageText == '') return;

  const chatStyle = document.getElementById('Chat-Style').getAttribute('data-style');

  const messageNode = createMessage(selectedCharacter, imgName, messageText, chatStyle);
  const chatContainer = document.getElementById('ChatContainer');
  chatContainer.appendChild(messageNode);
  chatState.addMessage(selectedCharacter, imgName, messageText);

  document.getElementById('Message').value = '';
});