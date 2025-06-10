var val01, val02, Resultado, operacao

function acaoBotao() {

val01 = prompt("Digite o Primeiro Valor")
operacao = prompt("Digite a operação; Exemplo: +, -, /, *")
val02 = prompt("Digite o Segundo Valor")

if (operacao == "+") {
    Resultado = parseInt(val01) + parseInt(val02)
} else if (operacao == "-") {
    Resultado = parseInt(val01) - parseInt(val02) 
}else if (operacao == "/") {
    Resultado = parseInt(val01) / parseInt(val02) 
}else if (operacao == "*") {
    Resultado = parseInt(val01) * parseInt(val02) 
}

document.getElementById("paragrafo").innerText = "O resultado é: " + Resultado

}

function BotaoReset(){

    document.getElementById("paragrafo").innerText =""
}