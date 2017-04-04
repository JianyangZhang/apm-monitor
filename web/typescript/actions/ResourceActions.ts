import 'isomorphic-fetch'
import {
	RES_DEVICE_LIST,
	RES_SERVICE_LIST,
	RES_GROUP_LIST,
	RES_TOPOLOGY_LIST } from "./ActionTypes"
import {resource} from "./UrlMapping"

export function loadResData() {
	return function(dispatch, getState) {
		dispatch(getGroupListAsynAction());
		dispatch(getDeviceListAsynAction());
		dispatch(getServiceListAsynAction());
	}
}

export function getGroupListAsynAction() {
	return function(dispatch, getState) {
		const url = resource.group.list;

		return fetch(url).then(res=>{
		 	return  res.json();
		}).then(json=>{
			dispatch(getGroupListAction(json))
		}).catch(error => { 
			dispatch(getGroupListAction([]))
		});
	}
}

export function getDeviceListAsynAction() {
	return function(dispatch, getState) {
		const url = resource.device.list

		return fetch(url).then(res=>{
		 	return  res.json();
		}).then(json=>{
			dispatch(getDeviceListAction(json))
		}).catch(error => { 
			dispatch(getDeviceListAction([]))
		});
	}
}

export function getServiceListAsynAction() {
	return function(dispatch, getState) {
		const url = resource.service.list

		return fetch(url).then(res=>{
		 	return  res.json();
		}).then(json=>{
			dispatch(getServiceListAction(json))
		}).catch(error => { 
			dispatch(getServiceListAction([]))
		});
	}
}


export function getDeviceListAction(data) {
	return {
		type: RES_DEVICE_LIST,
		payload:data
	}
}

export function getServiceListAction(data) {
	return {
		type: RES_SERVICE_LIST,
		payload:data
	}
}

export function getGroupListAction(data) {
	return {
		type: RES_GROUP_LIST,
		payload:data
	}
}

export function getToppologyListAction(data) {
	return {
		type: RES_TOPOLOGY_LIST,
		payload:data
	}
}