import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ListIngredients extends Component {
	render() {
		const { ingredients } = this.props;

		if (!ingredients) return <h1>Loading...</h1>;
		return (
			<div className="list ingredient">
				<section className="screen_title">
					<h1>Ingredients List</h1>
				</section>
				<section className="list-content">
					<ul>
						<li>
							<h3>Ingredient Name</h3>
						</li>
						<li>
							<h3>Current Cost</h3>
						</li>
						<li>
							<h3>Current Grams</h3>
						</li>
						<li />
					</ul>
					{ingredients.map((ingredient) => (
						<ul>
							<li>
								<p>{ingredient.name}</p>
							</li>
							<li>
								<p>${ingredient.cost}</p>
							</li>
							<li>
								<p>{ingredient.packetGrams}g</p>
							</li>
							<li>
								<Link
									className="link-button"
									to={`/edit-ingredient/${ingredient.name}`}
								>
									Edit
								</Link>
							</li>
						</ul>
					))}
				</section>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		ingredients: state.ingredient.ingredients
	};
};

export default connect(mapStateToProps)(ListIngredients);
