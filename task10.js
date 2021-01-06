var a = [20,53,78,4,91,12];

for(i=0; i<a.length; i++){
	for(j=i+1; j<a.length; j++){
		if(a[j] < a[i]){
			var temp = a[i];
			a[i] = a[j];
			a[j] = temp;
		}
	}
}

document.write(a);