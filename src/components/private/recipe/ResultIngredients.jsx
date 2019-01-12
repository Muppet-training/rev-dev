import React from 'react';

export default (props) => {
	return (
		<div
			className="results_overview ingredient_results"
			id="result_ingredients"
		>
			<ul>
				<li>
					<section className="results_overview_names">
						<h3 className="recipe_name">
							Ingredient Name
						</h3>
					</section>
				</li>
				<li>
					<section className="compare_results">
						<div className="result_list">
							<h3>Recipe Cost</h3>
						</div>
						<div className="result_list">
							<h3>Recipe Grams</h3>
						</div>
						<div className="result_list">
							<h3>Contribution %</h3>
						</div>
						<div className="result_list">
							<h3>Packet Costs</h3>
						</div>
						<div className="result_list">
							<h3>Packet Grams</h3>
						</div>
					</section>
				</li>
			</ul>
			<ul>
				<li>
					<section className="results_overview_names">
						<h3>Flour</h3>
						<h3>Eggs</h3>
					</section>
				</li>
				<li>
					<section className="compare_results">
						<div className="result_list">
							<p>24%</p>
							<p>36.8%</p>
						</div>
						<div className="result_list">
							<p>24%</p>
							<p>$7.42</p>
						</div>
						<div className="result_list">
							<p>24%</p>
							<p>36.8%</p>
						</div>
						<div className="result_list">
							<p>24%</p>
							<p>$7.42</p>
						</div>
						<div className="result_list">
							<p>24%</p>
							<p>$7.42</p>
						</div>
					</section>
				</li>
			</ul>
		</div>
	);
};
