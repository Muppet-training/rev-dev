import React, { Component } from 'react';

import TextInput from '../../layout/inputs/TextInput';

class Details extends Component {
	render() {
		return (
			<div className="recipe-details">
				<section className="details_input">
					<section className="screen_title">
						<h1>Add Recipe Details</h1>
					</section>
					<form>
						<TextInput
							label="Use as Internal Recipe"
							name="internal"
							type="text"
						/>
						<TextInput
							label="Recipe Name"
							name="name"
							type="text"
						/>
						<TextInput
							label="Recipe Serving Size"
							name="size"
							type="text"
						/>

						<TextInput
							label="Sales Price"
							name="price"
							type="text"
						/>
						<TextInput
							label="Expected Sales Per Day"
							name="sales"
							type="text"
						/>
						<TextInput
							label="Staff Time Involved"
							name="staff_time"
							type="text"
						/>
						<TextInput
							label="Total Cooking time"
							name="cooking_time"
							type="text"
						/>
					</form>
				</section>

				<section className="details_packaging">
					<section className="screen_title">
						<h1>Add Packaging</h1>
					</section>
					<form>
						<TextInput
							label="Packaging Type"
							name="packaging"
							type="text"
						/>
					</form>
				</section>
			</div>
		);
	}
}

export default Details;
