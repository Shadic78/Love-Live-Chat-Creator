'use strict';
import { createMessage } from './MessageFactory.js';

// Change character image in the form
document.getElementById('SelectP').addEventListener('change', () => {
  const select = document.getElementById('SelectP');
  const character = select.options[select.selectedIndex].value;

  const FormImg = document.getElementById('FormImgPersonaje');
  FormImg.setAttribute('src', `img/${character}.png`);
});

// Create and put the message in the chat
document.getElementById('BtnAddMessage').addEventListener('click', () => {
  const select = document.getElementById('SelectP');
  const selectedCharacter = select.options[select.selectedIndex].text;
  const selectValue = select.options[select.selectedIndex].value;
  const messageText = document.getElementById('Message').value;

  const chatStyle = document.getElementById('Chat-Style').getAttribute('data-style');

  const chatContainer = document.getElementById("ChatContainer");

  const messageNode = createMessage(selectedCharacter, selectValue, messageText, chatStyle);

  chatContainer.appendChild(messageNode);

  document.getElementById("Message").value = "";
});