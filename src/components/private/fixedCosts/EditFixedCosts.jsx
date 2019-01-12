import React, { Component } from 'react';
import TextInput from '../../layout/inputs/TextInput';

class EditFixedCosts extends Component {
	render() {
		return (
			<div className="edit-fixedcosts">
				<section className="screen_title">
					<h1>Edit Fixed Costs</h1>
				</section>
				<form>
					<TextInput
						label="Rent Per Year"
						name="rent"
						type="text"
					/>
					<TextInput
						label="Electricity Per Year"
						name="electricity"
						type="text"
					/>
					<TextInput
						label="Water Per Year"
						name="water"
						type="text"
					/>
					<TextInput
						label="Wastage Percentage"
						name="wastage"
						type="text"
					/>
				</form>
			</div>
		);
	}
}

export default EditFixedCosts;
