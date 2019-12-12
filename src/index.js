import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx';

// Dependencias de Redux para React
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Importamos todos los Reducers de index.js
import RootReducers from './redux/index.js';

//Creamos el store a partir de un conjunto de Reducers
const STORE = createStore(RootReducers);

ReactDOM.render(
	<Provider store={STORE}>
		<App />
	</Provider>, 
	document.getElementById('root')
);
