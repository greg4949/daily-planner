
$(function () {
  var calendarDate = $('#currentDay');
  var currentDate = dayjs().format('MMMM d, YYYY');  
  var timeBlockArr=['09','10','11','12','13','14','15','16','17']
  var currentHour = dayjs().format('HH');
  var currentHourText = 'hour-'+currentHour;
  var savedEventArr = JSON.parse(localStorage.getItem('savedResult')) || [];

  //set date in headerat top of calendar to current date
  calendarDate.text(currentDate);

  //loop through each time block element and set color based on if time block hour is before, equal to or after current hour
  for (var i=0; i < timeBlockArr.length; i++){

    var block = $('#hour-'+timeBlockArr[i]);
    var blockHourText = block.attr('id');
    var blockTextArea = block.children('textarea');
    var blockId = block.attr('id');
    var blockPersist = localStorage.getItem(block.attr('id'));
  0
    //set time block events to existing value in local storage so that saved events persist when page is refreshed.
    $(blockTextArea).val(blockPersist);

    //compare hour of time block to current hour to determin if past, present, or future and set background color accordingly
    if(blockHourText<currentHourText){
        block = block.attr('class','row time-block past')
    } else if(blockHourText===currentHourText){
        block = block.attr('class','row time-block present')
    } else if (blockHourText>currentHourText){
        block = block.attr('class','row time-block future')
    }   
  }
  $("button").click(function(){
    
    var timeBlock = $(this).parent().attr('id');
    var descrip = $(this).parent().children('textarea').val();    
    
    localStorage.setItem(timeBlock,descrip);

  
   
  })

});
