import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding-left: 24px;
	padding-right: 24px;
`;

export const Card = styled.div`
	border-radius: 6px;
	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.25);

	.header {
		color: blue;
	}

	.body {
		color: red;
	}
`;
