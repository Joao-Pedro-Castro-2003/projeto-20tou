let intervalo;

let imagens = {
  1: "../../images/foto1.jpeg",
  2: "../../images/foto2.jpeg",
  3: "../../images/foto3.jpeg",
  4: "../../images/foto4.jpeg",
  5: "../../images/foto5.jpeg",
  6: "../../images/foto6.jpeg",
  7: "../../images/foto7.jpeg",
  8: "../../images/foto8.jpeg",
  9: "../../images/foto9.jpeg",
  10: "../../images/foto10.jpeg",
  11: "../../images/foto11.jpeg",
  12: "../../images/foto12.jpeg",
  13: "../../images/foto13.jpeg",
  14: "../../images/foto14.jpeg",
  15: "../../images/foto15.jpeg",
  16: "../../images/foto16.jpeg",
  17: "../../images/foto17.jpeg",
  18: "../../images/foto18.jpeg",
  19: "../../images/foto19.jpeg",
  20: "../../images/foto20.jpeg",
  21: "../../images/foto21.jpeg",
  22: "../../images/foto22.jpeg",
  23: "../../images/foto23.jpeg",
  24: "../../images/foto24.jpeg",
  25: "../../images/foto25.jpeg",
  26: "../../images/foto26.jpeg",
};

function carregaImagem() {
  const indiceAleatorio = Math.floor(Math.random() * 26) + 1;
  document.getElementById("imagens").src = imagens[indiceAleatorio];
}

function proximaImagem() {
  var img = document.getElementById("imagens");
  var imgAtual = parseInt(img.src.match(/(\d+)\.jpeg/)[1]);

  img.classList.add("fade-out");

  setTimeout(function () {
    if (imgAtual >= 26) {
      imgAtual = 0;
    }

    img.src = imagens[imgAtual + 1];
  }, 1200);

  img.classList.remove("fade-out");
}

function imagemAnterior() {
  var img = document.getElementById("imagens");
  var imgAtual = parseInt(img.src.match(/(\d+)\.jpeg/)[1]);

  img.classList.add("fade-out");

  setTimeout(function () {
    if (imgAtual <= 1) {
      imgAtual = 27;
    }

    img.src = imagens[imgAtual - 1];
  }, 1200);
  img.classList.remove("fade-out");
}

function atualizarContador() {
  const inicioDoNamoro = new Date("2021-10-26T00:00:00");

  const dataAtual = new Date();

  // Início do cálculo
  let anos = dataAtual.getFullYear() - inicioDoNamoro.getFullYear();
  let meses = dataAtual.getMonth() - inicioDoNamoro.getMonth();
  let dias = dataAtual.getDate() - inicioDoNamoro.getDate();

  // Ajusta se o dia atual ainda não atingiu o dia do início
  if (dias < 0) {
    meses--;
    const mesAnterior = new Date(
      dataAtual.getFullYear(),
      dataAtual.getMonth(),
      0
    );
    dias += mesAnterior.getDate(); // dias no mês anterior
  }

  // Ajusta se os meses ainda não completaram
  if (meses < 0) {
    anos--;
    meses += 12;
  }

  // Calcula diferença de horas, minutos e segundos
  const hojeComHora = new Date(
    dataAtual.getFullYear(),
    dataAtual.getMonth(),
    dataAtual.getDate(),
    dataAtual.getHours(),
    dataAtual.getMinutes(),
    dataAtual.getSeconds()
  );

  const inicioBase = new Date(
    inicioDoNamoro.getFullYear() + anos,
    inicioDoNamoro.getMonth() + meses,
    inicioDoNamoro.getDate()
  );
  const diffMs = hojeComHora - inicioBase;

  const horas = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diffMs / (1000 * 60)) % 60);
  const segundos = Math.floor((diffMs / 1000) % 60);

  // Atualiza o contador na tela
  document.getElementById(
    "contador"
  ).innerHTML = `${anos} anos, ${meses} meses, ${dias} dias, ${horas} horas,<br> ${minutos} minutos e ${segundos} segundos.<br> 💖<a href="../Carta/carta.html" style="text-decoration: none">📜</a>`;
}

carregaImagem();
atualizarContador();
setInterval(atualizarContador, 1000);
