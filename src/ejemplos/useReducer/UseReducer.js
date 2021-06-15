import React, {useReducer} from 'react';

export const COUNTER_TYPES = {
	INCREMENT: 'INCREMENT',
	DECREMENT: 'DECREMENT',
	INCREMENT_BY_AMOUNT: 'INCREMENT_BY_AMOUNT',
};

const initialState = {count: 0, name: 'kevin', age: 12312312};

function reducer(state, action) {
	switch (action.type) {
		case COUNTER_TYPES.INCREMENT:
			return {...state, count: state.count + 1};
		case COUNTER_TYPES.DECREMENT:
			return {...state, count: state.count - 1};
		case COUNTER_TYPES.INCREMENT_BY_AMOUNT:
			return {...state, count: state.count + action.payload};
		default:
			throw new Error();
	}
}

function Counter() {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<>
			Count: {state.count} <br />
			Age: {state.age} <br />
			Name: {state.name} <br />
			<button onClick={() => dispatch({type: COUNTER_TYPES.DECREMENT})}>-</button>
			<button onClick={() => dispatch({type: COUNTER_TYPES.INCREMENT})}>+</button>
			<button
				onClick={() => dispatch({type: COUNTER_TYPES.INCREMENT_BY_AMOUNT, payload: 10})}
			>
				Increment by amount
			</button>
		</>
	);
}

export default Counter;
