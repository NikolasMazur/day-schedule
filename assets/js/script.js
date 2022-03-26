var currentHour = moment().hour()

$("#currentDay").text(moment().format("MMMM Do YYYY A"));

// time blocks COLOR CODED to indicate past, present, or future
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
    