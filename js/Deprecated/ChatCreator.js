// Cambiar la imagen del personaje
document.getElementById("SelectP").addEventListener("change", function() {
  let select = document.getElementById("SelectP");
  let messageUser = select.options[select.selectedIndex].value;

  let FormImg = document.getElementById("FormImgPersonaje");
  FormImg.setAttribute("src", "img/" + messageUser + ".png");
});

// Cerrar la ventana de poner nombre al chat
document.getElementById("BtnCloseChatNameForm").addEventListener("click", function() {
  let btn = document.getElementById("BtnCloseChatNameForm");
  // Acceder al contenedor
  let container = btn.parentElement.parentElement.parentElement;
  container = container.parentElement.parentElement;
  // Remover el contenedor del documento
  container.parentElement.removeChild(container);

  // Agregarle margin-top al form del mensaje
  let form = document.getElementById("MessageFormContainer");
  form.classList.add("mt-5");
});

// Cambiar el titulo del chat
document.getElementById("BtnSetChatTitle").addEventListener("click", function() {
  let newChatTitle = document.getElementById("ChatTitleTxt").value;
  let chatTitleHtml = document.getElementById("ChatTitle");
  chatTitleHtml.innerHTML = newChatTitle;
});

// Crear el mensaje y ponerlo en el chat
document.getElementById("BtnAddMessage").addEventListener("click", function() {
  // Obtener los datos del formulario
  let select = document.getElementById("SelectP");
  let selectedCharacter = select.options[select.selectedIndex].text;
  let selectValue = select.options[select.selectedIndex].value;
  let message = document.getElementById("Message").value;

  if(selectValue != "Anata") {
    createNormalMessage(selectedCharacter, selectValue, message);
  }
  else if(selectValue == "Anata") {
    createAnataMessage(selectedCharacter, selectValue, message);
  }

});

function createNormalMessage(selectedCharacter, selectValue, message) {
  // Obtener el contenedor del chat
  let chatContainerTitle = document.getElementById("ChatContainerTitle");
  let chatContainer = document.getElementById("ChatContainer");
  // Obtener los elementos del template
  let templateImg = document.getElementById("TEMPLATE_IMG");
  let templateCharName = document.getElementById("TEMPLATE_CHAR_NAME");
  let templateMessageText = document.getElementById("TEMPLATE_MESSAGE_TEXT");

  // Modificar los datos del template
  templateImg.setAttribute("src", "img/" + selectValue + ".png");
  templateCharName.innerHTML = selectedCharacter;
  templateMessageText.innerHTML = message;

  // Obtener el template modificado
  let template = document.getElementById("TEMPLATE_STRUCTURE");
  let templateCopy = template.cloneNode(true);

  // Insertar el nuevo mensaje al principio
  /*insertAfter(templateCopy, chatContainerTitle);
  chatContainerTitle.nextSibling.setAttribute("style", "display: visible;");*/
  chatContainer.appendChild(templateCopy);
  templateCopy.setAttribute("style", "display: visible;");

  // Eliminar los id's del nuevo mensaje
  // Obtener los elementos del template
  let templateImg2 = document.getElementById("TEMPLATE_IMG");
  let templateCharName2 = document.getElementById("TEMPLATE_CHAR_NAME");
  let templateMessageText2 = document.getElementById("TEMPLATE_MESSAGE_TEXT");
  let template2 = document.getElementById("TEMPLATE_STRUCTURE");
  templateImg2.removeAttribute("id");
  templateCharName2.removeAttribute("id");
  templateMessageText2.removeAttribute("id");
  template2.removeAttribute("id");

  // Limpiar el text input
  document.getElementById("Message").value = "";
}

function createAnataMessage(selectedCharacter, selectValue, message) {
  // Obtener el contenedor del chat
  let chatContainerTitle = document.getElementById("ChatContainerTitle");
  let chatContainer = document.getElementById("ChatContainer");
  // Obtener los elementos del template
  let templateImg = document.getElementById("TEMPLATE_IMG_ANATA");
  let templateCharName = document.getElementById("TEMPLATE_CHAR_NAME_ANATA");
  let templateMessageText = document.getElementById("TEMPLATE_MESSAGE_TEXT_ANATA");

  // Modificar los datos del template
  templateImg.setAttribute("src", "img/" + selectValue + ".png");
  templateCharName.innerHTML = selectedCharacter;
  templateMessageText.innerHTML = message;

  // Obtener el template modificado
  let template = document.getElementById("TEMPLATE_STRUCTURE_ANATA");
  let templateCopy = template.cloneNode(true);

  // Insertar el nuevo mensaje al principio
  /*insertAfter(templateCopy, chatContainerTitle);
  chatContainerTitle.nextSibling.setAttribute("style", "display: visible;");*/
  chatContainer.appendChild(templateCopy);
  templateCopy.setAttribute("style", "display: visible;");

  // Eliminar los id's del nuevo mensaje
  // Obtener los elementos del template
  let templateImg2 = document.getElementById("TEMPLATE_IMG_ANATA");
  let templateCharName2 = document.getElementById("TEMPLATE_CHAR_NAME_ANATA");
  let templateMessageText2 = document.getElementById("TEMPLATE_MESSAGE_TEXT_ANATA");
  let template2 = document.getElementById("TEMPLATE_STRUCTURE_ANATA");
  templateImg2.removeAttribute("id");
  templateCharName2.removeAttribute("id");
  templateMessageText2.removeAttribute("id");
  template2.removeAttribute("id");

  // Limpiar el text input
  document.getElementById("Message").value = "";
}

function insertAfter(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
}
