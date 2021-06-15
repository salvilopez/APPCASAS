import {faSearch} from '@fortawesome/free-solid-svg-icons';
import Button from 'components/units/Button/Button';
import React from 'react';
import {Container} from 'theme/GlobalComponents';
import {SubHeaderStyled} from './SubHeader.styles';

function SubHeader() {
	return (
		<Container
			style={{
				backgroundColor: '#E6F2F2',
				borderTop: '1px solid #B5DDDD',
				borderBottom: '1px solid #B5DDDD',
			}}
		>
			<SubHeaderStyled>
				<input type="text" placeholder="Piso, chalet o garaje…" />
				<input type="text" placeholder="Madrid, Barcelona o Zaragoza…" />
				<Button
					text="Buscar..."
					textStyles={{display: 'none'}}
					icon={faSearch}
					iconPosition="left"
					buttonStyles={{backgroundColor: '#46C1F7', border: 'none', padding: '0.75rem'}}
					iconStyles={{color: 'white'}}
				/>
			</SubHeaderStyled>
		</Container>
	);
}

export default SubHeader;
