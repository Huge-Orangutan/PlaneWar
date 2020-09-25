import plane from '../../common/planemod.js'
export default function(){
	plane.call(this,window.innerWidth/2-66,window.innerHeight-80,66,80,'./assest/image/我的飞机.gif','./assest/image/本方飞机爆炸.gif')
    this.imagenode.id = 'ourplane'
}
