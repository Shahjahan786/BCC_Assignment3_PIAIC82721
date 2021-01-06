var a = ["cake", "apple pie", "cookie", "chips", "patties"];
var input = prompt("Welcome to ABC Bakery, what yoy want to order sir/ma\'am?");
var index = a.indexOf(input);

if(index >= 0){
	document.write(input + " is <b>available</b> at index "+ index + " in our backery");
}else{
	document.write("We are sorry. "+ input + "is <b>not available</b> in our backery");
}