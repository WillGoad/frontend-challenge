import React from 'react';

import classes from './Results.module.css';
import Film from './Film/Film';

const results = (props) => {
    // let tempVal = props.results.map(result=> {
    //             console.log(result);
    //             return result;
    // })
    // console.log(tempVal);
    console.log(props.results.isLiked)
    return (
        
        <div className={classes.Results}>
            {props.results.map(result => {
                console.log(result.title)
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