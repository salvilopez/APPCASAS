import React, {createContext} from 'react';
import ComB from './ComB';

export const Data = createContext();

export function ComA() {
	return (
		<div className="App">
			<Data.Provider value={'Hola chicos!'}>
				<ComB />
			</Data.Provider>
		</div>
	);
}

export default ComA;
