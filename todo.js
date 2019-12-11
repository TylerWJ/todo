			//Check Off Specific Todos By Clicking
$("ul").on("click", "li", function(){
	/*
	you can only add listeners using jQuery on the elements that exist when 
	the code is run the first time and when the code is run the first time
	we dont not have all the click listeners, we only have three, so if we
	add a click listener to the li's then it will only be added to the three.
	So, we add a listener to an element that exists when the code first run
	and the "li" argument says add the click listener to the li's in the ul 
	*/
	//this.classList.toggle("liClicked");
	$(this).toggleClass("liClicked")
});

			//Click on X to Delete Todo
//Event Bubbling - by clicking on the span, you are also clicking on the li, ul, div, and body
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(function(){ //the parent in this case is the li that contains the X
		$(this).remove();
	}); //the fadeout does not actually remove the element so you have to add remove(you dont want a lot of hidden elements),
	//However, you have to put the remove function in the fadeout function in order to remove the
	//element after the fadeout occurs
	event.stopPropagation(); //this gets rid of the event bubble - jQuery method 
});

			//Add a New Todo
$("input[type='text']").keypress(function(event){ //added type = text to be more specific
	if(event.which === 13){
		//grabbing new todo text from inpute
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>"); //this adds an element to the ul element

	}
});

$("#plus").click(function(){
	$("input[type='text']").fadeToggle();
})
