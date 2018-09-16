import React, { Component } from 'react';
import TextInput from '../../../../components/textInputs/TextInput';

class EditStaff extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="edit-staff">
				<section className="screen_title">
					<h1>Update Staff Payments</h1>
				</section>
				<form>
					<TextInput
						label="Staff Postion Name"
						name="position"
						type="text"
					/>
					<TextInput
						label="Cost Per Hour"
						name="electricity"
						type="text"
					/>
				</form>
			</div>
		);
	}
}

export default EditStaff;
