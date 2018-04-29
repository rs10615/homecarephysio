import React from 'react';
import { Route, Router, IndexRedirect, browserHistory, IndexRoute } from 'react-router';
import Layout from '../components/common/Layout';
import Home from '../components/Home';
import Appointment from '../components/appointmentlist';
import Login from '../components/Login';
import Logout from '../components/Logout';

export default (
	<Router history={browserHistory}>
		<Route>
			<Route component={Layout}>
				<Route path="/" component={Home} />
				<Route path="/appointmentlist" component={Appointment} />
				<Route path="/login" component={Login} />
				<Route path="/logout" component={Logout} />
			</Route>
		</Route>
	</Router>
);