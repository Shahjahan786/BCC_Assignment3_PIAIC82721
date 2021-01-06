var colors = ["Red", "Blue", "Green"];
	document.write(colors);

	var color = prompt("Enter color name to add at the begining: ");
	colors.unshift(color);
	document.write("<br>"+colors);

	var color = prompt("Enter color name to add at the end ");
	colors.push(color);
	document.write("<br>"+colors);

	colors.push("Brown");
	colors.push("Black");
	document.write("<br>"+colors);
	
	colors.shift();
	document.write("<br>"+colors);

	colors.pop();
	document.write("<br>"+colors);

	var color = prompt("Enter color name: ");
	var index = parseInt(prompt("Index: ") );
	colors.splice(index, 0, color);
	document.write("<br>"+colors);

	var index = parseInt(prompt("Index: ") );
	var count = parseInt(prompt("No. of Colors: ") );
	colors.splice(index, count);
	document.write("<br>"+colors);