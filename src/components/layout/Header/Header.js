import React from 'react';
import {Container} from 'theme/GlobalComponents';
import {HeaderStyled} from './Header.styles';

function Header() {
	return (
		<Container>
			<HeaderStyled>
				<div className="logo">MIPISO.com.es</div>
				<ul className="menu">
					<li>
						<a href="/acceder">Acceder</a>
					</li>
					<li>
						<a href="/registrarse">Registrarse</a>
					</li>
				</ul>
			</HeaderStyled>
		</Container>
	);
}

export default Header;
