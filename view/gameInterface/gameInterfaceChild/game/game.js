import ourplane from './ourself/plane/ourplane.js'
import ourbullet from './ourself/bullet/ourbullet.js'
import {small,normal,large} from './enemy/plane/enemy.js'
import {fast,product} from './tool/levelup/levelup.js'

//初始值
var mark = 0
var enemy = []
var score = 0
var tool = []
var bulletspeed = 21
var bulletproduct = 600
//实例化-----------------------------------------------------
//飞机
var selfplane = new ourplane() 
//子弹
var fly = true
var bulletfly = setInterval(SETBUTTLET,bulletproduct)
function SETBUTTLET(){
  var selfbullet = new ourbullet()
}
//敌机
var enemyProduct = setInterval(()=>{
	if(mark != 10 && mark != 20 ){
		mark ++
		enemy.push(new small())
	}
	else if(mark == 10 ){
		
		mark ++
		enemy.push(new normal())
	 	if(Math.random()*10 <=5){
			  tool.push(new fast())
		}else{
			tool.push(new product())
		}		
	}
	else if(mark == 20){
		mark = 0
		enemy.push(new large())
		if(Math.random()*10 <=5){
			  tool.push(new fast())
		}else{
			tool.push(new product())
		}	
	}
},3000)
//获取元素---------------------------------------------------------------
var plane = document.getElementById('ourplane')
var gameInterface = $('#gameInterface')

//背景移动---------------------------------------------------------------
var bgY = 0
function bgmove(){
	bgY += 5
	gameInterface.css('background-positionY',`${bgY}px`)
}
setInterval(bgmove,10)

//我方飞机移动------------------------------------------------------------
gameInterface.mousemove((e)=>{
   plane.style.left = e.clientX - plane.offsetWidth/2  + 'px'
   plane.style.top = e.clientY - plane.offsetHeight/2 + 'px'
})

//我方子弹移动------------------------------------------------------------
var bulletmove = function(){
  var bullet = $('.ourbullet')
  for(var i = 0 ; i < bullet.length ; i++){
	 var top = bullet[i].offsetTop
	 top -= 5
	 bullet[i].style.top = top + 'px'
	 //判断子弹到达顶部消失
	 if(bullet[i].offsetTop <= -bullet[i].offsetHeight){
		 bullet[i].remove()
	 }
  }
}
var bulletTime = setInterval(bulletmove,bulletspeed)

//敌方飞机移动------------------------------------------------------------
var enemymove = function(){
	for(var i = 0 ; i < enemy.length ; i++){
	  enemy[i].imagenode.style.top = enemy[i].imagenode.offsetTop + 1 + 'px'
	  if(enemy[i].imagenode.offsetTop >= window.innerHeight){
		 $(enemy[i].imagenode).remove()
	     enemy.splice(i,1);
	  }
	}
}
setInterval(enemymove,10)

//道具移动-------------------------------------------------------------
var toolmove = function(){
	for(var i = 0 ; i < tool.length ; i++){
	  tool[i].divnode.style.top = tool[i].divnode.offsetTop + 1 + 'px'
	  if(tool[i].divnode.offsetTop >= window.innerHeight){
		 $(tool[i].divnode).remove()
	     tool.splice(i,1);
	  }
	}
}
var toolmovetime = setInterval(toolmove,10)

//碰撞-----------------------------------------------------------------
function Knock(){
	var enemyplane = $('.enemyplane')
	var plane = $('#ourplane')
	var bullet = $('.ourbullet')
	var tools = $('.tool')
	//子弹和敌机碰撞
	for(var i = 0; i<enemyplane.length; i++){
		for(var j = 0; j<bullet.length; j++){
		  if(enemy[i]){
		  if(Math.abs(enemy[i].imagenode.offsetLeft + enemy[i].imagenode.offsetWidth - bullet[j].offsetLeft - bullet[j].offsetWidth) < enemy[i].imagenode.offsetWidth && Math.abs(enemy[i].imagenode.offsetTop + enemy[i].imagenode.offsetHeight - bullet[j].offsetTop - bullet[j].offsetHeight) <= 5){
 				bullet[j].remove()
				enemy[i].hp--
				if(enemy[i].hp <= 0){
					score = score + enemy[i].score
					$('#score').text(score)
					enemy[i].imagenode.src = enemy[i].imgboom
					enemy.splice(i,1);	
					var dieplane = enemyplane[i]
					setTimeout(()=>{
						dieplane.remove()	
					},200)
				}
			}
		}
		}
	}
    //和道具碰撞
	for(var i = 0; i<tool.length; i++){
		 if(Math.abs(tool[i].divnode.offsetLeft + tool[i].divnode.offsetWidth - plane[0].offsetLeft - plane[0].offsetWidth) <  tool[i].divnode.offsetWidth && Math.abs(tool[i].divnode.offsetTop + tool[i].divnode.offsetHeight - plane[0].offsetTop - plane[0].offsetHeight) <plane[0].offsetHeight){
			console.log(bulletproduct)
			console.log(bulletspeed)
			if(tool[i].toolname == 'product'){
				bulletproduct -= 40
			}
			if(tool[i].toolname	== 'fast'){
				bulletspeed -= 4
				clearInterval(bulletTime)
				bulletTime = setInterval(bulletmove,bulletspeed)
			}
			tool.splice(i,1);	
			tools[i].remove()
		}
	}
}
setInterval(Knock,1)
var boom = 3
//全屏技能
$(document).keydown((e)=>{
	var enemyplane = $('.enemyplane')
	if(e.keyCode == 13){
	  if(boom > 0){
		  boom --
		  $('#boom-number').text(boom)
		 for(var i = 0; i < enemy.length; i++){
			 score = score + enemy[i].score
			 $('#score').text(score)
		     enemy[i].imagenode.src = enemy[i].imgboom
		   }
		   enemy.splice(1,enemy.length)
		   enemy.length = 0;
		   setTimeout(()=>{
		   	for(var i = 0; i < enemyplane.length; i++){
		 		enemyplane[i].remove()
		 	}
		   },300)
		 } 
	  }
})