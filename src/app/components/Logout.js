import React from 'react';
import database from '../database';
import firebase from 'firebase';
import PropTypes from 'prop-types';

class Logout extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			redirect: false
		}
	}
	componentWillMount() {
		let base = firebase;

		base.app().auth().signOut().then((user) => {
			this.context.router.push('/');
		});
	}
	render() {
		return <div></div>
	}
}
Logout.contextTypes = {
	router: PropTypes.object.isRequired
};
export default Logout;