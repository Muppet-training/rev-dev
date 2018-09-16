import React, { Component } from 'react';

class ListIngredients extends Component {
	constructor(props) {
		super(props);
	}

	render() {
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
						<li>
							<h3>Current Supplier</h3>
						</li>
						<li />
					</ul>
					<ul>
						<li>
							<p>Eggs</p>
						</li>
						<li>
							<p>$4.00</p>
						</li>
						<li>
							<p>700g</p>
						</li>
						<li>
							<p>Sunny Eggs</p>
						</li>
						<li>
							<button>Edit</button>
						</li>
					</ul>
					<ul>
						<li>
							<p>Flour</p>
						</li>
						<li>
							<p>$15.62</p>
						</li>
						<li>
							<p>10kg</p>
						</li>
						<li>
							<p>Wheat Plains</p>
						</li>
						<li>
							<button>Edit</button>
						</li>
					</ul>
					<ul>
						<li>
							<p>Rice</p>
						</li>
						<li>
							<p>$11.29</p>
						</li>
						<li>
							<p>10kg</p>
						</li>
						<li>
							<p>Asian Farmer</p>
						</li>
						<li>
							<button>Edit</button>
						</li>
					</ul>
					<ul>
						<li>
							<p>Tomatos</p>
						</li>
						<li>
							<p>$1.67</p>
						</li>
						<li>
							<p>450g</p>
						</li>
						<li>
							<p>Aussie AF</p>
						</li>
						<li>
							<button>Edit</button>
						</li>
					</ul>
				</section>
			</div>
		);
	}
}

export default ListIngredients;
