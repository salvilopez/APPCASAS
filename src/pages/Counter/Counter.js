import Body from 'components/layout/Body/Body';
import React from 'react';

import {useSelector, useDispatch} from 'react-redux';
import {decrement, increment, incrementByAmount} from 'store/toolkit/counter.slice';

function Counter() {
	const count = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();
	return (
		<Body>
			<div>
				<button aria-label="Increment value" onClick={() => dispatch(increment())}>
					Increment
				</button>
				<span>{count}</span>
				<button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
					Decrement
				</button>
				<button aria-label="Decrement value" onClick={() => dispatch(incrementByAmount(2))}>
					Increment by amount
				</button>
			</div>
		</Body>
	);
}

export default Counter;
