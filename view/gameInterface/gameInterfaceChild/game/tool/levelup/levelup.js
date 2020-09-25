import tool from '../../common/tool.js'
export function fast(){
	var X = Math.random()*window.innerWidth - 60
	X < 0 ? 0 : X
	this.toolname = 'fast'
	tool.call(this,X,'fast')
}
export function product(){
	var X = Math.random()*window.innerWidth - 60
	X < 0 ? 0 : X
	this.toolname = 'product'
	tool.call(this,X,'product')
}