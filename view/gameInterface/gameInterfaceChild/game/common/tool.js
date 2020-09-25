export default function(X,text){
  this.divnode = null
  this.init = function(){
  	this.divnode = document.createElement('div')
  	this.divnode.style.left = X +"px";
  	this.divnode.style.top = "-40px";
	this.divnode.style.width = "60px";
	this.divnode.style.height = "40px";
	this.divnode.innerText = text;
	this.divnode.classList.add('tool');
  	$('#game').append(this.divnode)
  }
  this.init()
}