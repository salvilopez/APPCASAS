import styled from 'styled-components';
import Colors from 'theme/Colors';

export const ButtonStyled = styled.button`
	color: ${Colors.mainColor};
	background-color: ${Colors.secondaryColor};
	border-radius: 6px;
	padding: 0.5rem 1.75rem;
	border: 1px solid #ccc;

	&:hover {
		cursor: pointer;
	}
`;
