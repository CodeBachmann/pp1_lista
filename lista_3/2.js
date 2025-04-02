a = parseInt(prompt("Valor 1: "));
b = parseInt(prompt("Valor 2: "));
soma = a + b;

document.querySelector("p").innerText=`${soma}`;

if(soma > 20){
    document.querySelector("p").style.color="red"
}