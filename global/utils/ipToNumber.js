import {
	error
} from "../../utils/exception/error.js";
import {
	ipReg
} from "../../utils/reg/ipReg.js";

export function ipToNumber(ip) {
	if(!ip){
		return undefined;
	}
	if (!ipReg(ip)) {
		error('Please enter the IP address in the correct format');
	}
	let ipFragments = ip.split('.');
	let ipNumber = 0;
	ipFragments.reverse().forEach((ipFragment,index) => {
		ipNumber += ipFragment * Math.pow(256,index);
	});
	return ipNumber; 
}