import React from 'react';
import Box from './Box/Box';
import Text from '../Text/Text.js';
import classes from './About.module.css';
import user from '../../assets/user.png';
import furniture from '../../assets/furniture.png';
import contact from '../../assets/contact.png';


const aboutUs = () => (
  <div className={classes.AboutUs}>
      <Text head="Who We Are" par="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software" />
    <div className={classes.boxes}>
      <Box par="Log In or Create an Account" but="Log In" img={user} link="/login" />
      <Box par="Search for the best option and reserve your seat NOW!" but="Filter the restaurants and cafes" img={furniture} link="/filter" />
      <Box par="Contact Us anytime if you have additional questions" but="Contact Us" img={contact} link="/contact" />
    </div>
  </div>
)

export default aboutUs;
