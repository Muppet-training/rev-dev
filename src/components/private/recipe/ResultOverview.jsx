import React from 'react';

export default (props) => {
	return (
		<div className="results_overview" id="results_overview">
			<div>
				<ul>
					<li>
						<section className="results_overview_names">
							<h3 className="recipe_name">
								Recipe Name
							</h3>
						</section>
					</li>
					<li>
						<section className="compare_results">
							<div className="result_list">
								<h3>Parma</h3>
							</div>
							<div className="result_list">
								<h3>50g Ham 50g Ham 50g Ham</h3>
							</div>
							<div className="result_list compare_add">
								<h3>Compare Recipe</h3>
							</div>
						</section>
					</li>
				</ul>
			</div>
			<div>
				<ul>
					<li>
						<section className="results_overview_names">
							<h3>Ingredient Cost</h3>
							<h3>Staff Cost</h3>
							<h3>Rental Cost</h3>
							<h3>Profit Per Year</h3>
							<h3>Profit Per Serve</h3>
							<h3>Compared Profit</h3>
						</section>
					</li>
					<li>
						<section className="compare_results">
							<div className="result_list">
								<p>24%</p>
								<p>36.8%</p>
								<p>35%</p>
								<p>$12,861</p>
								<p>$7.42</p>
								<p>$7.42</p>
							</div>
							<div className="result_list">
								<p>24%</p>
								<p>36.8%</p>
								<p>35%</p>
								<p>$12,861</p>
								<p>$7.42</p>
								<p>$7.42</p>
							</div>
							<div className="result_list compare_add">
								<button>+ Recipe</button>
								<p>
									Use base recipe to optimise recipe
									profits
								</p>
							</div>
						</section>
					</li>
				</ul>
			</div>
		</div>
	);
};
