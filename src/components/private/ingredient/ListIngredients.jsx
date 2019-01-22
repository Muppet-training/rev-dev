import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';

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
						<ul key={ingredient.name}>
							<li>
								<p>{ingredient.name}</p>
							</li>
							<li>
								<p>${ingredient.pCost}</p>
							</li>
							<li>
								<p>{ingredient.pGrams}g</p>
							</li>
							<li>
								<Link
									className="link-button"
									to={`/edit-ingredient/${ingredient.id}`}
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
	console.log(state); //Check here is the firestore data has synced correctly to the component
	return {
		ingredients: state.firestore.ordered.ingredients
	};
};

export default compose(
	firestoreConnect([
		{
			collection: 'ingredients'
		}
	]),
	connect(mapStateToProps)
)(ListIngredients);
