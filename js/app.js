
localStorage.clear();
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

// Funcao para criar seletor de turmas
function classSelection(s1, s2){
  var s1 = document.getElementById(s1);
  var s2 = document.getElementById(s2);
  var local = document.createElement("option");
  local.value = "none";
  local.innerHTML = "Escolha a turma";
  s2.innerHTML = "";
  for(classe in data[s1.value]){
    var newOption = document.createElement("option");
    newOption.value = classe;
    newOption.innerHTML = classe;
    s2.appendChild(newOption);
  }
}

// Funcao para trazer total alunos e porcentagem de inativos
classes.addEventListener("change", carregaProgramadoras);
function carregaProgramadoras(){
  var dropMenu = document.getElementById("dropMenu").value;
  var classes = document.getElementById("classes").value;
  var listaProgramadoras = document.getElementById("totalDeveloper");
  var inativo = 0;
  var ativo = 0;
  var print = document.createElement("li");
  var percent = 0;
  listaProgramadoras.innerHTML = "";
      for(estudante in data[dropMenu][classes]["students"]){
        if(data[dropMenu][classes]["students"][estudante]["active"] === false) {
          inativo  = inativo + 1;

        }else{
          ativo = ativo + 1;

        }
    percent = inativo / (ativo + inativo) * 100;

    print.innerHTML = "O total de alunas ativas é " + ativo + ". E a porcentagem de alunas inativas é " + parseInt(percent) + "%.";
    listaProgramadoras.appendChild(print);

  }
  }

// A pontuação média das professoras.
classes.addEventListener("change", teacherNote);
function teacherNote(){
  var teacherRating = document.getElementById("note");
  var print = document.createElement("li");
  var dropMenu = document.getElementById("dropMenu").value;
  var classes = document.getElementById("classes").value;
  var sum = 0;
  teacherRating.innerHTML = "";
    for(note in data[dropMenu][classes]["ratings"]){
        if(data[dropMenu][classes]["ratings"][note]["teacher"] != 0){
        sum += data[dropMenu][classes]["ratings"][note]["teacher"];


        print.innerHTML = sum.toFixed(2);
}
        teacherRating.appendChild(print);

      }
    }

// A pontuação média das Jedi Master
classes.addEventListener("change", jediNote);
function jediNote(){
  var dropMenu = document.getElementById("dropMenu");
  var classes = document.getElementById("classes");
  var jediRating = document.getElementById("jediNote");
  var print = document.createElement("li");
  var dropMenu = document.getElementById("dropMenu").value;
  var classes = document.getElementById("classes").value;
  var sum = 0;

  jediRating.innerHTML = "";

      for(note in data[dropMenu][classes]["ratings"]){
        if(data[dropMenu][classes]["ratings"][note]["jedi"] != 0){
        sum += data[dropMenu][classes]["ratings"][note]["jedi"];
        var noteQuantity = data[dropMenu][classes]["ratings"].length;
        var media = sum / noteQuantity;
        print.innerHTML = media.toFixed(2);
      }
        jediRating.appendChild(print);

      }
    }

// SOFT SKILLS - O valor e a porcentagem que representam o número 
// total de alunas que excedem a meta de pontos de HSE (70% - 1200), em média, e por sprint.
classes.addEventListener("change", softSkills);
function softSkills(){
  var dropMenu = document.getElementById("dropMenu");
  var classes = document.getElementById("classes");
  var jediRating = document.getElementById("jediNote");
  var print = document.createElement("li");
  var dropMenu = document.getElementById("dropMenu").value;
  var classes = document.getElementById("classes").value;
  var sum = 0;

  jediRating.innerHTML = "";

      for(note in data[dropMenu][classes]["ratings"]){
        if(data[dropMenu][classes]["ratings"][note]["jedi"] != 0){
        sum += data[dropMenu][classes]["ratings"][note]["jedi"];
        var noteQuantity = data[dropMenu][classes]["ratings"].length;
        var media = sum / noteQuantity;
        print.innerHTML = media.toFixed(2);
      }
        jediRating.appendChild(print);

      }
    }




