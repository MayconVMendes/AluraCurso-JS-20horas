var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length ; i++){
    
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");

    var imcTd = paciente.querySelector(".info-imc");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var alturaEhValida = validaAltura(altura);
    var pesoEhValido = validaPeso(peso);

    if(!pesoEhValido){
        console.log("Peso inválido");
        imcTd.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
        pesoEhValido = false;
    }

    if(!alturaEhValida){
        console.log("Altura inválida");
        imcTd.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
        alturaEhValida = false;
    }

    if(pesoEhValido && alturaEhValida){
        var imc = calculaImc(peso, altura); 
        imcTd.textContent = imc;
    }    
}

function calculaImc(peso, altura){
    var imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}

function validaPeso(peso){

    if(peso > 0 && peso < 1000){
        return true
    }else{
        return false
    }
}

function validaAltura(altura){

    if(altura > 0 && altura < 3.00){
        return true
    }else{
        return false
    }
}

function validaPaciente(paciente){

    var erros = [];

    if(paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco");
    }

    if(paciente.gordura.length == 0){
        erros.push("A gordura não pode ser em branca");
    }

    if(paciente.peso.length == 0){
        erros.push("A peso não pode ser em branco");
    }

    if(paciente.altura.length == 0){
        erros.push("A altura não pode ser em branco");
    }

    if(!validaPeso(paciente.peso)){
        erros.push("Peso é invalido");
    }
    
    if(!validaAltura(paciente.altura)){
        erros.push("Altura é invalida");
    }

    return erros
}