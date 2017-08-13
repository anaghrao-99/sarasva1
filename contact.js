var icone = document.querySelector("img");
var p = document.querySelector("#nav-text-first");
icone.addEventListener("mouseover",function(){
	this.setAttribute("src","orange.png");
	p.style.color = "orange";
});
icone.addEventListener("mouseout",function(){
	this.setAttribute("src","nav-icon.png");
	p.style.color = "white";
});
p.addEventListener("mouseover",function(){
	icone.setAttribute("src","orange.png");
	this.style.color = "orange";
});
p.addEventListener("mouseout",function(){
	icone.setAttribute("src","nav-icon.png");
	this.style.color = "white";
});