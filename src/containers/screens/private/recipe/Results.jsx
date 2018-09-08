import React, { Component } from 'react';

class Results extends Component {
	render() {
		return (
			<div className="recipe-results">
				<section className="details_input">
					<section className="screen_title">
						<h1>Recipe Results</h1>
					</section>
					<div className="results_overview">
						<section className="results_overview_names">
							<h3>Recipe Name</h3>
							<h3>Ingredient Cost</h3>
							<h3>Staff Cost</h3>
							<h3>Rental Cost</h3>
							<h3>Profit Per Year</h3>
							<h3>Profit Per Serve</h3>
							<h3>Compared Profit</h3>
						</section>
						<section className="compare_results">
							<div className="result_list">
								<h3>Parma</h3>
								<p>24%</p>
								<p>36.8%</p>
								<p>35%</p>
								<p>$12,861</p>
								<p>$7.42</p>
								<p>$7.42</p>
							</div>
							<div className="result_list">
								<h3>50g Ham</h3>
								<p>24%</p>
								<p>36.8%</p>
								<p>35%</p>
								<p>$12,861</p>
								<p>$7.42</p>
								<p>$7.42</p>
							</div>
							<div className="result_list">
								<h3>50g Ham</h3>
								<p>24%</p>
								<p>36.8%</p>
								<p>35%</p>
								<p>$12,861</p>
								<p>$7.42</p>
								<p>$7.42</p>
							</div>
						</section>
						<section className="compare_add">
							<h3>Compare Recipe</h3>
							<button>+ Recipe</button>
							<p>
								Use base recipe to optimise recipe
								profits
							</p>
						</section>
					</div>
				</section>
			</div>
		);
	}
}

export default Results;
