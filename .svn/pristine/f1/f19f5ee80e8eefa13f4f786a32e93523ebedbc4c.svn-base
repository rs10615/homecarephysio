import React from 'react';
import database from '../database';
import firebase from 'firebase';
import PropTypes from 'prop-types';

class Login extends React.PureComponent {
	constructor(props) {
		super(props);
		this.authWithEmailPassword = this.authWithEmailPassword.bind(this);

		this.state = {
			redirect: false
		}
	}
	componentWillMount() {
		let base = firebase;
		base.app().auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({ redirect: true });
			}
		});
	}
	authWithEmailPassword(event) {
		event.preventDefault();

		const email = this.emailInput.value;
		const password = this.passwordInput.value;
		let base = firebase;

		base.app().auth().fetchProvidersForEmail(email)
			.then((providers) => {
				if (providers.length === 0) {
					//create user
					return base.app().auth().createUserWithEmailAndPassword(email, password);
				}
				else if (providers.indexOf('password') === -1) {
					//using other methods
				}
				else {
					//sign user in
					return base.app().auth().signInWithEmailAndPassword(email, password);
				}
			})
			.then((user) => {
				if (user && user.email) {
					this.loginForm.reset();
					this.context.router.push('/');
					this.setState({ redirect: true });
				}
			})
			.catch((error) => {
				swal(error.message);
			});
	}
	onGoBackClick() {
		this.context.router.push('/');
	}
	render() {
		if (this.state.redirect) {
			return <div>
				<div className='col-md-4'></div>
				<div className='col-md-4 already-sign-in'>
					<h1 className='text-center'>User already logged in.</h1>
					<div className='text-center'><input type='button' className='btn btn-lg btn-primary btn-login' value='Back to home' onClick={this.onGoBackClick.bind(this)} /></div>
					<br />
				</div>
				<div className='col-md-4'></div>
			</div>
		}
		return <div className='login'>
			<div className='col-md-4'></div>
			<form onSubmit={(event) => this.authWithEmailPassword(event)} ref={(form) => { this.loginForm = form }}
				className='col-md-3 form-horizontal custom-form-main'>
				<div className='custom-form'>
					<div className='login-header'>
						<div className='header'>
							<h4 className='text-center'>Login Form</h4>
							<hr />
							<h5 className='custom-h5'>If you don't have account already, this form will create your account.</h5>
						</div>
					</div>
					<div className='login-body'>
						<div className="input-border">
							<div className="input-group">
								<span className="input-group-addon">
									<i className="fa fa-user"></i>
								</span>
								<input className='form-control'
									placeholder='Email' name='email' type='email' ref={(input) => { this.emailInput = input }} />
							</div>
						</div>
						<div className="input-border">
							<div className="input-group">
								<span className="input-group-addon">
									<i className="fa fa-lock"></i>
								</span>
								<input placeholder='Password' className='form-control' name='password' type='password' ref={(input) => { this.passwordInput = input }} />
							</div>
						</div>
						<div className="form-group">
							<div className="col-xs-6">
								<input type='submit' className='btn btn-primary btn-login' value='Login' />
							</div>
							<div className="col-xs-6">
								<input type='reset' className='btn btn-primary btn-login pull-right' value='Reset' />
							</div>
						</div>
					</div>
					<div className="clearfix"></div>
				</div>
			</form>
			<div className='col-md-5'></div>
		</div>
	}
}
Login.contextTypes = {
	router: PropTypes.object.isRequired
};
export default Login;