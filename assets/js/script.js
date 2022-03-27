var currentHour = moment().hour()

$("#currentDay").text(moment().format("MMMM Do YYYY A"));

// Colour codes each blocked hour according to time state
$("textarea").each(function () {
    var $this = $(this);
    var id = parseInt($this.attr("id"));
  
    if (id < currentHour) {
      $(this).addClass("past");
    }
    if (id > currentHour) {
      $(this).addClass("future");
    }
    if (id === currentHour) {
      $(this).addClass("present");
    }
  });
  
  $("button.saveBtn").click(function (event, loadEvents) {
    event.preventDefault();
    // Local variables
    var $element = $(this).siblings("textarea");
    var time = $element.attr("id");
    console.log(time);
    var text = $element.val().trim();
    console.log(text);
  
    if (time && text !== "") {
      console.log(time, text);
      localStorage.setItem(time, text);
    }
  });