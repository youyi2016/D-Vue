import {
	initLifecycle,
	callHook
} from './lifecycle'
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
		document.querySelector(el).innerHTML= '<div style="color: #f00">欢迎来到，DVue的主页～</div><div style="color: #f00">webpack～</div>'
	}

	Vue.prototype._init = function (options) {
		const vm = this
	
	 const div = document.createElement('div')
	 div.innerHTML = options.render
	 document.body.insertBefore(div, document.body.firstElementChild);
		if(options.el) {
			vm.$mount(options.el)
		}
		initLifecycle(vm)
		// initEvents(vm)
		// initRender(vm)
		// callHook(vm, 'beforeCreate')
		// // initInjections(vm) // resolve injections before data/props
		// initState(vm)
		// // initProvide(vm) // resolve provide after data/props
		// callHook(vm, 'created')
	}
}

