import React, { Component } from 'react';

class TextInput extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { label, name, type } = this.props;
		return (
			<div className="recipe_ingredient_box">
				<div className="del_4">
					<button className="del_square recipe_ingredient_del">
						X
					</button>
				</div>
				<div className="label_1">
					<label>Ingredient Name</label>
				</div>
				<div className="input_1">
					<input name="ingredeint" type="text" />
				</div>
				<div className="label_2">
					<label>Quantity</label>
				</div>
				<div className="input_2">
					<input name="quantity" type="text" />
				</div>
				<div className="label_3">
					<label>Metric</label>
				</div>
				<div className="input_3">
					<input name="metric" type="text" />
				</div>
			</div>
		);
	}
}
// Sign offnpm

export default TextInput;
