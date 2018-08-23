import React, { Component } from 'react';

import icon from './icons/menu.svg';
class TopBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="topbar">
        <ul>
          <li className="menu-toggle">
            <img src={icon} />
          </li>
          <li className="brand">
            Brand
          </li>
          <li className="avatar">
            a
          </li>
        </ul>
      </div>
    );
  }
}

export default TopBar;
