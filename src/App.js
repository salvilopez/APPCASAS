import Home from 'pages/Home/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React from 'react';
import Counter from 'pages/Counter/Counter';
import UseCallback from 'ejemplos/performance/useCallback/UseCallback';
import ReactMemo from 'ejemplos/performance/ReactMemo/ReactMemo';
import UseMemo from 'ejemplos/performance/useMemo/UseMemo';
import ComA from 'ejemplos/useContext/ComA';
import UseReducer from 'ejemplos/useReducer/UseReducer';

function App({name}) {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/counter" exact component={Counter} />

				{/* useContext y useReducer */}
				<Route path="/usecontext" exact component={ComA} />
				<Route path="/usereducer" exact component={UseReducer} />

				{/* Performance */}
				<Route path="/usecallback" exact component={UseCallback} />
				<Route path="/reactmemo" exact component={ReactMemo} />
				<Route path="/usememo" exact component={UseMemo} />
			</Switch>
		</Router>
	);
}

export default App;
