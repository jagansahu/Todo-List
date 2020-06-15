//adds todos
$( "input[type='text']" ).keypress(function(event) {
	if (event.which === 13) {
		var textsofar = $(this).val();
		$(this).val("");
		$('ul').append("<li><span><i class='fas fa-trash'></i></span>"+ " " + textsofar +"</li>");
	}
});

//check off todos by clicking
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

//removes todos
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeToggle(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

//toggles add new todos
$(".fa-plus").on("click", function() {
	$("input").fadeToggle();
});

//clears list
$("#reset").on("click", function() {
	$("li").remove();
})
