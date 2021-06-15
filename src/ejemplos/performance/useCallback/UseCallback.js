import React, {useState, useCallback} from 'react';
import ComponenteHijo from './ComponenteHijo';

function UseCallback() {
	const [name, setName] = useState('Kevin Mamaqi Kapllani');
	const [trucoTrato, setTrucoTrato] = useState(false);
	// const splitName = useCallback(() => {
	// 	return name.split(' ');
	// }, [name]);

	const splitName = useCallback(() => {
		return name.split(' ');
	}, [name]);

	return (
		<div>
			<button onClick={() => setTrucoTrato(!trucoTrato)}>Truco o trato</button>
			<p>Es {`${trucoTrato}`}</p>
			<br />
			<input
				type="text"
				name="name"
				id="name"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<br />
			<ComponenteHijo fnCallback={splitName} />
		</div>
	);
}

export default UseCallback;
