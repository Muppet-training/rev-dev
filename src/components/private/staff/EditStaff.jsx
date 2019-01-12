import React, { Component } from 'react';
import TextInput from '../../layout/inputs/TextInput';

class EditStaff extends Component {
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
