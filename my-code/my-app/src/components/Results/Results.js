import React from 'react';

import classes from './Results.module.css';
import Film from './Film/Film';

const results = (props) => {
    return (
        
        <div className={classes.Results}>
            {props.results.map(result => {
                return <Film 
                    title={result.title} 
                    year={result.year} 
                    poster={result.poster} 
                    isLiked={result.isLiked}
                    key={result.key} />
                
            })}
        </div>
    );
};

export default results;