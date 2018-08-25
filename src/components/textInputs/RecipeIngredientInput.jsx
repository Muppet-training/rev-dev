import React, { Component } from 'react';

class TextInput extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { label, name, type } = this.props;
		return (
			<div className="input_box recipe_ingredient_box">
				<label class="label_1">Ingredient Name</label>
				<input
					class="input_1"
					name="ingredeint"
					type="text"
				/>
				<label class="label_2">Quantity</label>
				<input class="input_2" name="quantity" type="text" />
				<label class="label_3">Metric</label>
				<input class="input_3" name="metric" type="text" />
			</div>
		);
	}
}
// Sign off

export default TextInput;
