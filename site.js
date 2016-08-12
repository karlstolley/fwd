$(function() {

  // Helper for toggling label text
  $.fn.toggleLabel = function(beforetxt, aftertxt) {
    var txt = beforetxt;
    if (this.html()==txt) {
      txt = aftertxt;
    }
    this.html(txt);
  }

  // Utility class for JavaScript detection in CSS
  $('html').addClass('hasjs');


  // Highlight the current and next weeks

  // Get the current time as a Unix timestamp
  currentTime = new Date();
  currentTime = Math.round(currentTime.getTime() / 1000);

  // Arrays to make reader-friendly days and months
  namedDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday', 'Saturday'];
  namedMonths = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  // Create an array to hold the future weeks
  var futureWeeks = []

  // Go through each week to build the array of future weeks
  $('.week').each(function() {
      weekTime = new Date($(this).attr('data-expires'));
      weekTime = Math.round(weekTime.getTime() / 1000);
      if ((weekTime - currentTime) > 0) {
        futureWeeks.push($(this));
      }
  });

  // Until the semester is over, do nice things with the calendar
  if (futureWeeks.length > 0) {

    // Put an .extended class on future weeks
    $('.week').each(function() {
        $(this).addClass('extended');
    });

    // Show the current week
    futureWeeks[0].addClass('preview is-current').removeClass('extended').attr('id','current-week');

    // Provide a list of now-overdue deliverables for students
    //$('#current-week .agenda h4').html('Overdue Deliverables');

    // If there is another week beyond the current one, show it as well
    if (futureWeeks[1]!=undefined) {
      futureWeeks[1].addClass('preview is-next').removeClass('extended');
      // Use the expiration date to put a due-date on assigned work
      weekDate = $('.is-next h3 small').html().split(" ");
      var dueDate = new Date(futureWeeks[0].attr('data-expires'))
      $('#current-week .assigned h4').html('Assigned Work <small>Due ' + namedDays[dueDate.getDay()] + ' ' + namedMonths[dueDate.getMonth()] + ' ' + dueDate.getDate() +'</small>');
    }

  // Toggles for showing full calendar, projects, and policies
  // Append a show link (.button)
  $('#calendar > h2').attr('id','calendar-toggle').parent('#calendar').find('.content').append('<a class="button" href="#current-week"><span>Show all</span> calendar weeks</a>');
  }
  $('#projects > h2').attr('id','projects-toggle').parent('#projects').find('.content').append('<a class="button" href="#projects"><span>Show all</span> projects</a>');

  $('#policies > h2').attr('id','policies-toggle').parent('#policies').find('.content').append('<a class="button" href="#policies"><span>Show all</span> policies</a>');

  // Toggle to actually show/hide content
  $('.button').click(function(e) {
    $(this).toggleClass('is-active');
    $(this).find('span').toggleLabel('Show all','Close extended view of');
    $(this).closest('.content').toggleClass('is-visible');
  });

});
