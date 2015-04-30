function createXHR(){
	if(typeof XMLHttpRequest != "undefined"){
		return new XMLHttpRequest();
	}
}

function ajax(xhr){
	xhr.open('get','example.txt',false);
	xhr.send(null);
	if((xhr.status>=200 && xhr.status<300) || (xhr.status == 304))
	{
		alert(xhr.responseText);
	}
	else{
		alert("request was unsuccessful:" + xhr.status);
	}
}