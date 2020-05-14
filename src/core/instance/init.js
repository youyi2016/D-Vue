// import {
// 	initLifecycle,
// 	callHook
// } from './lifecycle'
// import {
// 	initEvents
// } from './events'
// import {
// 	initRender
// } from './render'
// import {
// 	initState
// } from './state'

export function initMixin(Vue) {

	Vue.prototype.$mount = function (el) {
	
		document.querySelector(el).appendChild = '<div style="color: #f00">DVue的主页</div>'
	}

	Vue.prototype._init = function (options) {
		const vm = this
		const div =  document.createElement('div')
		div.innerHTML = options.render
		if(options.el) {
			vm.$mount(options.el)
		}
		// initLifecycle(vm)
		// initEvents(vm)
		// initRender(vm)
		// callHook(vm, 'beforeCreate')
		// // initInjections(vm) // resolve injections before data/props
		// initState(vm)
		// // initProvide(vm) // resolve provide after data/props
		// callHook(vm, 'created')
	}
}

