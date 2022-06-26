//current minute is calcuated to know update row colors(past,present,future) after the remaining
//until next hour 
var myCurrentMinute = parseInt(moment().local().format("mm"));


bussinesHours(9,18);
var rowAll = document.querySelectorAll(".row");
var saveBtns = document.querySelectorAll(".saveBtn");

//
dateRowTimeUpdater();
timeChecker();
    
//saveButtons has been collected to link them to an event listener click so that they will
//store the values in the textbox inside the local stoarge.
saveBtns.forEach(function(saveBtn){ 
        saveBtn.addEventListener("click",function(e){
            if(localStorage.getItem(saveBtn.parentNode.children[0].innerHTML)){
               localStorage.setItem(saveBtn.parentNode.children[0].innerHTML,{})}

            localStorage.setItem(saveBtn.parentNode.children[0].innerHTML,saveBtn.parentNode.children[1].value);
            saveBtn.parentNode.children[1].value;
        })
        })


//this function gets start hour and finish hour(does not create a time slot for it)
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

//this function updates date and row colors(past,present,future) as per the current hour
function dateRowTimeUpdater(){
    var CurrentDate = moment().local().format("dddd, MMMM Do");
    var myCurrentDate = document.querySelector("#currentDay");
    myCurrentDate.innerHTML = CurrentDate;
    myCurrentHour = parseInt(moment().local().format("HH"));
    CurrentDate = moment().local().format("dddd, MMMM Do");
    rowAll.forEach((row)=>{
        if(row.firstChild.innerHTML < myCurrentHour){
            row.children[1].classList.add("past")}
            else if(row.firstChild.innerHTML == myCurrentHour){
                row.children[1].classList.add("present")}
                else {row.children[1].classList.add("future")}
            })
        }

//this is a function that trigges dateRowTimeUpdater first time after the end of the current hour
//then keeps invoking the dateRowTimeUpdater function every hour to update  date and row color as 
//per the new time
function timeChecker(){
        var remainingMinutes = 60-myCurrentMinute;
        setTimeout(dateRowTimeUpdater,remainingMinutes*60*1000);
        setTimeout(function(){setInterval(dateRowTimeUpdater,60*60*1000)},remainingMinutes*60*1000);
        }

    


