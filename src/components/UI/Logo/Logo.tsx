import * as React from 'react';
import { ILogoProps } from '../../../models/UIComponents.model';
import burgerLogo from 'src/assets/images/burger-logo.png'
import './Logo.scss';

const logo = (props: ILogoProps): JSX.Element => (
  <div onClick={props.closed} className='Logo'>
    <img src={burgerLogo} alt='My Burger'/>
  </div>
)

export default logo;