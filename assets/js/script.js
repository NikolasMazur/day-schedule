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

// Saves text to local storage
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

// Loads local storage
var loadEvents = function (elementId) {
  
    elementId.forEach((element) => {
        console.log(element);
        let text = localStorage.getItem(parseInt(element.time));
        console.log(text);
        if (text) {
        element.text.val(text);
        }
    });
};

// Fetches local storage items
var fetchEvents = function () {
    var array = [];
    $("textarea").each(function (index, elem) {
        array.push({
         time: $(elem).attr("id"),
         text: $(elem),
     });
    });
    loadEvents(array);
};


fetchEvents();