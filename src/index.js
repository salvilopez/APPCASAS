import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'normalize.css';
import GlobalStyles from 'theme/GlobalStyles';
import {Provider} from 'react-redux';
import store from 'store/store';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyles />
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

serviceWorkerRegistration.register(store);
