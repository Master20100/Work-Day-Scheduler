# Work Day Scheduler Starter Code
The project consists of 3 functions
a)bussinesHours:
this function takes 2 parameters, start hour and finish hour(exclusive), for example from 9 to 11 will create 2 bootstrap rows, one for 9 O'clock and other for 10 O'clock. each row will include 3 columns, first will be displaying the hour for example 9 O'clock, the second will be text entry for the task and the third will be a save button. So, this function creates most of the layout for the page. 
This function checks local storage for matching keys(hours) and displays values in the text entry field.
Please refer to the savebutton click event below as well.


b)dateRowTimeUpdater:
this function gets the current date via moment api then displays it.
Also,it gets current hour then compares this hour to the hour displayed on each row to see if that row is past or present or future and accordingly, will add the appropriate class from css to change color grey for past, red for present and green for future.


c)timechecker:
this function gets how many minutes left until the next hour(remaining minutes) then triggers 2 settimeouts
first one:runs dateRowTimeUpdater for only 1 time after the minutes left till the next hour
second one: triggers setInterval as well after the remaining minutes till next hour, this setInterval keeps updating time and date every 1 hour by running dateRowTimeUpdater every 1 hour.


-all save buttons have been linked to an event listener click so that when a save button is clicked, the local storage would store the time of the row(hour) as the key, and the text entered in the same row as the value. If the key does not exist, a new key will be added. However, if a key exists, its value will be overridden by the next text in the text area.



Project github link
https://github.com/Master20100/Work-Day-Scheduler

Project live link
https://master20100.github.io/Work-Day-Scheduler/

screenshot of the assignment
Please find sceenshot of the assignment in the same directory
