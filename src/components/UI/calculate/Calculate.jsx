import React from 'react';
import BaseCalculate from './BaseCalculate';
import classes from './Calculate.module.css';


function Calculate() {
  return (

    <div className={classes.dark}>
        <BaseCalculate></BaseCalculate>
    </div>
  )
}

export default Calculate;

