import * as React from "react";
import * as ReactDOM from "react-dom";
import Nav from "../components/Nav";
import Breadcrumb from "../components/Breadcrumb";

export default class Navigator extends React.Component<any, any> {

	render() {
		const menuList = [
			{id:1, text:"性能监控", url:"/monitor"},
			{id:2, text:"业务拓扑", url:"/topology"},
			{id:3, text:"网络拓扑", url:"3"},
			{id:4, text:"告警监控", url:"4"}
		]

		const path = [
			{text:"主页"},
			{text:"业务性能"},
			{text:"集中监控"},
			{text:"采集机-1"}
		]
		return (
			<div>
				<Nav menuList={menuList}/>
				<Breadcrumb path={path}/>
			</div>
		)
	}
}

