// write js code here corresponding to favourites.html



var teamArr=JSON.parse(localStorage.getItem("favourites"));
displayData(teamArr);
var favouritesArr=JSON.parse(localStorage.getItem("favourites")) || [];

function displayData(data){
    document.querySelector("tbody").innerHTML="";
    data.forEach(function(elem) {
        var tr = document.createElement("tr");
        
        var  td1 =document.createElement("td")
        td1.innerText = elem.matchnumber;

        var  td2 =document.createElement("td")
        td2.innerText = elem.teamA;

        var  td3 =document.createElement("td")
        td3.innerText = elem.teamB;

        var  td4 =document.createElement("td")
        td4.innerText = elem.dateofmatch;

        var  td5 =document.createElement("td")
        td5.innerText = elem.venue;

        var  td6 =document.createElement("td")
        td6.innerText = "Delete";
        td6.style.color="blue";
        td6.style.cursor ="pointer";
        td6.addEventListener("click", function(e){
            removeele(elem,e.target);
            
        });
           
        tr.append(td1,td2,td3, td4, td5, td6);
        document.querySelector("tbody").append(tr);
    });

    function removeele(elem,index){
        console.log(elem, index);
        teamArr.splice(index,1);
        localStorage.setItem("favourites",JSON.stringify(teamArr));
        window.location.reload();
    }

}