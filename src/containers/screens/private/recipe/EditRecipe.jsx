import React, { Component } from 'react';

import Details from './Details';
import Ingredients from './Ingredients';
import Results from './Results';

class EditRecipe extends Component {
	constructor(props) {
		super(props);
		this.state = {
			toggle: 'ingredients'
		};
	}

	render() {
		const { toggle } = this.state;
		console.log(toggle);

		function content(toggle) {
			switch (toggle) {
				case 'details':
					return <Details />;
				case 'ingredients':
					return <Ingredients />;
				case 'results':
					return <Results />;
				default:
					return <Details />;
			}
		}

		console.log(content);

		return <div className="edit-recipe">{content(toggle)}</div>;
	}
}

export default EditRecipe;
