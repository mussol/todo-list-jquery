//Check off specific todos by clicking
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

// Click on X to delete todos
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(function() {
		//to remove the li element only once the fadeOut is finished, we add the method within the callback function
		$(this).remove;
	});
	//jQuery method to stop the event from bubbling up to other elements (i.e. a click to 'span' means a click to 'li', 'div', 'body', 'html' where any other eventListeners would fire)
	event.stopPropagation();
});

//Add new todos
$("input[type='text']").keypress(function(event) {
	if (event.which === 13) {
		//making sure the text is not empty
		if($(this).val() !== "") {
			//grabbing new todo text from user input
			var todoText = $(this).val();
			//clear out the input field
			$(this).val("");
			//add a new li with the user input
			$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span>" + todoText + "</li>");
		}
	}
});

$(".fa-plus").click(function() {
	$("input[type='text']").fadeToggle();
});