import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Film.module.css';

class Film extends Component {
    render () {
        let film = null;

        switch ( this.props.isLiked ) {
            case ( true ):
                film = <div className={classes.Film}></div>;
                break;
            case ( false ): 
                film =  <div className={classes.Film}>
                            <p>{this.props.title}</p>
                            <p>{this.props.year}</p>
                            <img src={this.props.poster} alt="Poster" />
                        </div>;
                break;
            default:
                film = null;
        }
        
    
        return film;
    }
}

Film.propTypes = {
    type: PropTypes.string.isRequired
};

export default Film;