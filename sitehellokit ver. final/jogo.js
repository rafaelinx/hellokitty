
const respostas = document.querySelectorAll(".resposta");
const mensagem = document.getElementById("mensagem");

respostas.forEach((botao) => {
  botao.addEventListener("click", () => {
    const correta = botao.getAttribute("data-correta");

    if (correta === "true") {
      mensagem.textContent = "🎉 Parabéns! Você acertou!";
      mensagem.style.color = "#ff69b4";

      
      setTimeout(() => {
        window.location.href = "fase2.html";
      }, 2000);
    } else {
      mensagem.textContent = "😿 Essa não é a resposta correta. Tente novamente!";
      mensagem.style.color = "#f06292";
    }
  });
});
