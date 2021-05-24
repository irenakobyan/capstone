import React from 'react';
import Box from '../About/Box/Box';
import classes from './Cafes.module.css';
import { data } from "../../data.js";

const cafes = () => (
  <div className={classes.cafeItems}>
    {data.map(data => (
      <div>
        <img src={data.logo} style={{width: '50%'}}/>
        <p>{data.name} <br />
           Review: <b>{data.review}</b> <br />
           Address: {data.address} <br />
           Contact: {data.phone}</p>
        <a href="/filter" className={classes.button1}>Reserve</a>
      </div>
    ))}
  </div>
)

export default cafes;
