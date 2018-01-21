import React, { Component } from 'react'
// import { Grid } from 'semantic-ui-react'
import MenuBar from './MenuBar/MenuBar'
import Places from './Places/Places'
import gql from 'graphql-tag';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:3000/graphql' }),
  cache: new InMemoryCache()
});

class App extends Component {
  state = {
    allPlaces : [],
  }
  componentWillMount = () => {
    client.query({ query: gql`{
      allPlaces {
        name
        picture
        priceRange
        rating
      }
    }` }).then(({data}) => {
        const { allPlaces } = data;

        this.setState({allPlaces});
    });
  }

  render() {
    const { allPlaces } = this.state;

    return (
      <div>
        <MenuBar />
        <div className="App">
          <ApolloProvider client={client}>
            <Places allPlaces={allPlaces}/>
          </ApolloProvider>
        </div>
      
      </div>
    );
  }
}

export default App;
