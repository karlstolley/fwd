(function($) {

  // Helper for toggling label text
  $.fn.toggleLabel = function(beforetxt, aftertxt) {
    var txt = beforetxt;
    if (this.html()==txt) {
      txt = aftertxt;
    }
    this.html(txt);
  };

  // Utility class for JavaScript detection in CSS
  $('html').addClass('hasjs');


  // Highlight the current and next weeks

  // Get the current time as a Unix timestamp
  var currentTime = new Date();
  currentTime = Math.round(currentTime.getTime() / 1000);

  // Arrays to make reader-friendly days and months
  var namedDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday', 'Saturday'];
  var namedMonths = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  // Create an array to hold the future weeks
  var futureWeeks = [];

  // Create a variable to hold HTML for the toggle label
  var toggledLabel;



  // Go through each week to build the array of future weeks
  $('.week').each(function() {
      var weekTime = new Date($(this).attr('data-expires'));
      weekTime = Math.round(weekTime.getTime() / 1000);
      if ((weekTime - currentTime) > 0) {
        futureWeeks.push($(this));
      }
  });

  // Until the semester is over, do nice things with the calendar
  if (futureWeeks.length > 0) {

      // Put an .extended class on all weeks
      $('.week').each(function() {
          $(this).addClass('extended');
      });

    // Show the current week
    futureWeeks[0].addClass('preview is-current').removeClass('extended').attr('id','current-week');

    // If there is another week beyond the current one, show it as well
    if (futureWeeks[1]!==undefined) {
      futureWeeks[1].addClass('preview is-next').removeClass('extended');
      var dueDate = new Date(futureWeeks[0].attr('data-expires'));
      $('#current-week .assigned h3').html('Assigned Work <small>Due ' + namedDays[dueDate.getDay()] + ' ' + namedMonths[dueDate.getMonth()] + ' ' + dueDate.getDate() +'</small>');
    }

    // Watch for hashes pointing to #current-week or #week-XX
    if (window.location.hash.indexOf('week') === -1) {

      toggledLabel = ' <small class="button"><span class="showing">Current</span> Weeks <a class="toggle" href="#current-week">Show All</a></small>';

    }
    else {

      $('.primary').addClass('is-visible');
      toggledLabel = ' <small class="button"><span class="showing">All</span> Weeks <a class="toggle" href="#current-week">Show Current</a></small>';

    }

  }

  // Toggles for showing full calendar
  // Append a show link (.button)
  $('.label').append(toggledLabel);

  // Toggle to actually show/hide content
  $('.button').on('click', function(e) {
    $(this).toggleClass('is-active');
    $(this).find('.showing').toggleLabel('All','Current');
    $(this).find('.toggle').toggleLabel('Show All', 'Show Only Current');
    $(this).closest('.primary').toggleClass('is-visible');
  });

})(jQuery);
