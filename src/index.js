import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import counterReducer from './Store/Reducers/CounterReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    counter: counterReducer
});

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

serviceWorker.unregister();
