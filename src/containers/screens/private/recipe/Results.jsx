import React, { Component } from 'react';
import TextInput from '../../../../components/textInputs/TextInput';
import ResultOverview from '../../../../components/content/ResultOverview';
import ResultIngredients from '../../../../components/content/ResultIngredients';
import CalcProfit from '../../../../components/content/CalcProfit';
import CalcCost from '../../../../components/content/CalcCost';
import CalcPro from '../../../../components/content/CalcPro';

class Results extends Component {
	render() {
		return (
			<div className="recipe-results">
				<section className="details_input">
					<section className="screen_title">
						<h1>Recipe Results</h1>
					</section>
					<ResultOverview />
					<div className="border_break" />
					<section className="result-price">
						<div>
							<h3>Recommended Sales Price</h3>
							<span>$16.21</span>
						</div>
						<form>
							<TextInput
								label="Confirm Sales Price"
								name="internal"
								type="text"
							/>
						</form>
						<div className="border_break margin" />
						<h3 className="base_results">
							Recipe Results are based off selling 10
							serves per day at $17.50
						</h3>
						<div className="border_break" />
					</section>
					<section className="result-calc">
						<CalcProfit />
						<CalcCost />
						<CalcPro />
					</section>
					<section className="result-ingredients">
						<div className="border_break" />
						<section className="screen_title">
							<h1>Ingredient Results</h1>
						</section>
						<ResultIngredients />
					</section>
				</section>
			</div>
		);
	}
}

export default Results;
