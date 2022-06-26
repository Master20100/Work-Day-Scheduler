var CurrentDate = moment().local().format("dddd, MMMM Do");
var myCurrentDate = document.querySelector("#currentDay");

var myCurrentMinute = parseInt(moment().local().format("mm"));


myCurrentDate.innerHTML = CurrentDate;
myCurrentHour = parseInt(moment().local().format("HH"));
bussinesHours(9,22);
var rowAll = document.querySelectorAll(".row");
var saveBtns = document.querySelectorAll(".saveBtn");

    
    
    dateRowTimeUpdater();
    timeChecker();
    
    saveBtns.forEach(function(saveBtn){ 
        saveBtn.addEventListener("click",function(e){
            if(localStorage.getItem(saveBtn.parentNode.children[0].innerHTML)){
               localStorage.setItem(saveBtn.parentNode.children[0].innerHTML,{})}

            localStorage.setItem(saveBtn.parentNode.children[0].innerHTML,saveBtn.parentNode.children[1].value);
            saveBtn.parentNode.children[1].value;
            // document.querySelector("#localstorageSave").innerHTML= "local storage saved";
            // alert("aaa");

        })
        })
    


function bussinesHours(fromHour,toHour){
    var container = document.querySelector(".container");
    var bussinesHoursCount = toHour - fromHour;
    var bussinesHoursArray = [];    
    for (var index = 0; index < bussinesHoursCount; index++) {
        bussinesHoursArray[index] = fromHour+index;
        var mySection = document.createElement("section");
        var row = document.createElement("div");
        row.classList.add("row");
        var column1 = document.createElement("div");
        column1.classList.add("col-1","hour");
        var column2 = document.createElement("textarea");
        column2.classList.add("col-10","time-block","past");
        var column3 = document.createElement("button");
        column3.innerHTML = "save";
        column3.classList.add("col-1","saveBtn");
        

        mySection.appendChild(row);
        container.appendChild(mySection);
        row.appendChild(column1);
        row.appendChild(column2);
        row.appendChild(column3);
        column1.innerHTML = fromHour+index;
        if(localStorage.getItem(column1.innerHTML) !== undefined){
            column2.value = localStorage.getItem(column1.innerHTML)}
}
}

function dateRowTimeUpdater(){
    CurrentDate = moment().local().format("dddd, MMMM Do");
    rowAll.forEach((row)=>{
        if(row.firstChild.innerHTML < myCurrentHour){
            row.children[1].classList.add("past")}
            else if(row.firstChild.innerHTML == myCurrentHour){
                row.children[1].classList.add("present")}
                else {row.children[1].classList.add("future")}
            })
        }
function timeChecker(){
        var remainingMinutes = 60-myCurrentMinute;
        setTimeout(dateRowTimeUpdater,remainingMinutes*60*1000);
        setTimeout(function(){setInterval(dateRowTimeUpdater,60*60*1000)},remainingMinutes*60*1000);
        setTimeout(function(){alert("hey")},10*60*1000);
        }

        $('#test').innerHTML = "minaaaa";


