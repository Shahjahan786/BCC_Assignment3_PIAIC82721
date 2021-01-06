var arr = [3,'a','a','a', 2,3,'a',3,'a',2,4,9, 3];
arr2 = [];
	for(el of arr){
		if(arr2.indexOf(el) == -1){
			arr2.push(el);
		}
		}

document.write(arr2);

