import * as React from 'react';
import { LINKS } from '../../../models/Navigation.model';
import Logo from '../../UI/Logo/Logo';
import NavItems from '../NavItems/NavItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import './Toolbar.scss';

const toolbar = (props: any): JSX.Element => (
  <header className='Toolbar'>
    <DrawerToggle clicked={props.drawerToggleClicked}/>
    <div className='Logo'>
      <Logo />
    </div>
    <nav className='DesktopOnly'>
      <NavItems links={LINKS}/>
    </nav>
  </header>
)

export default toolbar;