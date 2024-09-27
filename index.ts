// Função para incrementar ou decrementar os likes e alterar a cor do coração
const atualizarLikes = (cardElement: HTMLElement): void => {
  const spanLikes = cardElement.querySelector(".qtdeLikes") as HTMLSpanElement;
  const heart = cardElement.querySelector(".heart") as HTMLElement;
  const buttonLike = cardElement.querySelector(
    ".like-button"
  ) as HTMLButtonElement;

  let currentLikes = parseInt(spanLikes.textContent || "0", 10);

  buttonLike.classList.toggle("liked");
  const isLiked = buttonLike.classList.contains("liked");

  spanLikes.textContent = (currentLikes + (isLiked ? 1 : -1)).toString();
  heart.style.color = isLiked ? "red" : "black";
};

// Função para alterar a cor do botão 'mark' para verde
const alterarCorBotaoMark = (cardElement: HTMLElement): void => {
  const buttonMark = cardElement.querySelector(".mark-button i") as HTMLElement;
  buttonMark.style.color = "#00BF00";
};

// Função para enviar uma mensagem via prompt e exibir em console.log
const enviarMensagem = (cardElement: HTMLElement): void => {
  const message = prompt("Digite sua mensagem:");
  if (message) {
    console.log(`Mensagem enviada: ${message}`);
  }
};


// Adiciona os ouvintes de evento quando o DOM estiver carregado
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".card").forEach((element) => {
    const cardElement = element as HTMLElement; // Garantindo que o elemento é um HTMLElement

    // Configurando evento de clique para 'like'
    const buttonLike = cardElement.querySelector(
      ".like-button"
    ) as HTMLButtonElement;
    buttonLike.addEventListener("click", () => atualizarLikes(cardElement));

    // Configurando evento de clique para 'mark'
    const buttonMark = cardElement.querySelector(
      ".mark-button"
    ) as HTMLButtonElement;
    buttonMark.addEventListener("click", () =>
      alterarCorBotaoMark(cardElement)
    );

    // Configurando evento de clique para 'enviar mensagem'
    const buttonMessage = cardElement.querySelector(
      ".message"
    ) as HTMLButtonElement;
    buttonMessage.addEventListener("click", () => enviarMensagem(cardElement));
  });
});
