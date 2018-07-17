
// Funcao para criar o menu dinamico de Sedes
window.onload = menu();
function menu(){
  var dropMenu = document.getElementById("dropMenu");
  dropMenu.innerHTML = "";
  var local = document.createElement("option");
  local.value = "none";
  local.innerHTML = "Escolha a sede";
  dropMenu.appendChild(local);
  for (sede in data){
    var itemSede = document.createElement("option");
    itemSede.value = sede;
    itemSede.innerHTML = sede;
    dropMenu.appendChild(itemSede);
  }
};

// Funcao para criar os seletores das turmas por sede. OBS. precisamos criar uma turma por seletor de opcao.
function classSelection(s1, s2){
  var s1 = document.getElementById(s1);
  var s2 = document.getElementById(s2);
  s2.innerHTML = "";
  for(classe in data[s1.value]){
    var newOption = document.createElement("option");
    newOption.value = classe;
    newOption.innerHTML = classe;
    s2.appendChild(newOption);
  }
}

// Função para trazer total de alunos e porcentagem de inativos
classes.addEventListener("change", carregaProgramadoras);
function carregaProgramadoras(){
  var ativo = 0;
  var inativo = 0;
  //var total = 0;
  var percent = 0;
  var listaProgramadoras = document.getElementById("totalDeveloper");
  var print = document.createElement("li");
  listaProgramadoras.innerHTML = "";
  for(sede in data){
    for(turma in data[sede]){
      for(estudante in data[sede][turma]["students"]){
        //if (se o cara atual corresponde à turma selecionada e se a cidade atual corresponde à cidade selecionada)
        if(data[sede][turma]["students"][estudante]["active"] === false){
          inativo = inativo + 1;
        }else{
          ativo = ativo + 1;
        }
        percent = inativo / (ativo + inativo) * 100;     
        print.innerHTML = "O total de alunas ativas é " +  ativo + ". E o total de alunas inativas é " + parseInt(percent) + "%.";
        listaProgramadoras.appendChild(print);
      }
    }
  }
}

//Pontuação média professoras
classes.addEventListener("change", teacherNote);
function teacherNote(){
  var teacherRating = document.getElementById("note");
  var print = document.createElement("li");
  var sum = 0;
  teacherRating.innerHTML = "";
  for(sede in data) {
    for(turma in data[sede]) {
      for(note in data[sede][turma]['ratings']) {
        if(data[sede][turma]['ratings'][note]['teacher'] != 0){
          sum = sum + data[sede][turma]['ratings'][note]['teacher'];
        }
        print.innerHTML = "A pontuação média dos mentores é " + sum.toFixed(2) + ".";
        teacherRating.appendChild(print);
      }
    }
  }
}    

//Pontuação média jedi
classes.addEventListener("change", jediNote);
function jediNote(){
  var jediRating = document.getElementById("jediNote");
  var print = document.createElement("li");
  var sum = 0;
  jediRating.innerHTML = "";
  for(sede in data) {
    for(turma in data[sede]) {
      for(note in data[sede][turma]['ratings']) {
        if(data[sede][turma]['ratings'][note]['jedi'] != 0){
          sum = sum + data[sede][turma]['ratings'][note]['jedi'];
        }
        print.innerHTML = "A pontuação média dos mentores é " + sum.toFixed(2) + ".";
        jediRating.appendChild(print);
      }
    }
  }
}

