document.getElementById("BtnAddMessage").addEventListener("click", function() {
  let chatContainer = document.getElementById("ChatContainer");
  let select = document.getElementById("SelectP");
  let messageUser = select.options[select.selectedIndex].value;
  let message = document.getElementById("Message").value;

  let messageEstructure = "<span class='MessageUserName'>" + messageUser + "</span><br /><span class='MessageText'>" + message + "</span>";
  let messageContainer = document.createElement("div");
  messageContainer.innerHTML = messageEstructure;

  let lastMessage = document.getElementById("ChatContainer").firstChild;
  chatContainer.insertBefore(messageContainer, lastMessage);
});
