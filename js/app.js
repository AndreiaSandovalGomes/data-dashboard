
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

    print.innerHTML = "O total de alunas ativas é " + ativo + ". E a porcentagem de alunas inativas é " + parseInt(percent) + "%.";
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

        print.innerHTML ="Pontuação média dos Mentores: " + media.toFixed(2);
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
        print.innerHTML ="Pontuação média dos Jedi: " + media.toFixed(2);
}
        jediRating.appendChild(print);

      }
    }

// criar seletor sprints softskills
    // classes.addEventListener("change", sprintsHse);
    // function sprintsHse(){
    //   var dropMenu = document.getElementById("dropMenu").value;
    //   var classes = document.getElementById("classes").value;
    //   var hse = document.getElementById("hse");
    //   hse.innerHTML = "";
    //   var local = document.createElement("option");
    //   local.value = "none";
    //   local.innerHTML = "Escolha o sprint";
    //   hse.appendChild(local);
    //   for(student in data[dropMenu][classes]["students"]){
    //     for(sprint in [dropMenu][classes]["students"][student]["sprints"]){
    //       var newOption = document.createElement("option");
    //       newOption.value = sprint;
    //       newOption.innerHTML = sprint;
    //       }
    //    hse.appendChild(newOption);
    //   }
    // }
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
          if(isEmpty(data[dropMenu][classes]["students"][student]["sprints"][month]["score"]["hse"]) > 839){
            var sprint = data[dropMenu][classes]["students"][student]["sprints"].length;
            var developerNumbers = data[dropMenu][classes]["ratings"].length;
                  developer = developer + 1;
                }else {
                   developerNoMedia = developerNoMedia + 1;
                 }
                 var percent = developer / developerNumbers * 100;
                 var mediaSprint = developer / (developer + developerNoMedia);

            print.innerHTML = "total de alunas com nota superior a 70% = " + developer + ", representando" + parseInt(percent) + " %.";
    }
hse.appendChild(print);
}

}

// // A porcentage de alunas que excedem (1200)  media e por sprints TECHSKILLS
// classes.addEventListener("change", softKills);
// function softKills(){
//   var hse = document.getElementById("hse");
//   var print = document.createElement("li");
//   var dropMenu = document.getElementById("dropMenu").value;
//   var classes = document.getElementById("classes").value;
//   var sum = 0;
//   var developer = 0;
//   var developerNoMedia = 0;
//   hse.innerHTML = "";
//   for (student in data[dropMenu][classes]["students"]){
//     for(month in data[dropMenu][classes]["students"][student]["sprints"]){
//       if(data[dropMenu][classes]["students"][student]["sprints"][month]["score"]["hse"] > 839){
//         var sprint = data[dropMenu][classes]["students"][student]["sprints"].length;
//         var developerNumbers = data[dropMenu][classes]["students"].length;
//               developer += 1;
//             }else {
//                developerNoMedia += 1;
//              }
//              var percent = developer / (developer + developerNoMedia) * 100;
//
//         print.innerHTML = "total de alunas com nota superior a 70% = " + developer + ", representando" + parseInt(percent) + " %.";
// }
// hse.appendChild(print);
// }
//
// }

// / A porcentagem de alunas satisfeitas com a experiencia da Laboratoria
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
        print.innerHTML = "Percentual médio de alunas satisfeitas: " + media.toFixed(2) + " %.";
}
        exceed.appendChild(print);

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



// Quantidade média de alunas que superaram 70% de SOFTSKILLS e TECHSKILLS
    classes.addEventListener("change", meetNote);
    function meetNote (){
      var meet = document.getElementById("meet");
      var print = document.createElement("li");
      var dropMenu = document.getElementById("dropMenu").value;
      var classes = document.getElementById("classes").value;
      var developer = 0;
      var developerNoMedia = 0;
      var media = developer + developerNoMedia;
      meet.innerHTML = "";
      for (student in data[dropMenu][classes]["students"]){
        for(qty in data[dropMenu][classes]["students"][student]["sprints"]){
          if(isEmpty(data[dropMenu][classes]["students"][student]["active"]) === true){
            if(data[dropMenu][classes]["students"][student]["sprints"][qty]["score"]["hse"] > 839 && data[dropMenu][classes]["students"][student]["sprints"][qty]["score"]["tech"] > 1259){
              for (sprint in data[dropMenu][classes]["rating"]){
                console.log(sprint in data[dropMenu][classes]["rating"]);
              var sprint = data[dropMenu][classes]["rating"].length;
              }
              developer += 1;
              console.log(developer);
              }else {
              developerNoMedia += 1;
              var media = developer / sprint;
              // console.log(media);
              var percent = developer / media  * 100;

              }
            }

    }
    print.innerHTML = media + " superaram a média do total de notas por sprint, que representam " + parseInt(percent) +" %.";
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
            var sprintQuantity = data[dropMenu][classes]["ratings"].length;
            sumPromoter += promoter;
            sumDetractor += detractor;
            result = sumPromoter - sumDetractor;
            npsResult   = result / sprintQuantity;
            print.innerHTML ="NPS médio: " + parseInt(npsResult) + "%.";

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

        // Create the chart

// pieSatisfaction [
//   {name: 'satisfaction', y: 30},
//   {name: 'insatisfaction', y:70},
//
// ]
// Highcharts.chart('container', {
//   chart: {
//    type: 'pie'
//   },
//   title: {
//     text: 'Porcentagem de satisfacao das alunas'
//   },
//   subtitle: {
//     text: 'Click the slices to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
//   },
//   plotOptions: {
//     series: {
//       dataLabels: {
//         enabled: true,
//         format: '{point.name}: {point.y:.1f}%'
//       }
//     }
//   },
//
//   tooltip: {
//     headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
//     pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
//   },
//
//   "series": [
//     {
//       "name": "Browsers",
//       "colorByPoint": true,
//       "data": pieSatisfaction
//
//   }
// });
