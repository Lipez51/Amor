const btnSim = document.getElementById("btn-sim");
const btnNao = document.getElementById("btn-nao");
const mensagem = document.getElementById("mensagem");

function moverBotao() {
  const larguraJanela = window.innerWidth - btnNao.offsetWidth;
  const alturaJanela = window.innerHeight - btnNao.offsetHeight;

  const posX = Math.random() * larguraJanela;
  const posY = Math.random() * alturaJanela;

  btnNao.style.position = "absolute";
  btnNao.style.left = `${Math.min(larguraJanela, posX)}px`;
  btnNao.style.top = `${Math.min(alturaJanela, posY)}px`;
}

// Faz o botão fugir quando passa o mouse
btnNao.addEventListener("mouseover", moverBotao);

// Faz o botão fugir quando clica (principalmente para celular)
btnNao.addEventListener("click", moverBotao);

btnSim.addEventListener("click", () => {
  mensagem.classList.remove("oculto");
});
