export default function(X,Y,sizeX,sizeY,imgsrc,Class){
  this.X = X;
  this.Y = Y;
  this.sizeX = sizeX;
  this.sizeY = sizeY;
  this.imgsrc = imgsrc;
  this.imagenode = null
  this.init = function(){
    this.imagenode = document.createElement('img')
    this.imagenode.style.left = this.X+"px";
    this.imagenode.style.top = this.Y+"px";
    this.imagenode.style.width = this.sizeX+"px";
    this.imagenode.style.height = this.sizeY+"px";
    this.imagenode.classList.add(Class);
    this.imagenode.src = this.imgsrc
    $('#game').append(this.imagenode)
  }
  this.init()
}