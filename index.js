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

  const resultadoElement = document.getElementById("resultado");

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
