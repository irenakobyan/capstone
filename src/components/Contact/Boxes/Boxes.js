import React from 'react';
import Box from '../../About/Box/Box.js';
import classes from '../../About/About.module.css';

const BoxesContact = () => (
  <div className={classes.AboutUs} >
  <div className={classes.boxes}>
    <Box
        par="Log In or Create an Account"
        but="Help"
         />
    <Box
        par="Search for the best option and reserve your seat NOW!"
        but="Partnership with Restaurants"
         />

  </div>
  </div>
)

export default BoxesContact;
