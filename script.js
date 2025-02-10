function validEmail(str) {
	if(str.length==0){
		return false;
	}
	let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	if(regex.test(str)){
		return true;
		
	}
	else{
		return false;
	}
  //your JS code here.
}


// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
