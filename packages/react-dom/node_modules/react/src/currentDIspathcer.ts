import { Action } from 'shared/ReactTypes';

/*
 * @Author: root 931097192@qq.com
 * @Date: 2024-05-31 13:43:19
 * @LastEditors: root 931097192@qq.com
 * @LastEditTime: 2024-05-31 13:48:42
 * @FilePath: \react\packages\react\src\currentDIspathcer.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export interface Dispathcer {
	useState: <T>(initialState: T | (() => T)) => [T, Dispatch<T>];
}

export type Dispatch<State> = (action: Action<State>) => void;

const currentDispathcer: { current: Dispathcer | null } = {
	current: null
};

export const resolveDispathcer = () => {
	const dispathcer = currentDispathcer.current;
	if (dispathcer === null) {
		throw new Error('hook只能在函数组件执行');
	}
	return dispathcer;
};

export default currentDispathcer;
