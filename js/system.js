function inserir(num)
{
   let numero = window.document.getElementById("resultado").innerHTML;
   window.document.getElementById("resultado").innerHTML = numero + num;
}

function limpar()
{
    window.document.getElementById("resultado").innerHTML = "";
}

function apagar()
{
    let resultado = window.document.getElementById("resultado").innerHTML;
    window.document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}

function calcular()
{
    let resultado = window.document.getElementById('resultado').innerHTML;
    if(resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else
    {
        window.alert("sem valores inseridos")
    }
}