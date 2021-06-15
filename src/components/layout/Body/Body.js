import SubHeader from 'components/composed/SubHeader/SubHeader';
import React from 'react';
import Header from '../Header/Header';
import {BodyStyled} from './Body.styles';

function Body({children, hasSubheader}) {
	return (
		<BodyStyled>
			<Header />
			{hasSubheader ? <SubHeader /> : null}
			{children}
		</BodyStyled>
	);
}

export default Body;
