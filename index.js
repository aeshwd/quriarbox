const consentBox = 
	document.getElementById("consentBox"); 
const acceptBtn = 
	document.querySelector(".consentButton"); 
const rejectBtn = 
	document.querySelector(".rejectButton"); 

acceptBtn.onclick = () => { 
	document.cookie = "CookieBy=GeeksForGeeks"; 
}; 

rejectBtn.onclick = () => { 
	alert( 
		"Cookies rejected. Some functionality may be limited."); 
	consentBox.classList.add("hide"); 
}; 


