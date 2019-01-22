import React, { Component } from 'react';

class TextInput extends Component {
	render() {
		const {
			label,
			name,
			type,
			onChange,
			defaultValue
		} = this.props;
		return (
			<div className="text_box">
				<label>{label}</label>
				<input
					name={name}
					type={type}
					onChange={onChange}
					defaultValue={defaultValue ? defaultValue : null}
				/>
			</div>
		);
	}
}

export default TextInput;
