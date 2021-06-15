import React, {useState} from 'react';
import ComC from './ComC';

const ComB = () => {
	const [show, setShow] = useState(false);
	return (
		<>
			{show ? <ComC /> : null}
			<button onClick={() => setShow(!show)}>Click ME</button>
		</>
	);
};

export default ComB;
