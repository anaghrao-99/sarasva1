setInterval(changebg,4000);

var x =0;

function changebg(){
	if(x == 0)
	{
		document.querySelector("body").classList.remove("body1");
		document.querySelector("body").classList.add("body2");
		x = 1;
	}
	else if(x == 1)
	{
		document.querySelector("body").classList.remove("body2");
		document.querySelector("body").classList.add("body3");
		x = 2;
	}
	else if(x == 2)
	{
		document.querySelector("body").classList.remove("body3");
		document.querySelector("body").classList.add("body1");
		x = 0;
	}
}

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