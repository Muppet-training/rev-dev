import React, { Component } from 'react';
import TextInput from '../../layout/inputs/TextInput';

class EditPackaging extends Component {
	render() {
		return (
			<div className="edit-packaging">
				<section className="screen_title">
					<h1>Edit Packaging</h1>
				</section>
				<form>
					<TextInput
						label="Packaging Name"
						name="name"
						type="text"
					/>
					<TextInput
						label="Packaging Cost"
						name="cost"
						type="text"
					/>
					<TextInput
						label="Packaging Quantity"
						name="quantity"
						type="text"
					/>
					<TextInput
						label="Supplier"
						name="supplier"
						type="text"
					/>
				</form>
			</div>
		);
	}
}

export default EditPackaging;
