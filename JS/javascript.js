document.getElementById('openbtn').addEventListener('click',function(){
    document.getElementById('sidebar').classList.toggle('open-sidebar')
})
function ChangeAllTexts(pL, tI, gL, mD, cI){
    $("#changeablePrompt").text(pL[tI]);
    mD.innerHTML = "";
    $("#changeableAnswer").append(gL[tI]);

    // Card Info
    $("#scoreContexto").text(cI[tI][0][0]);
    $("#notesContexto").text(cI[tI][0][1]);
    $("#scoreModelo").text(cI[tI][1][0]);
    $("#notesModelo").text(cI[tI][1][1]);
    $("#scoreComando").text(cI[tI][2][0]);
    $("#notesComando").text(cI[tI][2][1]);
    $("#scoreConteudo").text(cI[tI][3][0]);
    $("#notesConteudo").text(cI[tI][3][1]);
    $("#scoreResposta").text(cI[tI][4][0]);
    $("#notesResposta").text(cI[tI][4][1]);
  }

  window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 500)
})