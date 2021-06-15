import styled from 'styled-components';
import {device} from 'theme/GlobalStyles';

export const HomeStyled = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;

	.left {
		width: 52%;

		.houses-wrapper {
			display: flex;
			flex-direction: column;
			margin-top: 2rem;

			.houses {
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;

				.house {
					width: 31%;
					margin-bottom: 3%;

					img {
						width: 100%;
						max-width: 100%;
						height: 120px;
						object-fit: cover;
						border-top-left-radius: 6px;
						border-top-right-radius: 6px;
					}

					.title {
						font-size: 14px;
						color: #666;
						padding: 0.25rem;
						text-align: center;

						${device.laptop} {
							text-align: left;
						}
					}

					.price {
						font-weight: bold;
						font-size: 18px;
					}

					.footer {
						display: flex;
						flex-direction: column;
						align-items: center;
						justify-content: space-between;
						margin-top: 0.5rem;
						padding: 0 0.25rem;

						${device.laptop} {
							flex-direction: row;
						}
					}

					button {
						margin-top: 0;
						${device.laptop} {
							margin-right: 0;
							margin-left: auto;
						}
					}
				}
			}

			button {
				max-width: 180px;
				margin: 0 auto;
				margin-top: 2rem;
			}
		}
	}

	.right {
		width: 44%;
		height: 400px;
		display: flex;
		margin-top: 2rem;
	}



	#refreshButton {
		position: absolute;
		top: 20px;
		right: 20px;
		padding: 10px;
		z-index: 400;
	  }
`;
