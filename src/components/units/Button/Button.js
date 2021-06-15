import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';

// Styles
import {ButtonStyled} from './Button.styles.js';

// Como evitar el error de onClick en la prop.
// 1. Dejando un valor por defecto onClick = () => {}
// 2. Testear todas las props (muy costoso en tiempo y mantenimiento)
// 3. Utilizar typescript.
// Typescript/Flow reduce notablemente la necesidad de realizar test unitarios sobre nuestros componentes.

function Button({
	text,
	type,
	onClick,
	isDisabled = false,
	icon,
	iconPosition,
	textStyles,
	iconStyles,
	buttonStyles,
}) {
	const handleClick = () => {
		if (isDisabled) {
			return;
		}
		if (!onClick) {
			return;
		}
		onClick();
	};

	return (
		<ButtonStyled
			type={type}
			onClick={handleClick}
			disabled={isDisabled}
			style={{...buttonStyles}}
		>
			{iconPosition === 'left' && icon ? (
				<FontAwesomeIcon icon={icon} style={{...iconStyles}} />
			) : null}
			<span style={{...textStyles}}>{text}</span>
			{iconPosition === 'right' && icon ? <FontAwesomeIcon icon={icon} /> : null}
		</ButtonStyled>
	);
}

export default Button;
