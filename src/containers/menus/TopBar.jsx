import React, { Component } from 'react';
import styled from 'styled-components';

const Navbar = styled.div`
	display: grid;
	grid-row: 1;
	grid-column: 1;
	grid-area: header;
	background-color: #fff;
	border-bottom: 1px solid #e0e0e0;
	height: 50px;
	background-color: #515151;
`;

const MenuList = styled.ul`
	display: flex;
	-webkit-box-align: start;
	-ms-flex-align: start;
	align-items: flex-start;
	margin: 0px;
`;

const ListItem = styled.li`
	margin: 0px;
	padding: 0px;
	font-family: "Montserrat";
	outline: 0;
	text-decoration: none;
	border: 0;
	list-style-type: none;
`;

class TopBar extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Navbar>
				<MenuList>
					<ListItem>
						<p>Logo</p>
					</ListItem>
					<ListItem>
						<p>Logo</p>
					</ListItem>
					<ListItem>
						<p>Logo</p>
					</ListItem>
				</MenuList>
			</Navbar>
		);
	}
}

export default TopBar;
