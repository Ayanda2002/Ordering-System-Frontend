import React from 'react';
import MenuButton from '../buttonComponents/menu-button';

const NavigationBar = () => {
  return (
    <div className="nav">
      <ul>
        <li>
          <MenuButton/>
        </li>
      </ul>
    </div>
  );
};

export default NavigationBar;
