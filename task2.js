var names = ["Michael", "John", "Tony"];
	var marksArr = [320, 230, 480];

	for (var i = 0; i <=  names.length - 1; i++) {
		var name  = names[i];
		var marks = marksArr[i];

		var perc  = marks / 500 * 100;

		var msg = "Score of "+ name +" is " + marks + ". Percentage: " + perc +"%<br>";
		document.write(msg);

	}