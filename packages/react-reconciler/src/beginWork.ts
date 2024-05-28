/*
 * @Author: root 931097192@qq.com
 * @Date: 2024-05-25 22:40:01
 * @LastEditors: root 931097192@qq.com
 * @LastEditTime: 2024-05-28 14:37:18
 * @FilePath: \react\packages\react-reconciler\src\beginWork.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ReactElementType } from 'shared/ReactTypes';
import { FiberNode } from './fiber';
import { UpdateQueue, processUpdateQueue } from './updateQueue';
import { HostComponent, HostRoot, HostText } from './workTag';
import { mountChildFibers, reconcileChildFibers } from './childFibers';

//递归的递
export const beginWork = (wip: FiberNode) => {
	// 比较并返回子fiberNode
	switch (wip.tag) {
		case HostRoot:
			return updateHostRoot(wip);
		case HostComponent:
			return updateHostComponent(wip);
		case HostText:
			return null;
		default:
			if (__DEV__) {
				console.warn('未实现该类型');
			}
			break;
	}
};
0;

function updateHostRoot(wip: FiberNode) {
	const baseState = wip.memoizedState;
	const updateQueue = wip.updateQueue as UpdateQueue<Element>;
	const pending = updateQueue.shared;
	updateQueue.shared.pending = null;
	//fiberRoot节点 memoizedState为ReactElementType类型
	const { memoizedState } = processUpdateQueue(baseState, pending);
	wip.memoizedState = memoizedState;

	//<App/>的ReactElement
	const nextChildren = wip.memoizedState;
	//currentFiber树的childFiber
	// wip.alternate?.child;
	reconcileChildren(wip, nextChildren);
	return wip.child;
}

function updateHostComponent(wip: FiberNode) {
	const nextProps = wip.pendingProps;
	const nextChildren = nextProps.children;
	reconcileChildren(wip, nextChildren);
	return wip.child;
}

function reconcileChildren(wip: FiberNode, nextChildren?: ReactElementType) {
	const current = wip.alternate;
	if (current !== null) {
		//update流程
		wip.child = reconcileChildFibers(wip, current?.child, nextChildren);
	} else {
		//mount流程
		wip.child = mountChildFibers(wip, null, nextChildren);
	}
}
