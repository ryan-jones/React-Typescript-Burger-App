import * as React from 'react';
import { INavItems } from '../../../models/Navigation.model';
import './NavItems.scss';
import { NavLink } from 'react-router-dom';

const navItems = (props: INavItems): JSX.Element => {

  const items = props.links.map((link: any, index: number) => (
      <li key={index}>
        <NavLink 
          exact={true}
          to={link.link}
          activeClassName="active">{link.name}</NavLink>
      </li>
    ) 
  );

    return (
      <ul className='NavItems'>
        {items}
      </ul>
    )
}
export default navItems;