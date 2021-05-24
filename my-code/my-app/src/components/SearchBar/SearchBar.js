import React from 'react';

import classes from './SearchBar.module.css';
import Input from '../../components/UI/Input/Input';

import searchIcon from './../../assets/icon-magnifier-grey.svg';



const searchBar = ( props ) => {
    return (
        <div className={classes.SearchBar}>
            <img src={searchIcon} className={classes.searchIcon}></img>
            <Input inputtype="input" type="text" name="Search-Bar" placeholder="Search movies..." onChange={props.changed} />
        </div>
    );
};

export default searchBar;