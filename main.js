
document.getElementsByClassName('toggleMenu')[0].onclick= function(){
	
	var menu = document.getElementById('navigatie');
	if(menu.className == "grid-item menu active") {
		menu.className = "grid-item menu inactive";
	} else {
		menu.className = "grid-item menu active";
	}

};