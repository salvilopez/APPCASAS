import {createGlobalStyle} from 'styled-components';

const size = {
	mobileS: '320px',
	mobileM: '375px',
	mobileL: '425px',
	tablet: '768px',
	laptop: '991px',
	laptopL: '1200px',
	desktop: '1600px',
};

export const device = {
	mobileS: `@media (min-width: ${size.mobileS})`,
	mobileM: `@media (min-width: ${size.mobileM})`,
	mobileL: `@media (min-width: ${size.mobileL})`,
	tablet: `@media (min-width: ${size.tablet})`,
	laptop: `@media (min-width: ${size.laptop})`,
	laptopL: `@media (min-width: ${size.laptopL})`,
	desktop: `@media (min-width: ${size.desktop})`,
	desktopL: `@media (min-width: ${size.desktop})`,
};

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html,
    body {
        font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    a {
        text-decoration: underline;
    }
`;

export default GlobalStyle;
