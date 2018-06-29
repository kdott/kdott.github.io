$(document).ready(function(){
	$('#submit').click(function(evt) {
		// An event listener such that when the submit button is clicked, it results to a submit action


		var A, B;
		B= $('#inputWidth').val();
		// This obtains the numerical value of width inputed
		A = $('#inputHeight').val();
		// This obtains the numerical value of height inputed
		evt.preventDefault();
		// This event does Prevent refreshing from deleting grid as it's displayed.


		makeGrid(B, A);
	});





function makeGrid(X, Y) {
		// The makeGrid function takes the parameters, height, and width.

	var pixelCanvas, grid;
		// Variables are set to formulate the grid in the pixelCanvas.
	pixelCanvas = $('#pixelCanvas');


	for(var i = 0; i < Y; i++) {
		grid += "<tr>";
		 //  Outer loop is defined by height(Y).


		for (var j = 0; j < X; j++) {
			grid += "<td></td>";
		// Inner loop is defined by width(X).


		}
		grid += "</tr>";
	}
	pixelCanvas.html(grid);
	pixelCanvas.css("background-color","#e0ffff");
		// Default background color of the the pixel canvas is set to lightcyan
	
};



	$('#pixelCanvas').click(function(evt) {
		var color = $('#colorPicker').val();
		 // An event listener is set to comprehend the input color each time, in case of alteration.

		$(evt.target).css('background-color', color);
		// Event listener to Set the cell's background to the input color.

	});
});


