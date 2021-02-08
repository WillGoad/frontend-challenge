import React, { Component } from 'react';

import Aux from '../../hoc/Aux_';
import Results from '../../components/Results/Results';
import SearchBar from '../../components/SearchBar/SearchBar';

class MovieSearch extends Component {
    state = {
        searchTerm: "",
        shouldSearch: false,
        results: [
            {title: "What We Do in the Shadows", year: "2018", poster:"https://m.media-amazon.com/images/M/MV5BMjAwNDA5NzEwM15BMl5BanBnXkFtZTgwMTA1MDUyNDE@._V1_SX300.jpg", isLiked: false},
            {title: "What We Do in the Shadows", year: "2018", poster:"https://m.media-amazon.com/images/M/MV5BMjAwNDA5NzEwM15BMl5BanBnXkFtZTgwMTA1MDUyNDE@._V1_SX300.jpg", isLiked: false},
            {title: "What We Do in the Shadows", year: "2018", poster:"https://m.media-amazon.com/images/M/MV5BMjAwNDA5NzEwM15BMl5BanBnXkFtZTgwMTA1MDUyNDE@._V1_SX300.jpg", isLiked: false},
            {title: "What We Do in the Shadows", year: "2018", poster:"https://m.media-amazon.com/images/M/MV5BMjAwNDA5NzEwM15BMl5BanBnXkFtZTgwMTA1MDUyNDE@._V1_SX300.jpg", isLiked: false},
            {title: "What We Do in the Shadows", year: "2018", poster:"https://m.media-amazon.com/images/M/MV5BMjAwNDA5NzEwM15BMl5BanBnXkFtZTgwMTA1MDUyNDE@._V1_SX300.jpg", isLiked: false},
            {title: "What We Do in the Shadows", year: "2018", poster:"https://m.media-amazon.com/images/M/MV5BMjAwNDA5NzEwM15BMl5BanBnXkFtZTgwMTA1MDUyNDE@._V1_SX300.jpg", isLiked: false},
            {title: "What We Do in the Shadows", year: "2018", poster:"https://m.media-amazon.com/images/M/MV5BMjAwNDA5NzEwM15BMl5BanBnXkFtZTgwMTA1MDUyNDE@._V1_SX300.jpg", isLiked: false},
            {title: "What We Do in the Shadows", year: "2018", poster:"https://m.media-amazon.com/images/M/MV5BMjAwNDA5NzEwM15BMl5BanBnXkFtZTgwMTA1MDUyNDE@._V1_SX300.jpg", isLiked: false},
            {title: "What We Do in the Shadows", year: "2018", poster:"https://m.media-amazon.com/images/M/MV5BMjAwNDA5NzEwM15BMl5BanBnXkFtZTgwMTA1MDUyNDE@._V1_SX300.jpg", isLiked: false},
            {title: "What We Do in the Shadows", year: "2018", poster:"https://m.media-amazon.com/images/M/MV5BMjAwNDA5NzEwM15BMl5BanBnXkFtZTgwMTA1MDUyNDE@._V1_SX300.jpg", isLiked: false},
            {title: "What We Do in the Shadows", year: "2018", poster:"https://m.media-amazon.com/images/M/MV5BODYzNjI0ODUzNF5BMl5BanBnXkFtZTcwNTI1MjQ2Nw@@._V1_SX300.jpg", isLiked: false},
            {title: "What We Do in the Shadows", year: "2018", poster:"https://m.media-amazon.com/images/M/MV5BMjAwNDA5NzEwM15BMl5BanBnXkFtZTgwMTA1MDUyNDE@._V1_SX300.jpg", isLiked: false}
        ]
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