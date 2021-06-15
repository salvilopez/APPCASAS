import React from 'react';

function ShowName({name, counter}) {
	console.log('child component re-renders');
	return (
		<>
			<p>{name}</p>
			<p>{counter}</p>
		</>
	);
}

function areEqual(prevProps, nextProps) {
	if (prevProps.name !== nextProps.name) {
		return false;
	} else {
		return true;
	}
}

export default React.memo(ShowName, areEqual);
