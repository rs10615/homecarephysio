import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { Router, hashHistory } from 'react-router';
import routes from '../app/routes/routes';


import store from './store/configureStore'

const history = syncHistoryWithStore(hashHistory, store);

// const routes = {

//     path: '/',
//     indexRoute: { onEnter: (nextState, replace) => replace('/home') },
//     childRoutes: [
//         require('./routes/home').default,
//     ]
// };

ReactDOM.render((
    <Provider store={store}>
        <Router
            history={history}
            routes={routes}
        />
    </Provider>
), document.getElementById('smartadmin-root'));
