import React from 'react'

import Header from './Header';
import Footer from './Footer';
import database from '../../database';
import firebase from 'firebase';

export default class Layout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			authenticated: false
		};
	}
	componentWillMount() {
		let base = firebase;
		base.app().auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({ authenticated: true });
			}
			else {
				this.setState({ authenticated: false });
			}
		})
	}
	render() {
		return (
			<div>
				<Header authenticated={this.state.authenticated} />
				<div id="main" role="main">
					{this.props.children}
				</div>
				<Footer />
			</div>
		)
	}
}

