import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.onLinkClick = this.onLinkClick.bind(this);
	}
	onLinkClick(scrollTo, route, event) {
		if (route !== this.context.router.getCurrentLocation()) {
			this.context.router.push(route);
		}
		if (route === '/') {
			if (this.context.router.getCurrentLocation() !== '/') {
				this.context.router.push('/');
			}
			if (scrollTo) {
				var domElement = document.getElementById(scrollTo);
				if (domElement) {
					$('html,body').animate({ scrollTop: domElement.offsetTop }, 500);
				}
			}
		}
	}
	render() {
		return <aside id='left-panel'>
			<nav>
				<ul>
					<li className='logo'><a></a></li>
					<li className="">
						<a title="Home" onClick={this.onLinkClick.bind(this, '', '/')} >
							<i className="fa fa-lg fa-fw fa-home"></i>
							<span className="menu-item-parent">
								<span className="custom-wrap">Home</span>
							</span>
						</a>
					</li>
					<li className="">
						<a title="About us" onClick={this.onLinkClick.bind(this, 'aboutus', '/')}>
							<i className="fa fa-lg fa-fw fa-info-circle"></i>
							<span className="menu-item-parent">
								<span className="custom-wrap">About Us</span>
							</span>
						</a>
					</li>
					<li className="">
						<a title="Our Approaches" onClick={this.onLinkClick.bind(this, 'ourApproaches', '/')}>
							<i className="fa fa-lg fa-fw fa-eye"></i>
							<span className="menu-item-parent">
								<span className="custom-wrap">Our Approaches</span>
							</span>
						</a>
					</li>
					<li className="">
						<a title="Appointments" onClick={this.onLinkClick.bind(this, 'appointments', '/')}>
							<i className="fa fa-lg fa-fw fa-calendar"></i>
							<span className="menu-item-parent">
								<span className="custom-wrap">Appointments</span>
							</span>
						</a>
					</li>
					<li className="">
						<a title="Testimonials" onClick={this.onLinkClick.bind(this, 'testimonial', '/')}>
							<i className="fa fa-lg fa-fw fa-comment"></i>
							<span className="menu-item-parent">
								<span className="custom-wrap">Testimonials</span>
							</span>
						</a>
					</li>
					<li className="">
						<a title="Contact Us" onClick={this.onLinkClick.bind(this, 'contact', '/')}>
							<i className="fa fa-lg fa-fw fa-book"></i>
							<span className="menu-item-parent">
								<span className="custom-wrap">Contact Us</span>
							</span>
						</a>
					</li>
					{this.props.authenticated ? <li className="">
						<a title="Appointment List" onClick={this.onLinkClick.bind(this, '', '/appointmentlist')}>
							<i className="fa fa-lg fa-fw fa-calendar"></i>
							<span className="menu-item-parent">
								<span className="custom-wrap">Appointment List</span>
							</span>
						</a>
					</li> : null}
					{this.props.authenticated ?
						<li className="">
							<a title="Logout" onClick={this.onLinkClick.bind(this, '', '/logout')}>
								<i className="fa fa-lg fa-fw fa-sign-out"></i>
								<span className="menu-item-parent">
									<span className="custom-wrap">Logout</span>
								</span>
							</a>
						</li> :
						<li className="">
							<a title="Login" onClick={this.onLinkClick.bind(this, '', '/login')}>
								<i className="fa fa-lg fa-fw fa-sign-in"></i>
								<span className="menu-item-parent">
									<span className="custom-wrap">Login</span>
								</span>
							</a>
						</li>
					}
				</ul>
			</nav>
		</aside>
	}
}
Header.contextTypes = {
	router: PropTypes.object.isRequired
};

export default Header;