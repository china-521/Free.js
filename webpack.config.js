const path = require('path');

module.exports = {
	// 模式
	mode: 'production', // 也可以使用 development
	// 入口
	entry: './main/index.js',
	//出口
	output: {
		// 打包文件夹
		path: path.resolve(__dirname, 'dist'),
		// 打包文件
		filename: 'Free.js',
		// 对外暴露的对象名称
		// library:'free',
		//打包生成库可以通过esm/commonjs/reqirejs的语法引入
		libraryTarget: 'umd',
	}
}