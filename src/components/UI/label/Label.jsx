import React from 'react';
import classes from './Label.module.css';

function Label({text, answer, ...props}) {
  return (
    <div className={classes.label}>
      <div className={classes.subLabel}>{text}</div>
      <div className={classes.labelAnswer}>{answer}</div>
    </div>
  )
}


export default Label;