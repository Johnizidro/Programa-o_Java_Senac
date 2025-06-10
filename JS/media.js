function calcularMedia() {
    const nota1 = parseInt(document.getElementById('nota1').value);
    const nota2 = parseInt(document.getElementById('nota2').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(nota1) || isNaN(nota2) || nota1 < 0 || nota2 < 0) {
      resultado.textContent = 'Por favor, insira valores válidos para as notas.';
      resultado.style.color = 'red';
      return;
    }

    const media = (nota1 + nota2) / 2;
    let classificacao = '';

    if (media >= 6) {
      classificacao = 'Aprovado';
    } else {
      classificacao = 'Reprovado';
    }

    resultado.style.color = '#333';
    resultado.textContent = `Sua média é ${media.toFixed(2)} - ${classificacao}`;
  }