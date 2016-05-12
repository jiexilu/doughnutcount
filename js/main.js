function Convert() {
	var calories_today = document.getElementById("calories_today").value;
	var calories_in_doughnut = 195;

	var num_doughnuts = calories_today/calories_in_doughnut;
	alert("You burned " + num_doughnuts + " doughnuts today!");
}
