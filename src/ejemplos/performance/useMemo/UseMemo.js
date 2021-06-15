import React, {useState, useMemo} from 'react';
import {calculateCircumference} from './utils';

function UseMemo() {
	const [number, setNumber] = useState(1);
	const [trucoTrato, setTrucoTrato] = useState(false);

	const handleClick = () => {
		setTrucoTrato(!trucoTrato);
	};

	const circunferencia = useMemo(() => calculateCircumference(number), [number]);

	// const circunferencia = useMemo(() => calculateCircumference(number), [number]);

	return (
		<>
			<button onClick={handleClick}>Truco o trato</button>
			<p>Es {`${trucoTrato}`}</p>
			<br />
			<hr />
			<input
				type="number"
				name="number"
				id="number"
				value={number}
				onChange={(e) => setNumber(e.target.value)}
			/>
			<p>Circumferencia: {circunferencia}</p>
		</>
	);
}

export default UseMemo;
