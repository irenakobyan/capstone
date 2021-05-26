import React from 'react';
import Box from '../About/Box/Box';
import Search from '../Search/Search.js';
import Filter from './Filter/Filter.js';
import classes from './Cafes.module.css';
import { cafe } from "../../data.json";

const cafes = () => (
  <div>
    <Search />
    <div className={classes.filter}>
      <Filter />
  <div className={classes.cafeItems}>
    {cafe.map(cafe => (
      <div>
        <img src={cafe.logo} style={{width: '50%'}}/>
        <p>{cafe.name} <br />
           Review: <b>{cafe.review}</b> <br />
           Address: {cafe.address} <br />
           Contact: {cafe.phone} <br />
        </p>
        <a href="/filter" className={classes.button1}>Reserve</a>
      </div>
    ))}
    </div>
  </div>
  </div>
)

export default cafes;
