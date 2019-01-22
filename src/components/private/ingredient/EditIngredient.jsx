import React, { Component } from 'react';
import TextInput from '../../layout/inputs/TextInput';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createIngredient } from '../../../actions/ingredientActions';
import ListIngredients from './ListIngredients';
import { firestoreConnect } from 'react-redux-firebase';

class EditIngredient extends Component {
	state = {
		name: '',
		pCost: '',
		pGrams: ''
	};

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		// console.log(this.state);

		// This will pass in the ingredient into the dispatch action
		this.props.createIngredient(this.state);
	};

	render() {
		// console.log(this.props);
		const { ingredient } = this.props;

		if (ingredient) {
			return (
				<div className="edit-ingredient">
					<ListIngredients />
					<section className="screen_title">
						<h1>Create Ingredient</h1>
					</section>
					<form onSubmit={this.handleSubmit}>
						<TextInput
							label="Ingredient Name"
							name="name"
							type="text"
							onChange={this.handleChange}
							defaultValue={ingredient.name}
						/>
						<TextInput
							label="Packet Cost"
							name="pCost"
							type="text"
							onChange={this.handleChange}
							defaultValue={ingredient.pCost}
						/>
						<TextInput
							label="Packet Grams"
							name="pGrams"
							type="text"
							onChange={this.handleChange}
							defaultValue={ingredient.pGrams}
						/>
						<button type="submit">Save</button>
					</form>
					<div className="border_break" />
				</div>
			);
		} else {
			return <div>Loading Ingredient...</div>;
		}
	}
}

const mapStateToProps = (state, ownProps) => {
	// console.log(state);

	const id = ownProps.match.params.id;
	const ingredients = state.firestore.data.ingredients;
	const ingredient = ingredients ? ingredients[id] : null;
	return {
		ingredient: ingredient
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		createIngredient: (ingredient) =>
			dispatch(createIngredient(ingredient))
	};
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	firestoreConnect([
		{
			collection: 'ingredients'
		}
	])
)(EditIngredient);
