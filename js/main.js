function Convert() {
	var calories_today = document.getElementById("calories_today").value;
	var calories_in_doughnut = 195;

	var num_doughnuts = Math.round(calories_today/calories_in_doughnut * 100) / 100;
	document.getElementById("doughnutCount").innerHTML = "You burned " + num_doughnuts + " doughnuts today!<br>";
	
	for (var i = 0; i < Math.round(num_doughnuts); i++) {
		document.getElementById("doughnutCount").innerHTML += ":doughnut: ";
	}
	emojify.run(document.getElementById("doughnutCount"));
}
