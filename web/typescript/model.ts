export interface IMonitor {
	resId:string;
	resType:string;
	data:any;
	loaders:any;
}

export interface IResource {
	devices:{[key:string]:any};
	services:{[key:string]:any};
	groups:{[key:string]:any};
	topologys:{[key:string]:any};
}


export interface IState {
	monitor:IMonitor;
	resource:IResource;
}