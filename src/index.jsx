import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

/** TODO: import REDUX **/
import logger from 'redux-logger';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
/** TODO: Add REDUCERS */

const airlineArray = (state = ['delta'], action) => {

    if (action.type === 'ADD_AIRLINE') {
        console.log(`airline added: ${action.payload}`);

        return [...state, action.payload]
    }
    return state
}

/** TODO: Create store */

const store = createStore(
    combineReducers({airlineArray}),
    applyMiddleware(logger)
)

// Be sure to add the Provider! Just wrap App with it. Don't copy and paste from lecture, that will cause issues.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);