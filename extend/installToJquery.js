// 将 Free 的方法挂载到 jQuery 身上
export function installToJquery() {
	if (window.jQuery || window.$) {
		let target = {
			$Free:window.$Free,
			Free:window.Free
		}
		return $.extend(target) && $.fn.extend(target);
	}
	return false;
}