$(document).ready(function() {
  $("form#height").submit(function(event){
    event.preventDefault();
    var heightVar = parseFloat($("input#heightSubmit").val());
    if (heightVar < 5) {
      $(".little").addClass("highlight");
      $(".big").removeClass("highlight");
    } else if (heightVar > 5) {
      $(".big").addClass("highlight");
      $(".little").removeClass("highlight");
    } else {
      alert("Please enter a number");
    }
  })
})
