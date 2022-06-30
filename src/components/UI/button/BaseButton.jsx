import React from 'react'
import classes from './BaseButton.module.css';

function BaseButton({children, push,...props}) {
  return (
    <button onClick={(e) => push(children)} className={classes.baseButton}>
      {children}
    </button>
  )
}

export default BaseButton;
