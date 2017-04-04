import { IState } from '../model'

export  default function  initialState() {
	let state:IState = {
		monitor:{resId:null, resType:null, data:{}, loaders:{}},
		resource:{devices:[], services:[], groups:[], topologys:[]}
	}
	return state;
}