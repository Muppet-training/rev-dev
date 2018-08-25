import React, { Component } from 'react';

class TextInput extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { label, name, type } = this.props;
		return (
			<div className="input_box">
				<label>{label}</label>
				<input name={name} type={type} />
			</div>
		);
	}
}

export default TextInput;
