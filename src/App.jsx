import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from './store';

import TopBar from './components/layout/TopBar';
import LeftBar from './components/layout/LeftBar';

import Dashboard from './components/private/dashboard/Dashboard';
import EditRecipe from './components/private/recipe/EditRecipe';
import ListRecipes from './components/private/recipe/ListRecipes';
import EditIngredient from './components/private/ingredient/EditIngredient';
import ListIngredients from './components/private/ingredient/ListIngredients';
import EditPackaging from './components/private/packaging/EditPackaging';
import ListPackaging from './components/private/packaging/ListPackaging';
import EditFixedCosts from './components/private/fixedCosts/EditFixedCosts';
import EditStaff from './components/private/staff/EditStaff';
import ListStaff from './components/private/staff/ListStaff';

import Login from './components/public/Login';
import MenuWidth from './utils/MenuWidth';
import NoMenuWidth from './utils/NoMenuWidth';

class App extends Component {
	state = {
		toggleMenu: false
	};

	menuToggleClick = () => {
		this.setState((state) => ({
			toggleMenu: !state.toggleMenu
		}));
	};

	render() {
		const { toggleMenu } = this.state;

		return (
			<div id="app">
				<div
					id={toggleMenu === true ? 'menu' : 'no_menu'}
					{...(toggleMenu === true
						? MenuWidth()
						: NoMenuWidth())}
					className={
						toggleMenu === true ? (
							'userapp menu'
						) : (
							'userapp'
						)
					}
				>
					<TopBar menuToggleClick={this.menuToggleClick} />

					<LeftBar />
					<div className="screens">
						<BrowserRouter>
							<Switch>
								<Route
									path="/"
									exact={true}
									component={Dashboard}
								/>
								<Route
									path="/edit-recipe"
									exact
									component={EditRecipe}
								/>
								<Route
									path="/recipes"
									exact
									component={ListRecipes}
								/>
								<Route
									path="/edit-ingredient"
									exact
									component={EditIngredient}
								/>
								<Route
									path="/ingredients"
									exact
									component={ListIngredients}
								/>
								<Route
									path="/edit-packaging"
									exact
									component={EditPackaging}
								/>
								<Route
									path="/list-packaging"
									exact
									component={ListPackaging}
								/>
								<Route
									path="/fixed-costs"
									exact
									component={EditFixedCosts}
								/>
								<Route
									path="/update-staff"
									exact
									component={EditStaff}
								/>
								<Route
									path="/all-staff"
									exact
									component={ListStaff}
								/>
								<Route
									path="/login"
									exact
									component={Login}
								/>
							</Switch>
						</BrowserRouter>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
