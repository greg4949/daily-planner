
var calendarDate = $('#currentDay');
var currentDate = dayjs().format('MMMM d, YYYY');
calendarDate.text(currentDate);




// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(function () {
  var calendarDate = $('#currentDay');
  var currentDate = dayjs().format('MMMM d, YYYY');  
  var timeBlockArr=['09','10','11','12','13','14','15','16','17']
  var currentHour = dayjs().format('HH');
  var currentHourText = 'hour-'+currentHour;

  //set date at top of calendar to current date
  calendarDate.text(currentDate);

  //loop through each time block element and set color based on if time block hour is before, equal to or after current hour
  for (var i=0; i < timeBlockArr.length; i++){

    var block = $('#hour-'+timeBlockArr[i]);
    var blockHourText = block.attr('id');


    if(blockHourText<currentHourText){
        block = block.attr('class','row time-block past')
    } else if(blockHourText===currentHourText){
        block = block.attr('class','row time-block present')
    } else if (blockHourText>currentHourText){
        block = block.attr('class','row time-block future')
    }
}



  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
