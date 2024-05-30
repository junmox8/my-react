/*
 * @Author: root 931097192@qq.com
 * @Date: 2024-05-30 14:38:56
 * @LastEditors: root 931097192@qq.com
 * @LastEditTime: 2024-05-30 14:39:31
 * @FilePath: \react\packages\react-dom\src\hostConfig.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export type Container = Element;
export type Instance = Element;

export const createInstance = (type: string): Instance => {
	const element = document.createElement(type);
	//TODO 处理props
	return element;
};

export const appendInitialChild = (
	parent: Instance | Container,
	child: Instance
) => {
	parent.appendChild(child);
};

export const createTextInstance = (content: string) => {
	return document.createTextNode(content);
};

export const appendChildToContainer = appendInitialChild;
