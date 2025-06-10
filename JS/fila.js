const filaOriginal = ["Ana", "Pedro", "Carla"];
function mostrarFilaInicial() {
  document.getElementById("fila").textContent = filaOriginal.join(", ");
}
function executarFila() {
  let fila = [...filaOriginal];
  fila.push("João");
  fila.shift();
  document.getElementById("fila").textContent = fila.join(", ");
}

// Tarefas do Dia
const tarefasOriginais = ["Tomar Café", " Estudar", "Trabalhar", "Limpar a Casa", "Ler"];
function mostrarTarefasIniciais() {
  document.getElementById("tarefas").textContent = tarefasOriginais.join(", ");
}
function executarTarefas() {
  let tarefas = [...tarefasOriginais];
  tarefas.shift();
  tarefas.push("Assistir Série");
  document.getElementById("tarefas").textContent = tarefas.join(", ");
}

// Média do Aluno
const notasOriginais = [8, 9, 7, 6, 4];
function mostrarNotas() {
  document.getElementById("media").textContent = notasOriginais.join(", ");
}
function calcularMedia() {
  let media = notasOriginais.reduce((soma, nota) => soma + nota, 0) / notasOriginais.length;
  document.getElementById("media").textContent = `Média: ${media.toFixed(2)}`;
}

// Preços com Desconto
const precosOriginais = [100, 50, 60];
function mostrarPrecosOriginais() {
  document.getElementById("desconto").textContent = precosOriginais.join(", ");
}
function aplicarDesconto() {
  let comDesconto = precosOriginais.map(p => p * 0.9);
  document.getElementById("desconto").textContent = comDesconto.map(p => p.toFixed(2)).join(", ");
}

// Convidado Encontrado
const convidadosOriginais = ["Marcos", "Fernanda", "Paulo", "Aline"];
function mostrarConvidados() {
  document.getElementById("convidado").textContent = convidadosOriginais.join(", ");
}
function verificarConvidado() {
  let pauloExiste = convidadosOriginais.includes("Paulo");
  document.getElementById("convidado").textContent = pauloExiste
    ? "Sim, Paulo está na lista."
    : "Não, Paulo não está na lista.";
}
  // Lista de Ingredientes
  const ingredientesOriginais = ["Farinha", "Ovos", "Leite", "Açúcar"];
  function mostrarIngredientes() {
    document.getElementById("ingredientes").textContent = ingredientesOriginais.join(", ");
  }
  function mostrarReceita() {
    let receita = "Os ingredientes são: " + ingredientesOriginais.join(", ");
    document.getElementById("ingredientes").textContent = receita;
  }

  // Ordem Crescente
  const numerosOriginais = [5, 1, 9, 3, 7];
  function mostrarNumerosOriginais() {
    document.getElementById("ordemCrescente").textContent = numerosOriginais.join(", ");
  }
  function ordenarNumeros() {
    let nums = [...numerosOriginais];
    nums.sort((a, b) => a - b);
    document.getElementById("ordemCrescente").textContent = nums.join(", ");
  }

  // Caixa Alta
  const nomesOriginais = ["ana", "bruno", "carla"];
  function mostrarNomesOriginais() {
    document.getElementById("caixaAlta").textContent = nomesOriginais.join(", ");
  }
  function converterCaixaAlta() {
    let maiusculos = nomesOriginais.map(nome => nome.toUpperCase());
    document.getElementById("caixaAlta").textContent = maiusculos.join(", ");
  }

  // Número maior que 50
  const numerosMaior50 = [10, 25, 60, 45, 60];
  function mostrarNumeros() {
    document.getElementById("maiorQue50").textContent = numerosMaior50.join(", ");
  }
  function mostrarMaiorQue50() {
    let maior = numerosMaior50.find(num => num > 50);
    document.getElementById("maiorQue50").textContent = `Primeiro número maior que 50: ${maior}`;
  }

  // Números Pares
  const listaNumerosPares = [12, 25, 30, 47, 50, 63, 72, 89, 90, 100];
  function mostrarListaCompleta() {
    document.getElementById("numerosPares").textContent = listaNumerosPares.join(", ");
  }
  function mostrarPares() {
    let pares = listaNumerosPares.filter(num => num % 2 === 0);
    document.getElementById("numerosPares").textContent = pares.join(", ");
  }