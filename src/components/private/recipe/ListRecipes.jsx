import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ListRecipes extends Component {
	render() {
		const recipes = [
			{
				name: 'Appie Pie',
				profitPreServe: 6.12,
				salesPrice: 18.75,
				profitMargin: 0.23
			},
			{
				name: 'Burger',
				profitPreServe: 5.8,
				salesPrice: 13,
				profitMargin: 0.15
			},
			{
				name: 'Orange Cake',
				profitPreServe: 34,
				salesPrice: 120,
				profitMargin: 0.44
			},
			{
				name: 'Burrito',
				profitPreServe: 9.1,
				salesPrice: 21,
				profitMargin: 0.67
			}
		];

		if (recipes) {
			return (
				<div className="list recipe">
					<section className="list-content">
						<ul>
							<li>
								<h3>Recipe Name</h3>
							</li>
							<li>
								<h3>Profit Per Serve</h3>
							</li>
							<li>
								<h3>Sale Price</h3>
							</li>
							<li>
								<h3>Profit Margin</h3>
							</li>
							<li />
						</ul>
						{recipes.map((recipe) => (
							<ul>
								<li>
									<p>{recipe.name}</p>
								</li>
								<li>
									<p>${recipe.profitPreServe}</p>
								</li>
								<li>
									<p>${recipe.salesPrice}</p>
								</li>
								<li>
									<p>{recipe.profitMargin}%</p>
								</li>
								<li>
									<Link
										className="link-button"
										to={`/edit-recipe/${recipe.name}`}
									>
										Edit
									</Link>
								</li>
							</ul>
						))}
					</section>
				</div>
			);
		} else {
			return <h1>Loading</h1>;
		}
	}
}

export default ListRecipes;
