$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var noun1Input = $("input#noun1").val();
    var pastTenseVerb1 = $("input#pastTenseVerb1").val();
    var pastTenseVerb2 = $("input#pastTenseVerb2").val();
    var typeOfPerson = $("input#typeOfPerson").val();
    var pastTenseVerb3 = $("input#pastTenseVerb3").val();
    var place = $("input#place").val();
    var emotion = $("input#emotion").val();

    $(".noun1").text(noun1Input);
    $(".pastTenseVerb1").text(pastTenseVerb1);
    $(".pastTenseVerb2").text(pastTenseVerb2);
    $(".typeOfPerson").text(typeOfPerson);
    $(".pastTenseVerb3").text(pastTenseVerb3);
    $(".place").text(place);
    $(".emotion").text(emotion);

    $("#story").show();

    event.preventDefault();
  });
});