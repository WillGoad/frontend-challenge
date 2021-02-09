import React, { Component } from 'react';
import axios from 'axios';

import Aux from '../../hoc/Aux_';
import Results from '../../components/Results/Results';
import SearchBar from '../../components/SearchBar/SearchBar';

class MovieSearch extends Component {
    state = {
        searchTerm: "",
        shouldSearch: false,
        results: []
    }

    componentDidMount() {
        let films;
        axios.get('http://www.omdbapi.com/?s=facebook&apikey=5d808408')
        .then(response => {
            films = response.data.Search.map(film => {
                return {
                    title:film.Title, 
                    year:film.Year, 
                    poster:film.Poster, 
                    isLiked: false,
                    key:film.imbdID
                }
                        
            });
            this.setState({results: films});
            
        });
    }



    render () {
        return (
            <Aux>
                <SearchBar />
                <Results results={this.state.results}/>
            </Aux>
        );
    }
}

export default MovieSearch;