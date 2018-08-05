import * as React from 'react';
import './DrawerToggle.scss';

const drawerToggle = (props: any): JSX.Element => {
  return (
    <div onClick={props.clicked} className='DrawerToggle'>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default drawerToggle