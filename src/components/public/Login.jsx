import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextInput from '../layout/inputs/TextInput';
import { login } from '../../actions/authActions';

class Login extends Component {
	state = {
		email: '',
		password: ''
	};

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		console.log('Props', this.props);

		// This will pass in the ingredient into the dispatch action
		this.props.login(this.state);
	};

	render() {
		return (
			<div className="login">
				<section className="screen_title">
					<h1>Login</h1>
				</section>
				<form onSubmit={this.handleSubmit}>
					<TextInput
						label="Email"
						name="email"
						type="text"
						onChange={this.handleChange}
					/>
					<TextInput
						label="Password"
						name="password"
						type="password"
						onChange={this.handleChange}
					/>
					<button type="submit">Login</button>
				</form>
			</div>
		);
	}
}

// const mapStateToProps = (state) => ({
// 	...state
// });

const mapDispatchToProps = (dispatch) => {
	return {
		login: (creds) => dispatch(login(creds))
	};
};

export default connect(null, mapDispatchToProps)(Login);
