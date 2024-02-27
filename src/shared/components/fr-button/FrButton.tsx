import React, { Fragment } from 'react';
import './FrButton.scss';

export const FrButton = ({text}:{text:string}) => {
    
  return (
    <Fragment>
        <button className='btn'>{text}</button>
    </Fragment>
  )
}
