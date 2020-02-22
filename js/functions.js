var botaoAdicionar = document.querySelector("#adicionar-tarefa");

var tarefa = JSON.parse(localStorage.getItem("myStorage")) || [];

botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var tarefa = obtemTarefa(form);

    var tarefaTr = montaTr(tarefa);

    var erros = validaTarefa(tarefa);

        if (erros.length > 0) {
            exibeMensagensDeErro(erros);

            return;
        }

    var tabela = document.querySelector("#tabela-tarefas");

    tabela.appendChild(tarefaTr);

    form.reset();

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

});


function obtemTarefa(form) {

    var tarefa = {
        titulo: form.titulo.value,
        data: form.data.value,
        horario: form.horario.value,
    }

    return tarefa;
}

function montaTr(tarefa) {
    var tarefaTr = document.createElement("tr");
    tarefaTr.classList.add("tarefa");

    tarefaTr.appendChild(montaTd(tarefa.titulo, "info-titulo"));
    tarefaTr.appendChild(montaTd(inverteData(tarefa.data), "info-data"));
    tarefaTr.appendChild(montaTd(tarefa.horario, "info-horario"));

    return tarefaTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function validaTarefa(tarefa) {

    var erros = [];

    if (tarefa.titulo.length == 0) {
        erros.push("Digite o título da tarefa.");
    }

    if (tarefa.data.length == 0) {
        erros.push("Digite a data da tarefa.");
    }   

    if (tarefa.horario.length == 0) {
        erros.push("Digite o horário do tarefa.");
    }

    return erros;
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function inverteData() {
    document.querySelector('[type=date]').value;
    var brDate = data.value.split('-').reverse().join('/');
    return brDate
}

function saveToStorage() {
    localStorage.setItem("myStorage", JSON.stringify(tarefa));
}