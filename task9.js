var a = [24, 53, 78, 91, 12];

var largest = a[0];

for(var i=0; i<a.length; i++){
	if(a[i] > largest){
		largest = a[i];
	}
}

document.write("Array items: "+a+"<br/>Largest number is:" + largest);