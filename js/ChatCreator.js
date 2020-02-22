document.getElementById("SelectP").addEventListener("change", function() {
  // Cambiar la imagen del personaje
  let select = document.getElementById("SelectP");
  let messageUser = select.options[select.selectedIndex].value;

  let FormImg = document.getElementById("FormImgPersonaje");
  FormImg.setAttribute("src", "img/" + messageUser + ".png");
});


document.getElementById("BtnAddMessage").addEventListener("click", function() {
  // Obtener los datos del formulario
  let chatContainerTitle = document.getElementById("ChatContainerTitle");
  let chatContainer = document.getElementById("ChatContainer");
  let select = document.getElementById("SelectP");
  let selectedCharacter = select.options[select.selectedIndex].text;
  let selectValue = select.options[select.selectedIndex].value;
  let message = document.getElementById("Message").value;

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
});

function insertAfter(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
}
