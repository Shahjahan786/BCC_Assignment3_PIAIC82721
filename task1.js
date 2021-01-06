	var qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
	var html = "<h1>Qualification</h1><br>"

	for (var i = 0; i <= qualification.length - 1; i++) {
		html += (i+1) +") " + qualification[i] + " <br>";
	}

	document.write(html);
