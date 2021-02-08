import React from 'react';

import classes from './SearchBar.module.css';
import Input from '../../components/UI/Input/Input';

// import Logo from '../../assets/icon-magnifier-grey.png';

const searchBar = () => {
    return (
        <div className={classes.SearchBar}>
            <Input inputtype="input" type="text" name="Search-Bar" placeholder="Search movies..."/>
        </div>
    );
};

export default searchBar;