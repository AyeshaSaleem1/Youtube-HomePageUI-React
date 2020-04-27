import React, { Component } from 'react'
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import { fade, makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  icon: {
    color:'rgb(185, 179, 179)',
    '&:hover': {
      color:'black'  //this
    },
  },

}));



export default function SearchBar() {
  const classes = useStyles();
  return (
           <div class="input-group">
          <input type="text" class="form-control" placeholder="Search"/>
            <div class="input-group-append">
              <button class="btn" type="button">
              <SearchIcon  style={{fontSize:'x-large',paddingLeft:'0px',paddingRight:0}} className = {classes.icon}/>
              </button>
            </div>
          </div>
 
  )
}




