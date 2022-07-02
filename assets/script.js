//current minute is calcuated to know update row colors(past,present,future) after the remaining
//until next hour 
var myCurrentMinute = parseInt(moment().local().format("mm"));
bussinesHours(9, 18);
var rowAll = $(".row");
var saveBtns = $(".saveBtn");

//
dateRowTimeUpdater();
timeChecker();

//saveButtons has been collected to link them to an event listener click so that they will
//store the values in the textbox inside the local stoarge.

$('section').click(function (e) {
  var target = $(e.target);
  if (target.hasClass("saveBtn")) {
    var par = $(e.target).parent();

    //if key found
    if (localStorage.getItem($(par.children()[0]).text())) {
      localStorage.setItem($(par.children()[0]).text(), {})
      localStorage.setItem($(par.children()[0]).text(), par.children()[1].value);

    }
    //if no key
    else {
      localStorage.setItem($(par.children()[0]).text(), par.children()[1].value);
    }
  }
});


//this function gets start hour and finish hour(does not create a time slot for it)
function bussinesHours(fromHour, toHour) {
  var bussinesHoursCount = toHour - fromHour;
  var bussinesHoursArray = [];
  for (var index = 0; index < bussinesHoursCount; index++) {
    bussinesHoursArray[index] = fromHour + index;
    var mySection = $("<section></section>");
    $(".container").append(mySection);

    var row = $("<div></div>");
    row.addClass("row");
    var column1 = $("<div></div>");
    column1.addClass("col-1 hour");
    var column2 = $("<textarea></textarea>");
    column2.addClass("col-10 time-block past");
    var column3 = $("<button></button>");
    column3.html("save");
    column3.addClass("col-1 saveBtn");
    mySection.append(row);
    row.append(column1);
    row.append(column2);
    row.append(column3);
    column1.html(fromHour + index);

    if (localStorage.getItem(column1.html()) != undefined) {
      column2.val(localStorage.getItem(column1.html()));
    }
    else { }
  }

}

//this function updates date and row colors(past,present,future) as per the current hour
function dateRowTimeUpdater() {
  var CurrentDate = moment().local().format("dddd, MMMM Do");
  var myCurrentDate = $("#currentDay");
  myCurrentDate.html(CurrentDate);
  myCurrentHour = parseInt(moment().local().format("HH"));
  CurrentDate = moment().local().format("dddd, MMMM Do");



  for (var index = 0; index < $(".container section").length; index++) {
    $("section")[index].children[0].children[1].classList.remove("past");
    $("section")[index].children[0].children[1].classList.remove("present");
    $("section")[index].children[0].children[1].classList.remove("future");

    if (parseInt($("section")[index].children[0].children[0].innerHTML) < myCurrentHour) {
      $("section")[index].children[0].children[1].classList.add("past");
    }

    else if (parseInt($("section")[index].children[0].children[0].innerHTML) == myCurrentHour) {
      $("section")[index].children[0].children[1].classList.add("present");
    }
    else {
      $("section")[index].children[0].children[1].classList.add("future");
    }

  }
}



//this is a function that trigges dateRowTimeUpdater first time after the end of the current hour
//then keeps invoking the dateRowTimeUpdater function every hour to update  date and row color as 
//per the new time
function timeChecker() {
  var remainingMinutes = 60 - myCurrentMinute;
  setTimeout(dateRowTimeUpdater, remainingMinutes*1000*60);

  //this timer starts after the first timer checks, this timer checks time every hour 
  //to change the row colors according to past, present or future
  setTimeout(setInterval(dateRowTimeUpdater, 1000 * 60 * 60), 60*60*1000+remainingMinutes*1000*60);
}
