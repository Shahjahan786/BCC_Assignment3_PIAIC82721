var html = "";

var counting = [];
for(i=1; i<=15; i++){
	counting.push(i);
}

var revCounting = [];
for(i=10; i>=0; i--){
	revCounting.push(i);
}

var revCounting = [];
for(i=10; i>=0; i--){
	revCounting.push(i);
}

var even = [];
var odd = [];
var series = [];
for(i=0; i<=20; i++){
	if(i % 2 == 0){
		even.push(i);
		
		if(i != 0){
			series.push(i+"k");
			
		}
		
	}else{
		odd.push(i);
	}
	
	
}
var html = "";
html += "<br/>Counting: " + counting;
html += "<br/>Reverese Counting: " + revCounting;
html += "<br/>even: " + even;
html += "<br/>odd: " + odd;
html += "<br/>series: " + series;

document.write(html);




