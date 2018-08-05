import * as React from 'react';
import { INavItems } from '../../../models/Navigation.model';
import './NavItems.scss';

const navItems = (props: INavItems): JSX.Element => {

  const items = props.links.map((link: any, index: number) => (
      <li key={index}>
        <a href={link.link} className={ link.active ? 'active' : '' }>{link.name}</a>
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