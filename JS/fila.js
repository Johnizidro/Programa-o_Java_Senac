function executarFila() {
    let fila = ["Ana", "Pedro", "Carla"];
    fila.push("João");
    fila.shift();
    document.getElementById("fila").textContent = fila.join(", ");
  }

  function executarTarefas() {
    let tarefas = ["Tomar Café", " Estudar", "Trabalhar", "Limpar a Casa", "Ler"];
    tarefas.shift();
    tarefas.push("Assistir Série");
    document.getElementById("tarefas").textContent = tarefas.join(", ");
  }

  function calcularMedia() {
    let notas = [8, 9, 7, 6, 4];
    let media = notas.reduce((soma, nota) => soma + nota, 0) / notas.length;
    document.getElementById("media").textContent = media.toFixed(2);
  }

  function aplicarDesconto() {
    let precos = [100, 50, 60];
    let precosComDesconto = precos.map(preco => preco * 0.9);
    document.getElementById("desconto").textContent = precosComDesconto.map(p => p.toFixed(2)).join(", ");
  }

  function verificarConvidado() {
    let convidades = ["Marcos", "Fernanda", "Paulo", "Aline"];
    let encontrado = convidades.includes("Paulo");
    document.getElementById("convidado").textContent = encontrado ? "Sim, Paulo está na lista." : "Não, Paulo não está na lista.";
  }