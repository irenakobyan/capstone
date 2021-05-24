import React from 'react';
import Text from '../Text/Text.js';
import { data } from "../../data.js";
import classes from './PartnerItems.module.css';

const partnerItems = () => (
<div  className={classes.PartnerAll}>
  <Text head="Our Partner Restaurtants and Cafes" par="We work with more than 50 restaurants and cafes located in Yerevan!" />
   <div className={classes.PartnerItems}>
        {data.slice(0,3).map(data => (
          <div className={classes.eachBox}>
            <img src={data.logo} style={{width: '50%'}}/>
            <p>{data.name} <br />
               Review: <b>{data.review}</b> <br />
               Address: {data.address} <br />
               Contact: {data.phone}</p>
          </div>
        ))}
    </div>
    <a href="/filter" className={classes.button1}>View More</a>
  </div>
)

export default partnerItems;
