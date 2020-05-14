import {
	initMixin
} from './init'

function MiniVue(options) {
	this._init(options)
}
initMixin(MiniVue);
export default MiniVue