import React, { Component } from 'react';

import RecipeIngredientInput from '../../../../components/textInputs/RecipeIngredientInput';

class Details extends Component {
	render() {
		return (
			<div className="recipe-details">
				<section className="details_input">
					<section className="screen_title">
						<h1>Add Ingredients</h1>
					</section>
					<form>
						<RecipeIngredientInput
							label="Search Ingredient"
							name="internal"
							type="text"
						/>
					</form>
				</section>
			</div>
		);
	}
}

export default Details;
