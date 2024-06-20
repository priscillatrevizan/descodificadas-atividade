function calcularMedia() {
  const notas = document.querySelectorAll(".nota");
  let soma = 0;
  let contador = 0;
  let campoVazio = false;

  notas.forEach(nota => {
    let valor = parseFloat(nota.value);
    if (nota.value === "") {
      campoVazio = true;
    }
    if (!isNaN(valor)) {
      soma += valor;
      contador++;
    }
  });

  const resultadoElement = document.getElementById("resultadoNotas");

  if (campoVazio) {
    resultadoElement.innerText = "Por favor, preencha todos os campos.";
    resultadoElement.className = "mensagem erro";
  } else if (contador === 0) {
    resultadoElement.innerText =
      "Por favor, insira pelo menos uma nota válida.";
    resultadoElement.className = "mensagem erro";
  } else {
    const media = soma / contador;
    let mensagem = "A média é: " + media.toFixed(2) + ". ";

    if (media >= 7) {
      mensagem += "Parabéns, você está acima da média!";
      resultadoElement.className = "mensagem sucesso";
    } else {
      mensagem += "Atenção, você está abaixo da média estadual.";
      resultadoElement.className = "mensagem alerta";
    }

    resultadoElement.innerText = mensagem;
  }
}

function conferirIdade() {
  const idade = document.getElementById("idade").value;
  const resultadoIdade = document.getElementById("resultadoIdade");

  if (idade >= 18) {
    resultadoIdade.innerText = "Você é maior de idade.";
    resultadoIdade.className = "mensagem sucesso";
  } else {
    resultadoIdade.innerText = "Você é menor de idade.";
    resultadoIdade.className = "mensagem alerta";
  }
}

function descobrirMes() {
  const mes = parseInt(document.getElementById("mes").value, 10);
  const resultadoMes = document.getElementById("resultadoMes");

  const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  if (mes >= 1 && mes <= 12) {
    resultadoMes.innerText = `O mês é ${meses[mes - 1]}.`;
    resultadoMes.className = "mensagem";
  } else {
    resultadoMes.innerText = "Mês inválido.";
    resultadoMes.className = "mensagem erro";
  }
}
