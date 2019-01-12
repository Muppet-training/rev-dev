import React from 'react';
import { Link } from 'react-router-dom';

const ListRecipes = ({ recipes }) => {
	if (!recipes) {
		return <h1>Loading</h1>;
	}
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
					<ul key={recipe.name}>
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
};

export default ListRecipes;
