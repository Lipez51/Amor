const btnSim = document.getElementById("btn-sim");
const btnNao = document.getElementById("btn-nao");
const mensagem = document.getElementById("mensagem");
const teamo = document.querySelector(".teamo");

btnSim.addEventListener("click", () => {
  mensagem.classList.remove("oculto");
  teamo.classList.remove("oculto");
});

btnNao.addEventListener("mouseover", () => {
  const larguraJanela = window.innerWidth - btnNao.offsetWidth;
  const alturaJanela = window.innerHeight - btnNao.offsetHeight;

  const posX = Math.random() * larguraJanela;
  const posY = Math.random() * alturaJanela;

  btnNao.style.position = "absolute";
  btnNao.style.left = `${Math.min(larguraJanela, posX)}px`;
  btnNao.style.top = `${Math.min(alturaJanela, posY)}px`;
});
