import * as React from 'react';
import { LINKS } from '../../../models/Navigation.model';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Logo from '../../UI/Logo/Logo';
import NavItems from '../NavItems/NavItems';
import './SideDrawer.scss'

const sideDrawer = (props: any): JSX.Element => {

  const classes = `SideDrawer ${props.open ? 'Open' : 'Closed'}`;
  return (
    <React.Fragment>
      <Backdrop show={props.open} dismissed={props.closed}/>
      <div className={classes}>
        <div className='SideLogo'>
          <Logo closed={props.closed}/>
        </div>
        <nav>
          <NavItems links={LINKS}/>
        </nav>
      </div>
    </React.Fragment>
    
  );

}
  

export default sideDrawer;