function mudatxt() {
    document.getElementById("texto").innerHTML = "Bora meter marcha!";
}

function message() {
    alert("Utilizamos uma função para criar esse Alert.")
}


const nome = prompt("Digite seu nome!")

if ((nome == "") || (nome == null)) {
    document.write("Olá sem nome...")
} else {
    document.write("Seja bem vindo(a) " + nome + "!")
}




function soma() {

    num = parseFloat(document.getElementById("num1").value)
    num0 = parseFloat(document.getElementById("num2").value)
    res = num + num0
    document.getElementById("result").value = res
}

function divide() {
    num = parseFloat(document.getElementById("num1").value)
    num0 = parseFloat(document.getElementById("num2").value)
    res = num / num0
    document.getElementById("result").value = res

}

function multiplica() {
    num = parseFloat(document.getElementById("num1").value)
    num0 = parseFloat(document.getElementById("num2").value)
    res = num * num0
    document.getElementById("result").value = res

}

function subtrai() {
    num = parseFloat(document.getElementById("num1").value)
    num0 = parseFloat(document.getElementById("num2").value)
    res = num - num0
    document.getElementById("result").value = res

}