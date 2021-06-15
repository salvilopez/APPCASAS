import React, {useState, useEffect} from 'react';

function ComponenteHijo({fnCallback}) {
	const [names, setNames] = useState([]);

	useEffect(() => {
		setNames(fnCallback());
		console.log('Nombres actualizados');
	}, [fnCallback]);
	return names.map((name) => <div key={name}>{name}</div>);
}

export default ComponenteHijo;
