

module.exports = {
 
	findMissing: function(arr1, arr2){
		if(((arr1.length ===0 && arr2.length === 0)) || ((arr1.length === 1 && arr2.length === 1) && arr1[0] === arr2[0])) {    //check if the list is empty or of length 1 and return 0
			return 0;
		}
		else {
		  var j =0;
		  for(var i=0; i< arr2.length; i++) {
		    if(arr1[i] === arr2[j] ) {
		      j =j + 1;
		      continue;
		    }
		    return arr2[j];
		  }
		}
	}
}    

