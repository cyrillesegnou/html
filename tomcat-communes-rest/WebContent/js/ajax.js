let xhr = new XMLHttpRequest();

//Initialisation de xhr    -onreadystatechange

xhr.onreadystatechange = function(){
	console.log(xhr.readyState); // affichage de l'état de la répnse
	if(xhr.readyState==4 && xhr.status==200){
		console.log(xhr.responseText)
		let communes = JSON.parse(xhr.responseText);
		for(let i=0; i<communes.length;i++){
			let commune = communes[i];
			console.log(commune.nom);
	}
} 	
		
}

function lancerRequete(){
	
	let cp = document.getElementById()
	
	let uri = "rest/communes/cp/78";
	xhr.open("GET", uri);
	xhr.send();
	console.log(`requête vers ${uri}`);

	}
	

document.addEventListener("DOMContentLoaded",function(){
	document.getElementById("b1").addEventListener("click",lancerRequete);	
});