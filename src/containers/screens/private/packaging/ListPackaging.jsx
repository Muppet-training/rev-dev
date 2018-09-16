import React, { Component } from 'react';

class ListPackaging extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="list packaging">
				<section className="screen_title">
					<h1>Packaging List</h1>
				</section>
				<section className="list-content">
					<ul>
						<li>
							<h3>Packaging Name</h3>
						</li>
						<li>
							<h3>Current Cost</h3>
						</li>
						<li>
							<h3>Current Quantity</h3>
						</li>
						<li>
							<h3>Current Supplier</h3>
						</li>
						<li />
					</ul>
					<ul>
						<li>
							<p>8oz Coffee Cups</p>
						</li>
						<li>
							<p>$30.00</p>
						</li>
						<li>
							<p>1000</p>
						</li>
						<li>
							<p>Netra Packaging</p>
						</li>
						<li>
							<button>Edit</button>
						</li>
					</ul>
					<ul>
						<li>
							<p>12oz Coffee Cups</p>
						</li>
						<li>
							<p>$40.00</p>
						</li>
						<li>
							<p>1000</p>
						</li>
						<li>
							<p>Netra Packaging</p>
						</li>
						<li>
							<button>Edit</button>
						</li>
					</ul>
					<ul>
						<li>
							<p>16oz Coffee Cups</p>
						</li>
						<li>
							<p>$50.00</p>
						</li>
						<li>
							<p>1000</p>
						</li>
						<li>
							<p>Netra Packaging</p>
						</li>
						<li>
							<button>Edit</button>
						</li>
					</ul>
					<ul>
						<li>
							<p>Napkins</p>
						</li>
						<li>
							<p>$35.42</p>
						</li>
						<li>
							<p>3000</p>
						</li>
						<li>
							<p>Netra Packaging</p>
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

export default ListPackaging;
