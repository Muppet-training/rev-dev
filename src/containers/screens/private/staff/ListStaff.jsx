import React, { Component } from 'react';

class ListStaff extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="list staff">
				<section className="screen_title">
					<h1>All Staff</h1>
				</section>
				<section className="list-content">
					<ul>
						<li>
							<h3>Position Name</h3>
						</li>
						<li>
							<h3>Cost Per Hour</h3>
						</li>
						<li />
					</ul>
					<ul>
						<li>
							<p>Barista</p>
						</li>
						<li>
							<p>$18.50</p>
						</li>
						<li>
							<button>Edit</button>
						</li>
					</ul>
					<ul>
						<li>
							<p>Waiter</p>
						</li>
						<li>
							<p>$16.10</p>
						</li>
						<li>
							<button>Edit</button>
						</li>
					</ul>
					<ul>
						<li>
							<p>Chef</p>
						</li>
						<li>
							<p>$24.80</p>
						</li>
						<li>
							<button>Edit</button>
						</li>
					</ul>
					<ul>
						<li>
							<p>Head Chef</p>
						</li>
						<li>
							<p>$29.70</p>
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

export default ListStaff;
