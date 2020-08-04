function saveChatAsImage() {
    const objetivo = document.getElementById('ChatScreen');
  
    html2canvas(objetivo) // Llamar a html2canvas y pasarle el elemento
      .then(canvas => {
        let enlace = document.createElement('a');
        enlace.download = "prueba.png";
        // Convertir la imagen a Base64
        enlace.href = canvas.toDataURL();
        // Hacer click en él
        enlace.click();
      });
  }