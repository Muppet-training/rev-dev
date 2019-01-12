import React, { Component } from 'react';
import ListRecipes from '../recipe/ListRecipes';

class Dashboard extends Component {
	render() {
		return (
			<div className="list recipe">
				<section className="screen_title">
					<h1>Dashboard</h1>
				</section>
				<ListRecipes />
			</div>
		);
	}
}

export default Dashboard;
