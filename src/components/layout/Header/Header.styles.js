import styled from 'styled-components';

export const HeaderStyled = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	padding-top: 20px;
	padding-bottom: 20px;

	.menu {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		align-items: center;

		li {
			a {
				color: #666;
			}

			&:last-child {
				margin-left: 1rem;
			}
		}
	}
`;
