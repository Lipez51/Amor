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

const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const progress = document.getElementById('progress');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const cover = document.getElementById('cover');

const musicas = [
  {
    nome: "beabadoobee",
    arquivo: "beabadoobee.mp3",
    inicio: 8,
    capa: "beabadoobee.png"
  },
  {
    nome: "Luan Santana",
    arquivo: "luan.mp3",
    inicio: 68,
    capa: "luan.png"
  },
  {
    nome: "Justin Timberlake",
    arquivo: "justin.mp3",
    inicio: 44,
    capa: "justin.png"
  }
];

let musicaAtual = 0;
let tocando = true;

function carregarMusica(index) {
  const m = musicas[index];
  audio.src = m.arquivo;
  audio.currentTime = m.inicio;
  cover.src = m.capa;
}

function tocarOuPausar() {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = "⏸️";
  } else {
    audio.pause();
    playBtn.textContent = "▶️";
  }
}

function proximaMusica() {
  musicaAtual = (musicaAtual + 1) % musicas.length;
  carregarMusica(musicaAtual);
  audio.play();
}

function anteriorMusica() {
  musicaAtual = (musicaAtual - 1 + musicas.length) % musicas.length;
  carregarMusica(musicaAtual);
  audio.play();
}

audio.addEventListener('timeupdate', () => {
  const { currentTime, duration } = audio;
  progress.value = (currentTime / duration) * 100;
  currentTimeEl.textContent = formatarTempo(currentTime);
  durationEl.textContent = formatarTempo(duration);
});

progress.addEventListener('input', () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
});

function formatarTempo(tempo) {
  const min = Math.floor(tempo / 60);
  const seg = Math.floor(tempo % 60);
  return `${min}:${seg < 10 ? '0' + seg : seg}`;
}

playBtn.addEventListener('click', tocarOuPausar);
nextBtn.addEventListener('click', proximaMusica);
prevBtn.addEventListener('click', anteriorMusica);

carregarMusica(musicaAtual);

const volumeSlider = document.getElementById('volume');
volumeSlider.addEventListener('input', () => {
  audio.volume = volumeSlider.value;
});