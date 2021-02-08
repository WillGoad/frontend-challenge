import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import MovieSearch from './containers/MovieSearch/MovieSearch';

class App extends Component {
  render () {
    return (
      <div>
        <Layout>
          <MovieSearch />
        </Layout>
      </div>
    );
    }
  }



export default App;
