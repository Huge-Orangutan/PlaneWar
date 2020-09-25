import bullet from '../../common/bulletmod.js'
export default function(X,Y){
	var plane =  document.getElementById('ourplane')
	var left = plane.offsetLeft
	var top = plane.offsetTop
	var x = plane.offsetWidth
	bullet.call(this,left + x/2 - 6,top - 10,12,24,'./assest/image/bullet1.png','ourbullet')
}

