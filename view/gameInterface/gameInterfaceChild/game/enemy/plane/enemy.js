import plane from '../../common/planemod.js'
export function small(){
	var X = Math.random()*window.innerWidth -34
	X < 0 ? 0 : X
	plane.call(this,X,-24,34,24,'./assest/image/enemy1.png','./assest/image/小飞机爆炸.gif',2)
	this.score = 2000
    this.imagenode.classList.add('enemyplane');
}
export function normal(){
	var X = Math.random()*window.innerWidth - 110
	plane.call(this,X,-60,46,60,'./assest/image/enemy3_fly_1.png','./assest/image/中飞机爆炸.gif',4)
	this.score = 4000
    this.imagenode.classList.add('enemyplane');
}
export function large(){
	var X = Math.random()*window.innerWidth - 110
	plane.call(this,X,-164,110,164,'./assest/image/enemy2_fly_1.png','./assest/image/大飞机爆炸.gif',6)
	this.score = 6000
    this.imagenode.classList.add('enemyplane');
}
