/*
 * @Author: root 931097192@qq.com
 * @Date: 2024-05-25 00:04:07
 * @LastEditors: root 931097192@qq.com
 * @LastEditTime: 2024-05-31 13:46:05
 * @FilePath: \react\packages\react\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Dispathcer, resolveDispathcer } from './src/currentDIspathcer';
import { jsxDEV } from './src/jsx';
import currentDispatcher from './src/currentDIspathcer';
export default {
	version: '0.0.0',
	createElement: jsxDEV
};

export const useState: Dispathcer['useState'] = (initialState) => {
	const dispathcer = resolveDispathcer();
	return dispathcer.useState(initialState);
};

export const __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FILED = {
	currentDispatcher
};
