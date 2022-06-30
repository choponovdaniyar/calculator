import {React, useState} from 'react'
import Button from '../button/Button';
import classes from './ButtonList.module.css';

export default function ButtonList({buttons, push}) {
    return (
        <div className={classes.buttonList}>
                {buttons.map( button => 
                    <Button push={push}>{button}</Button>
                )}
        </div>
    )
}
