import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function App() {
	return (
		<div>
			<Child />
		</div>
	);
}

function Child() {
	const [num, setNum] = useState(10);
	console.log(setNum);
	return <span>{num}</span>;
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<Child />
);
