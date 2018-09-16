import React, { Component } from 'react';

class ListRecipes extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="list recipe">
				<section className="screen_title">
					<h1>Recipe List</h1>
				</section>
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
					<ul>
						<li>
							<p>Apple Pie</p>
						</li>
						<li>
							<p>$6.12</p>
						</li>
						<li>
							<p>$18.00</p>
						</li>
						<li>
							<p>23%</p>
						</li>
						<li>
							<button>Edit</button>
						</li>
					</ul>
					<ul>
						<li>
							<p>Burger</p>
						</li>
						<li>
							<p>$4.58</p>
						</li>
						<li>
							<p>$12.00</p>
						</li>
						<li>
							<p>12%</p>
						</li>
						<li>
							<button>Edit</button>
						</li>
					</ul>
					<ul>
						<li>
							<p>Orange Cake</p>
						</li>
						<li>
							<p>$5.80</p>
						</li>
						<li>
							<p>$13.00</p>
						</li>
						<li>
							<p>15.8%</p>
						</li>
						<li>
							<button>Edit</button>
						</li>
					</ul>
					<ul>
						<li>
							<p>Tomato Soup</p>
						</li>
						<li>
							<p>$8.23</p>
						</li>
						<li>
							<p>$12</p>
						</li>
						<li>
							<p>63.21%</p>
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

export default ListRecipes;
