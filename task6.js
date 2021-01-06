var aCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];
var o = ["st", "nd", "rd", "th"];
var html = "";
for(var index = 0; index < aCities.length; index++){
	var num = index + 1;
	html += num + o[index] + " choice is "+ aCities[index] + "<br/>";
	
}

document.write(html);

