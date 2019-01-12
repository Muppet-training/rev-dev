import React, { Component } from 'react';

class TextInput extends Component {
	render() {
		const { label, name, type } = this.props;
		return (
			<div className="text_box">
				<label>{label}</label>
				<input name={name} type={type} />
			</div>
		);
	}
}

export default TextInput;
