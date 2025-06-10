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