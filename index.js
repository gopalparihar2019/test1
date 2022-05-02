// write js code here corresponding to index.html
// You should add submit event on the form
//localStorage.setItem("schedule", stringify)
document.querySelector("#masaiForm").addEventListener("submit",teamSubmit);
var teamArr=JSON.parse(localStorage.getItem("schedule")) || [];
function teamSubmit(){
    event.preventDefault();
    var teamobj={
        matchnumber:document.querySelector("#matchNum").value,
        teamA:masaiForm.teamA.value,
        teamB:masaiForm.teamB.value,
        dateofmatch:masaiForm.date.value,
        venue:masaiForm.venue.value
    };
    teamArr.push(teamobj);
    console.log(teamArr);
    localStorage.setItem("schedule",JSON.stringify(teamArr));
    window.location.href="matches.html";
}