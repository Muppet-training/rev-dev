import React, { Component } from 'react';
import TextInput from '../../../../components/textInputs/TextInput';

class EditIngredient extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="edit-ingredient">
				<section className="screen_title">
					<h1>Edit Ingredient</h1>
				</section>
				<form>
					<TextInput
						label="Ingredient Name"
						name="name"
						type="text"
					/>
					<TextInput
						label="Packet Cost"
						name="cost"
						type="text"
					/>
					<TextInput
						label="Packet Grams"
						name="grams"
						type="text"
					/>
					<TextInput
						label="Supplier"
						name="supplier"
						type="text"
					/>
				</form>
				<div className="border_break" />
				<section className="screen_title">
					<h1>Ingredient Metrics</h1>
				</section>
				<form>
					<TextInput label="Cup" name="cup" type="text" />
					<TextInput
						label="Grams"
						name="gram"
						type="text"
					/>
					<TextInput
						label="Handful"
						name="handful"
						type="text"
					/>
					<TextInput label="mL" name="ml" type="text" />
					<TextInput
						label="Pinch"
						name="pinch"
						type="text"
					/>
					<TextInput
						label="Sheet"
						name="sheet"
						type="text"
					/>
					<TextInput
						label="Slice"
						name="slice"
						type="text"
					/>
					<TextInput
						label="Tablespoon"
						name="tablespoon"
						type="text"
					/>
					<TextInput
						label="Teaspoon"
						name="teaspoon"
						type="text"
					/>
					<TextInput
						label="Whole"
						name="whole"
						type="text"
					/>
				</form>
			</div>
		);
	}
}

export default EditIngredient;
