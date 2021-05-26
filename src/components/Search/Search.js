import React, { Component } from "react";
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import classes from "./Search.module.css";
import { cafe } from "../../data.json";

class Search extends Component {
  state = {
    search: ""
  };

  handleChange = (e) => {
    this.setState({
      search: e.target.value
    })
    console.log(this.state.search);
  }


render() {

  const filteredCafes = cafe.filter(cafe => {
    return cafe.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
  });

  return (
    <div className={classes.grow}>

          <div className={classes.search}>
          <SearchIcon />
            <InputBase
              placeholder="Search"
              classes={ classes.inputRoot}
              inputProps={{ 'aria-label': 'search' }}
              onChange={this.handleChange}
            />
            {filteredCafes.map(cafe => {
                console.log(cafe.name);
              })}
          </div>
          <div className={classes.grow} />
    </div>
  );
}
}

export default Search;
