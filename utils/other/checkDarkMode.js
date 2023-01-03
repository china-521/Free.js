/**
 *  功能说明：
 *      - 检查用户设备是否处于暗模式
 *     
 */
export function checkDarkMode() {
	return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}