import React, { Component } from 'react';
import ListRecipes from '../recipe/ListRecipes';
import { connect } from 'react-redux';

class Dashboard extends Component {
	render() {
		const { recipes } = this.props;
		console.log(this.props);
		return (
			<div className="list recipe">
				<section className="screen_title">
					<h1>Dashboard</h1>
				</section>
				<ListRecipes recipes={recipes} />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		recipes: state.recipe.recipes
	};
};

export default connect(mapStateToProps)(Dashboard);
