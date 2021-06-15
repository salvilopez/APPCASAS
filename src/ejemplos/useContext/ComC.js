import React, {useContext} from 'react';
import {Data} from './ComA';

const ComC = () => {
	const context = useContext(Data);
	return <h1>{context}</h1>;
};

export default ComC;
