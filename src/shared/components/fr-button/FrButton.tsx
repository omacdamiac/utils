import React, { Fragment } from 'react';
import './FrButton.scss';

const FrButton = ({text}:{text:string}) => {
    
  return (
    <Fragment>
        <button className='btn'>{text}</button>
    </Fragment>
  )
}

export default FrButton