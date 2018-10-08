module.exports = function getZerosCount(number, base) {
	var n = 2;
	var i = 0;
	var primeArray=[];
  var quantityArray=[];

	while (base!=1){
		if (base % n == 0){
			base/=n;
			primeArray[i] = n;
			if (isNaN(quantityArray[i])){
				quantityArray[i] = 0;
			}
			quantityArray[i]++;	
		}else {
			n++;
			if (primeArray.length==(i+1)){
				i++;
			}
		}
  } 
  
	var sum=[];
	for (var i = 0; i < primeArray.length; i++){
		var k = 1;
		sum[i] = 0;
		while (k<=number){
			k*=primeArray[i];
			sum[i]+=Math.floor(number/k);
		}
  }
  
	var result = sum[0]/quantityArray[0];
	for (var i = 0; i<quantityArray.length; i++){
		if (Math.floor(sum[i]/quantityArray[i])<result){
			result = Math.floor(sum[i] / quantityArray[i]);
		}
	}
    return result;
}