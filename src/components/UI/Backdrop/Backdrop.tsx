import * as React from 'react';
import './Backdrop.scss';
const backdrop = (props: any) => (
    props.show 
        ? <div onClick={props.dismissed} className='Backdrop'>{props.children}</div>
        : null
)

export default backdrop;