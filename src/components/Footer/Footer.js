import React from 'react';
import Text from '../Text/Text.js';
import classes from './Footer.module.css';

const headerItems = () => (
  <div className={classes.footerItems}>
    <p> 24 Azatutyan Ave, Yerevan, Armenia <br />
        +374 11 900 901 <br />
        hello@staff.am</p>
    <p> COPYRIGHT 2021 ALL RIGHTS RESERVED. </p>
  </div>
)

export default headerItems;
