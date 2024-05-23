$(document).ready(function () {
  // Handler for the toggle button
  $(".togglefade").click(function () {
    $("#toggletext").fadeToggle("slow");
  });

  // Handler for the append button
  $(".appendBtn").click(function () {
    let textToAppend = $(".text").val();
    $(".appendHere").append(textToAppend);
  });

  // Handler for changing background color
  $(".addBg").click(function () {
    let bgColor = $("input[name='color']:checked").val();
    $(".changing").css("background-color", bgColor);
  });
  //Handler for giving a class to the whole page
  $(".changeFont").click(function () {
    $("*").toggleClass("differentFont");
  });

  //Handler for hiding/showing a text
  $(".hideButton").click(function () {
    $(".hide").toggle();
    console.log($(this).html());
    if ($(this).html() === "Hide the text") {
      $(this).html("Show the text");
    } else {
      $(this).html("Hide the text");
    }
  });
});
