import React, {useEffect, useState} from 'react';
import ShowName from './ShowName';

function ReactMemo() {
	const [name, setName] = useState('Kevin');
	const [trucoTrato, setTrucoTrato] = useState(false);
	const [counter, setCounter] = useState(0);
	const handleClick = () => {
		setTrucoTrato(!trucoTrato);
		setName(`${name} ${name}`);
	};

	const handleIncrement = () => {
		setCounter(counter + 1);
	};

	console.log('Parent component renders');
	return (
		<>
			<button onClick={handleClick}>Truco o trato</button>
			<button onClick={handleIncrement}>+</button>

			<p>Es {`${trucoTrato}`}</p>
			<br />
			<ShowName name={name} counter={counter} />
		</>
	);
}

export default ReactMemo;
