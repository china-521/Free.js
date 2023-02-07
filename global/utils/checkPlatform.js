import { error } from "../../utils/exception/error.js";

export function checkPlatform(){
	let system = {};
	const platform = window.navigator.platform;
	if(platform){
		system.win = platform.indexOf('Win') === 0;
		system.mac = platform.indexOf('Mac') === 0;
		if(system.win || system.mac){
			return system;
		}else {
			system.mob = true;
			return system;
		}
	}else {
		error('Sorry, your browser does not support the platform attribute');
	}
}