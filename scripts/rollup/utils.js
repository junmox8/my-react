/*
 * @Author: root 931097192@qq.com
 * @Date: 2024-05-25 01:24:31
 * @LastEditors: root 931097192@qq.com
 * @LastEditTime: 2024-05-26 16:58:50
 * @FilePath: \react\scripts\rollup\utils.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import path from 'path';
import fs from 'fs';
import ts from 'rollup-plugin-typescript2';
import cjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';

const pkgPath = path.resolve(__dirname, '../../packages');
const distPath = path.resolve(__dirname, '../../dist/node_modules');

export function resolvePkgPath(pkgName, isDist = false) {
	if (isDist) {
		return `${distPath}/${pkgName}`;
	}
	return `${pkgPath}/${pkgName}`;
}
export function getPackageJSON(pkgName) {
	const path = `${resolvePkgPath(pkgName)}/package.json`;
	const str = fs.readFileSync(path, 'utf-8');
	return JSON.parse(str);
}
export function getBaseRollupPlugins({
	alias = { __DEV__: true },
	typescript = {}
} = {}) {
	return [replace(alias), cjs(), ts(typescript)];
}
