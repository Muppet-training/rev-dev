import React, { Component } from 'react';

class Details extends Component {
	render() {
		return (
			<div className="recipe-details">
				<section className="details_input">
					<section className="screen_title">
						<h1>Add Recipe Details</h1>
					</section>
					<form>
						<div className="input_box">
							<label>Recipe Name</label>
							<input name="name" type="text" />
						</div>
						<div className="input_box">
							<label>Recipe Serving Size</label>
							<input name="name" type="text" />
						</div>
						<div className="input_box">
							<label>Use as Internal Recipe</label>
							<input name="name" type="text" />
						</div>
						<div className="input_box">
							<label>Sales Price</label>
							<input name="name" type="text" />
						</div>
						<div className="input_box">
							<label>Expected Sales Per Day</label>
							<input name="name" type="text" />
						</div>
						<div className="input_box">
							<label>Staff Time Involved</label>
							<input name="name" type="text" />
						</div>
						<div className="input_box">
							<label>Total Cooking time</label>
							<input name="name" type="text" />
						</div>
					</form>
				</section>

				<section className="details_packaging">
					<section className="screen_title">
						<h1>Add Packaging</h1>
					</section>
					<form>
						<div className="input_box">
							<label>Packaging Type</label>
							<input name="name" type="text" />
						</div>
					</form>
				</section>
			</div>
		);
	}
}

export default Details;
