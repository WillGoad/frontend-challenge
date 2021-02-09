import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Film.module.css';

class Film extends Component {

    render () {
        let film = null;
        if ( this.props.poster !== "N/A") {
            switch ( this.props.isLiked ) {
                case ( true ):
                    film = <div className={classes.Film}></div>;
                    break;
                case ( false ): 
                    film =  <div className={classes.Film}>
                                <div className={classes.ContentContainer}>
                                    <p>{this.props.title}</p>
                                    <p className={classes.Year}>{this.props.year}</p>
                                </div>
                                <img src={this.props.poster} alt="Poster" />
                            </div>;
                    break;
                default:
                    film = null;
            }
        }
      
        return film;
    }
}

Film.propTypes = {
    isLiked: PropTypes.bool.isRequired
};

export default Film;