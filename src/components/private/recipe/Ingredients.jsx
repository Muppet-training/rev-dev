import React, { Component } from 'react';

import RecipeIngredientInput from '../../layout/inputs/TextInput';

class Details extends Component {
	render() {
		return (
			<div className="recipe-ingredients">
				<section className="screen_title">
					<h1>Add Recipe Ingredients</h1>
				</section>
				<form>
					<RecipeIngredientInput
						label="Search Ingredient"
						name="internal"
						type="text"
					/>
					<RecipeIngredientInput
						label="Search Ingredient"
						name="internal"
						type="text"
					/>
				</form>
			</div>
		);
	}
}

export default Details;
