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

    queryUpdatedHandler = (event) => {
        console.log(event.target.value);
        this.setState( {
            searchTerm: event.target.value
        })
        console.log(this.state.searchTerm);
        if (this.state.searchTerm.length >= 3) {
            console.log("SearchTerm Reached")
            let films;
            axios.get('http://www.omdbapi.com/?s=' + this.state.searchTerm + '&apikey=5d808408')
            .then(response => {
                if ( response.data.Search !== "undefined") {
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
                }
            });
        }
    }

    // componentDidMount() {
        
    //     let films;
    //     axios.get('http://www.omdbapi.com/?s=happy&apikey=5d808408')
    //     .then(response => {
    //         films = response.data.Search.map(film => {
    //             return {
    //                 title:film.Title, 
    //                 year:film.Year, 
    //                 poster:film.Poster, 
    //                 isLiked: false,
    //                 key:film.imbdID
    //             }
                        
    //         });
    //         this.setState({results: films});
            
    //     });
    // }



    render () {
        return (
            <Aux>
                <SearchBar changed={this.queryUpdatedHandler}/>
                <Results results={this.state.results}/>
            </Aux>
        );
    }
}

export default MovieSearch;