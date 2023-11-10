
"use strict";
//styles
document.querySelector('body').style.background ="url('../background pics/background pic 9.jpg')";
document.querySelector('body').style.backgroundSize="cover";
document.querySelector('body').style.color="white";
document.querySelector("h1").style.textAlign="center";
document.querySelector("h1").style.textDecoration="underline";
document.querySelector("#section").style.position="absolute";
document.querySelector("#section").style.left="40%";
document.querySelector("#section").style.top="20%";
document.querySelector("#section").style.border="2px solid blue";
document.querySelector("#section").style.borderRadius="15px 50px";
document.querySelector("#section").style.padding="15px";
document.querySelector("#section").style.height="500px";
document.querySelector("#input").style.backgroundColor="black";
document.querySelector("#input").style.borderRadius="20px 60px";
document.getElementById("input").style.width="300px";
document.getElementById("input").style.height="50px";
document.getElementById("input").style.color="white";
document.getElementById("input").style.textAlign="center";
document.getElementById("input").style.fontSize="40px";
document.querySelector("button").style.marginTop="20px";
document.querySelector("button").style.width="77px";
document.querySelector("button").style.height="50px";
document.querySelector("button").style.borderRadius="30px";
document.querySelector("button").style.border="2px solid green";
document.querySelector("#output-section").style.fontSize="40px";
document.querySelector("#output-section").style.border="none";
document.querySelector("#output-section").style.color="black";
document.querySelector("#output-section").style.background="white";
document.querySelector("#output-section").style.borderRadius="20px 60px";
document.querySelector("#output-section").style.textAlign="center";
//functionality
document.addEventListener("DOMContentLoaded", allFunctions);
function allFunctions(){
		document.querySelector("button").addEventListener("click", convert);
		function convert(){
			const num = document.querySelector("#input").value;
            const output = document.querySelector("#output-section");
            output.innerHTML=num/1000 + "km";
		}

}