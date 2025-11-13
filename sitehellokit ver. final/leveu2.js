const video = document.querySelector('.kitty-video');

// Quando o vídeo terminar...
video.addEventListener('ended', () => {
  // Redireciona para a próxima página
  window.location.href = 'leveu3.html';
});