document.getElementById('BtnSaveAsImage').addEventListener('click', saveChatAsImage);

function saveChatAsImage() {
  window.scrollTo(0, 0);
  const objetive = document.getElementById('ChatScreen');
  let title = document.getElementById('ChatTitle').textContent.trim();

  if(title == '') title = 'Chat';

  html2canvas(objetive)
    .then(canvas => {
      let enlace = document.createElement('a');
      enlace.download = `${title}.png`;
      // Convertir la imagen a Base64
      enlace.href = canvas.toDataURL();
      // Hacer click en él
      enlace.click();
    });
}