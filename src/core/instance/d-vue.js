import {
	initMixin
} from './init'

function DVue(options) {
	this._init(options)
}
initMixin(DVue);
export default DVue