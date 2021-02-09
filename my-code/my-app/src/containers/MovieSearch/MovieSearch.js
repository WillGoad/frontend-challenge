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
        axios.get('http://www.omdbapi.com/?s=what&apikey=5d808408')
        .then(response => {
            // this.setState({results: response.data});
            // console.log(this.state.results)
            // var i;
            // let tempArray =[]
            // for (i = 0; i < response.data.Search.length; i++) {
                
            //     let film = {title:response.data.Search[i].Title,
            //         year:response.data.Search[i].Year,
            //         poster:response.data.Search[i].Poster,
            //         key:response.data.Search[i].imbdID
            //     };
                
            //     tempArray.push(film);
     
            // } 
            // console.log(tempArray)
            // this.setState({results: tempArray})
            // console.log(this.state.results)
            films = response.data.Search.map(film => {
                return {
                    title:film.Title, 
                    year:film.Year, 
                    poster:film.Poster, 
                    isLiked: false,
                    key:film.imbdID
                }
                        
            });
            console.log(films)
            this.setState({results: films});
            
        });
    }



    render () {
        console.log(this.state.results);

        return (
            <Aux>
                <SearchBar />
                <Results results={this.state.results}/>
            </Aux>
        );
    }
}

export default MovieSearch;