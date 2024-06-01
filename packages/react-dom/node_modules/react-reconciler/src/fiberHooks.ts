import internals from 'shared/internals';
import { FiberNode } from './fiber';

let currentlyRedneringFiber: FiberNode | null = null;
const workInProgressHook: Hook | null = null;

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
	// 	currentDispatcher.current
	// }

	const Component = wip.type;
	const props = wip.pendingProps;
	const children = Component(props);
	currentlyRedneringFiber = null;

	return children;
}
