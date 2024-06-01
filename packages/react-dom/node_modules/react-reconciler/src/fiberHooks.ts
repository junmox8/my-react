import internals from 'shared/internals';
import { FiberNode } from './fiber';
import { Dispatch, Dispathcer } from 'react/src/currentDispathcer';
import {
	UpdateQueue,
	createUpdate,
	createUpdateQueue,
	enqueueUpdate
} from './updateQueue';
import { Action } from 'shared/ReactTypes';
import { scheduleUpdateOnFiber } from './workLoop';

let currentlyRedneringFiber: FiberNode | null = null;
let workInProgressHook: Hook | null = null;

const { currentDispatcher } = internals;

interface Hook {
	memoizedState: any;
	updateQueue: unknown;
	next: Hook | null;
}

export function renderWithHooks(wip: FiberNode) {
	currentlyRedneringFiber = wip;
	wip.memoizedState = null;

	const current = wip.alternate;

	// if (current !== null) {
	// } else {
	// 	currentDispatcher.current = HookDispathcerOnMount;
	// }

	const Component = wip.type;
	const props = wip.pendingProps;
	const children = Component(props);
	currentlyRedneringFiber = null;

	return children;
}

const HookDispathcerOnMount: Dispathcer = {
	useState: mountState
};

function mountState<State>(
	initialState: State | (() => State)
): [State, Dispatch<State>] {
	//找到当前useState对应的hook数据
	const hook = mountWorkInProgress();
	let memoizedState;
	if (initialState instanceof Function) {
		memoizedState = initialState();
	} else {
		memoizedState = initialState;
	}

	const queue = createUpdateQueue<State>();
	hook.updateQueue = queue;
	hook.memoizedState = memoizedState;

	// @ts-ignore
	const dispatch = dispatchSetState.bind(null, currentlyRedneringFiber, queue);
	queue.dispatch = dispatch;
	return [memoizedState, dispatch];
}

function dispatchSetState<State>(
	fiber: FiberNode,
	updateQueue: UpdateQueue<State>,
	action: Action<State>
) {
	const update = createUpdate(action);
	enqueueUpdate(updateQueue, update);
	scheduleUpdateOnFiber(fiber);
}

function mountWorkInProgress(): Hook {
	const hook: Hook = {
		memoizedState: null,
		next: null,
		updateQueue: null
	};
	//第一个hook
	if (workInProgressHook === null) {
		//没有在函数内调用hook
		if (currentlyRedneringFiber === null) {
			throw new Error('请在函数组件内调用hook');
		} else {
			workInProgressHook = hook;
			currentlyRedneringFiber.memoizedState = hook;
		}
	} else {
		//非第一个hook
		workInProgressHook.next = hook;
		workInProgressHook = hook;
	}

	return hook;
}
