
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
  s2.innerHTML = "";
  var local = document.createElement("option");
  local.value = "none";
  local.innerHTML = "Escolha a turma";
  s2.appendChild(local);
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
    print.innerHTML = "O total de alunas ativas é " + ativo + ". <br/>" + "A porcentagem de alunas inativas é " + parseInt(percent) + "%.";
    listaProgramadoras.appendChild(print);
  }
}

// A pontuacao media dos mentores
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
      var noteQuantity = data[dropMenu][classes]["ratings"].length;
      var media = sum / noteQuantity;
      print.innerHTML ="A pontuação média dos mentores é " + media.toFixed(2) + ".";
    }
    teacherRating.appendChild(print);
  }
}

// A pontuacao media dos Jedi
classes.addEventListener("change", jediNote);
function jediNote(){
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
      print.innerHTML ="A pontuação média dos Jedi Masters é " + media.toFixed(2) + ".";
    }
    jediRating.appendChild(print);
  }
}

// funcao que verifica se um objeto é vazio
function isEmpty(obj) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop))
    return false;
  }
  return true;
}

// A porcentage de alunas que excedem (1200)  media e por sprints SOFTSKILLS
classes.addEventListener("change", softsKills);
function softsKills(){
  var hse = document.getElementById("hse");
  var print = document.createElement("li");
  var dropMenu = document.getElementById("dropMenu").value;
  var classes = document.getElementById("classes").value;
  var sum = 0;
  var developer = 0;
  var developerNoMedia = 0;
  var percent = 0;
  hse.innerHTML = "";
  for (student in data[dropMenu][classes]["students"]){
    for(month in data[dropMenu][classes]["students"][student]["sprints"]){
      if(isEmpty(data[dropMenu][classes]["students"][student]["active"]) === true)
        if(data[dropMenu][classes]["students"][student]["sprints"][month]["score"]["hse"] > 839){
          for (sprint in data[dropMenu][classes]["ratings"]){
            var sprint = data[dropMenu][classes]["ratings"].length;
          }
          developer = developer + 1;
        }else {
          developerNoMedia = developerNoMedia + 1;
        }
        percent = developer / (developer + developerNoMedia) * 100;
        sum  = developer / sprint;
        print.innerHTML = "O total de alunas com nota superior a 70% é " + developer + ", equivalente a " + parseInt(percent) + " %.";
      }
      hse.appendChild(print);
    }
}

// A porcentage de alunas que excedem (1799)  media e por sprints TECHSKILLS
classes.addEventListener("change", techSkills);
function techSkills(){
  var techSk = document.getElementById("techSk");
  var print = document.createElement("li");
  var dropMenu = document.getElementById("dropMenu").value;
  var classes = document.getElementById("classes").value;
  var sum = 0;
  var developer = 0;
  var developerNoMedia = 0;
  var percent = 0;
  techSk.innerHTML = "";
  for (student in data[dropMenu][classes]["students"]){
    for(month in data[dropMenu][classes]["students"][student]["sprints"]){
      if(isEmpty(data[dropMenu][classes]["students"][student]["active"]) === true)
        if(data[dropMenu][classes]["students"][student]["sprints"][month]["score"]["tech"] > 1259){
          for (sprint in data[dropMenu][classes]["ratings"]){
            var sprint = data[dropMenu][classes]["ratings"].length;
          }
          developer = developer + 1;
        }else {
          developerNoMedia = developerNoMedia + 1;
        }
        percent = developer / (developer + developerNoMedia) * 100;
        sum  = developer / sprint;
        print.innerHTML = "total de alunas com nota superior a 70% = " + parseInt(sum) + ", representando" + parseInt(percent) + " %.";
      }
      techSk.appendChild(print);
    }
  }



// A porcentagem de alunas satisfeitas com a experiencia da Laboratoria
classes.addEventListener("change", satisfaction);
function satisfaction(){
  var exceed = document.getElementById("exceed");
  var print = document.createElement("li");
  var dropMenu = document.getElementById("dropMenu").value;
  var classes = document.getElementById("classes").value;
  var sum = 0;
  exceed.innerHTML = "";
  for(qty in data[dropMenu][classes]["ratings"]){
    if(isEmpty(data[dropMenu][classes]["ratings"][qty]["student"]["supera"]) != 0){
      sum += data[dropMenu][classes]["ratings"][qty]["student"]["supera"];
      var superaQuantity = data[dropMenu][classes]["ratings"].length;
      var media = sum / superaQuantity;
      print.innerHTML = "O percentual médio de alunas satisfeitas com a Laboratória é " + media.toFixed(2) + " %.";
    }
    exceed.appendChild(print);
  }
}

// Quantidade média de alunas que superaram 70% de SOFTSKILLS e TECHSKILLS
classes.addEventListener("change", meetNote);
function meetNote (){
  var meet = document.getElementById("meet");
  var print = document.createElement("li");
  var dropMenu = document.getElementById("dropMenu").value;
  var classes = document.getElementById("classes").value;
  var developer = 0;
  var developerNoMedia = 0;
  var media = 0;
  meet.innerHTML = "";
  for (student in data[dropMenu][classes]["students"]){
    for(qty in data[dropMenu][classes]["students"][student]["sprints"]){
      if(isEmpty(data[dropMenu][classes]["students"][student]["active"]) === true){
        if(data[dropMenu][classes]["students"][student]["sprints"][qty]["score"]["hse"] > 839 && data[dropMenu][classes]["students"][student]["sprints"][qty]["score"]["tech"] > 1259){
          for (sprint in data[dropMenu][classes]["ratings"]){
            var sprint = data[dropMenu][classes]["ratings"].length;
          }
          developer += 1;
        }else {
          developerNoMedia += 1;
          media = developer / sprint;
          var percent = developer / (developer + developerNoMedia) * 100;
        }
      }
    }

print.innerHTML = parseInt(media) + " alunas superaram a média do total de notas por sprint, que representa " + parseInt(percent) +" % do total de alunas.";
meet.appendChild(print);
}
}

// Calculo de NPS
classes.addEventListener("change", npsCalcule);
function npsCalcule(){
  var nps = document.getElementById("nps");
  var print = document.createElement("li");
  var dropMenu = document.getElementById("dropMenu").value;
  var classes = document.getElementById("classes").value;
  var sumPromoter = 0;
  var sumDetractor = 0;
  var result = 0;
  var npsResult = 0;
  nps.innerHTML = "";
  for(sprint in data[dropMenu][classes]["ratings"]){
    var promoter = data[dropMenu][classes]["ratings"][sprint]["nps"]["promoters"];
    var detractor= data[dropMenu][classes]["ratings"][sprint]["nps"]["detractors"];
    var passive = data[dropMenu][classes]["ratings"][sprint]["nps"]["detractors"];
    var sprintQuantity = data[dropMenu][classes]["ratings"].length;
    sumPromoter += promoter;
    sumDetractor += detractor;
    result = sumPromoter - sumDetractor;
    npsResult   = result / sprintQuantity;
    var prom = promoter / sprintQuantity;
    var detr = detractor / sprintQuantity;
    var pass = passive / sprintQuantity;
    print.innerHTML ="O NPS acumulado é " + parseInt(npsResult) + "%, <br/>" + "Promoter: " + prom +"%, <br/>" + "Detractor: " + detr + "%, <br/>" + "Passive: " + pass + "%;"
    nps.appendChild(print);
  }
}

// perfil estudantes
perfil.addEventListener("click", carregaPerfil)
function carregaPerfil(){
  var dropMenu = document.getElementById("dropMenu").value;
  var classes = document.getElementById("classes").value;
  var perfilProgramadoras = document.getElementById("perfil-programadoras");
  perfilProgramadoras.innerHTML = "";
  for(i in data[dropMenu][classes]["students"]){
    (data[dropMenu][classes]["students"][i]["photo"]);
    (data[dropMenu][classes]["students"][i]["name"]);
    (data[dropMenu][classes]["students"][i]["active"]);
    var img = document.createElement("img");
    img.src = data[sede][turma]["students"][i]["photo"];
    perfilProgramadoras.appendChild(img);
    var name = document.createElement("nome");
    nome.innerHTML = data[sede][turma]["students"][i]["name"];
    perfilProgramadoras.appendChild(nome);
    var ativa = document.createElement("presente");
    ativa.innerHTML = data[sede][turma]["students"][i]["active"];
    perfilProgramadoras.appendChild(ativa);
  }
};
